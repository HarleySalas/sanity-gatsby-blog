import { format } from "date-fns";

export default {
  name: "post",
  type: "document",
  title: "Blog Post",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Название статьи / Title",
      description:
        "Названия должны быть цепляющими, не длинными / Titles should be catchy, descriptive, and not too long",
    },
    {
      name: "slug",
      type: "slug",
      title: "Имя ссылки / Slug",
      description:
        "Имя ссылки для статьи / Some frontends will require a slug to be set to be able to show the post",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Опубликовано / Published at",
      description:
        "Может быть использовано для отложенного постинга / This can be used to schedule post for publishing",
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: "Главная картинка / Main image",
    },
    {
      name: "metaDescription",
      type: "text",
      title: "--- / Meta Description",
      description:
        "Описание будет видно в поисковиках Яндекс, Google, когда люди делятся в соцсетях / This ends up on summary pages, on Google, when people share your post in social media.",
    },
    {
      name: "excerpt",
      type: "text",
      title: "О статье / Excerpt",
      description:
        "Описание будет видно в поисковиках Яндекс, Google, когда люди делятся в соцсетях / This ends up on summary pages, on Google, when people share your post in social media.",
    },
    {
      name: "authors",
      title: "Автор / Authors",
      type: "array",
      of: [
        {
          type: "authorReference",
        },
      ],
    },
    {
      name: "categories",
      type: "array",
      title: "Категории / Categories",
      of: [
        {
          type: "reference",
          to: {
            type: "category",
          },
        },
      ],
    },
    {
      name: "body",
      type: "bodyPortableText",
      title: "Текст статьи / Body",
    },
  ],
  orderings: [
    {
      name: "publishingDateAsc",
      title: "Publishing date new–>old",
      by: [
        {
          field: "publishedAt",
          direction: "asc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
    {
      name: "publishingDateDesc",
      title: "Publishing date old->new",
      by: [
        {
          field: "publishedAt",
          direction: "desc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      slug: "slug",
      media: "mainImage",
    },
    prepare({ title = "No title", publishedAt, slug = {}, media }) {
      const dateSegment = format(new Date(publishedAt), "yyyy/MM");
      const path = `/${dateSegment}/${slug.current}/`;
      return {
        title,
        media,
        subtitle: publishedAt ? path : "Missing publishing date",
      };
    },
  },
};
