const { isFuture } = require("date-fns");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new FilterWarningsPlugin({
        exclude:
          /mini-css-extract-plugin[^]*Conflicting order. Following module has been added:/,
      }),
    ],
  });
};

const createProjectPages = async (graphql, actions) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityProject(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const projectEdges = (result.data.allSanityProject || {}).edges || [];

  projectEdges
    .filter((edge) => !isFuture(new Date(edge.node.publishedAt)))
    .forEach((edge) => {
      const { id, slug = {} } = edge.node;
      const path = `/projects/${slug.current}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/Project.jsx"),
        context: { id },
      });
    });
};

const createCategoryPages = async (graphql, actions) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityCategory {
        nodes {
          slug {
            current
          }
          id
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const categoryNodes = (result.data.allSanityCategory || {}).nodes || [];

  categoryNodes
    // Loop through the category nodes, but don't return anything
    .forEach((node) => {
      // Desctructure the id and slug fields for each category
      const { id, slug = {} } = node;
      // If there isn't a slug, we want to do nothing
      if (!slug) return;

      // Make the URL with the current slug
      const path = `/articles/category/${slug.current}`;

      // Create the page using the URL path and the template file, and pass down the id
      // that we can use to query for the right category in the template file
      createPage({
        path,
        component: require.resolve("./src/templates/Category.jsx"),
        context: { id },
      });
    });
};

const createArticlePages = async (graphql, actions) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const postEdges = (result.data.allSanityPost || {}).edges || [];

  postEdges
    .filter((edge) => !isFuture(new Date(edge.node.publishedAt)))
    .forEach((edge) => {
      const { id, slug = {} } = edge.node;
      const path = `/article/${slug.current}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/Article.jsx"),
        context: { id },
      });
    });
};

exports.createPages = async ({ actions, graphql }) => {
  await createProjectPages(graphql, actions);
  await createCategoryPages(graphql, actions);
  await createArticlePages(graphql, actions);
};

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    SanityCategory: {
      posts: {
        type: ["SanityPost"],
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            type: "SanityPost",
            query: {
              filter: {
                categories: {
                  elemMatch: {
                    _id: {
                      eq: source._id,
                    },
                  },
                },
              },
            },
          });
        },
      },
    },
  };
  createResolvers(resolvers);
};
