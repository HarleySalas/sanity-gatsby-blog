export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "623db031ec3f666a0323190c",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-b5r5udj8",
                  apiId: "66d0b0ad-501d-4054-a10b-52549a68e766",
                },
                {
                  buildHookId: "623db031418a166e14b41cbc",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-pao5bytf",
                  apiId: "8340b500-fe36-4430-a0a1-3327d8656771",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/HarleySalas/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-pao5bytf.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
