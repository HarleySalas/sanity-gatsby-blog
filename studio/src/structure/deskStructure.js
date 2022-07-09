import S from "@sanity/desk-tool/structure-builder";
import id from "date-fns/esm/locale/id/index.js";
import { MdSettings } from "react-icons/md";
import {
  MdPerson,
  MdDescription,
  MdLocalOffer,
  MdGroups,
} from "react-icons/md";
import IframePreview from "../previews/IframePreview";

// Web preview configuration
const remoteURL = "https://sanity-gatsby-blog-web-pao5bytf.netlify.app";
const localURL = "http://localhost:8000";
const previewURL =
  window.location.hostname === "localhost" ? localURL : remoteURL;

export const getDefaultDocumentNode = (props) => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props;
  if (schemaType == "post") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreview)
        .title("Web preview")
        .options({ previewURL }),
    ]);
  }
  return S.document().views([S.view.form()]);
};

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .id("settings")
        .title("Настройки / Settings")
        .icon(MdSettings)
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.listItem()
        .id("companyDetails")
        .title("Информация о компании / Company Details")
        .icon(MdSettings)
        .child(
          S.editor()
            .id("companyDetails")
            .schemaType("companyDetails")
            .documentId("companyDetails")
        ),
      S.divider(),
      S.listItem()
        .id("about")
        .title(`Страница "О компании" / About`)
        .child(
          S.list()
            .id("about")
            .title(`Страница "О компании" / About`)
            .items([
              S.listItem()
                .id("aboutUs")
                .title("О нас / About Us")
                .child(
                  S.editor()
                    .id("aboutUs")
                    .schemaType("aboutUs")
                    .documentId("aboutUs")
                    .title("О нас / About Us")
                ),
              S.listItem()
                .id("howWeWork")
                .title("Как мы работаем / How We Work")
                .child(
                  S.editor()
                    .id("howWeWork")
                    .schemaType("howWeWork")
                    .documentId("howWeWork")
                    .title("Как мы работаем / How We Work")
                ),
              S.listItem()
                .id("technologyAndMaterials")
                .title("Технологии и материалы / Technology and Materials")
                .child(
                  S.editor()
                    .id("technologyAndMaterials")
                    .schemaType("technologyAndMaterials")
                    .documentId("technologyAndMaterials")
                    .title("Технологии и материалы / Technology and Materials")
                ),
              S.listItem()
                .id("licenses")
                .title("Лицензии / Licenses")
                .schemaType("license")
                .child(
                  S.documentTypeList("license").title("Лицензии / Licenses")
                ),
              S.listItem()
                .id("faq")
                .title("FAQ")
                .child(
                  S.editor()
                    .id("faq")
                    .schemaType("faq")
                    .documentId("faq")
                    .title("FAQ")
                ),
            ])
        ),
      S.listItem()
        .id("projects")
        .title("Проекты / Projects")
        .child(
          S.list()
            .id("projects")
            .title("Проекты / Projects")
            .items([
              S.listItem()
                .id("listings")
                .title("Перечень проектов / Listings")
                .schemaType("project")
                .child(
                  S.documentTypeList("project")
                    .id("project")
                    .title("Перечень проектов / Project Listings")
                ),
              S.listItem()
                .id("sale")
                .title("Акции / Sales")
                .schemaType("sale")
                .child(
                  S.documentTypeList("sale").id("sale").title("Акции / Sales")
                ),
              S.listItem()
                .id("categories")
                .title("Категории домов / Categories")
                .schemaType("projectCategory")
                .child(
                  S.documentTypeList("projectCategory")
                    .id("categories")
                    .title("Категории домов / Project Categories")
                ),
              S.listItem()
                .id("options")
                .title("Варианты выбора / Options")
                .child(
                  S.list()
                    .id("options")
                    .title("Варианты выбора / Options")
                    .items([
                      S.listItem()
                        .id("foundations")
                        .title("Фундаменты / Foundations")
                        .schemaType("foundation")
                        .child(
                          S.documentTypeList("foundation")
                            .id("foundations")
                            .title("Фундаменты / Foundations")
                        ),
                    ])
                ),
              S.listItem()
                .id("featuredProject")
                .title("Популярный проект / Featured Project")
                .child(
                  S.editor()
                    .id("featuredProject")
                    .schemaType("featuredProject")
                    .documentId("featuredProject")
                    .title("Популярный проект / Featured Project")
                ),
            ])
        ),
      S.listItem()
        .id("articles")
        .title("Статьи / Articles")
        .icon(MdDescription)
        .child(
          S.list()
            .id("articles")
            .title("Статьи / Articles")
            .items([
              S.listItem()
                .id("posts")
                .title("Все статьи / Posts")
                .schemaType("post")
                .child(
                  S.documentTypeList("post")
                    .id("posts")
                    .title("Все статьи / Article Posts")
                ),
              S.listItem()
                .id("authors")
                .title("Авторы / Authors")
                .icon(MdPerson)
                .schemaType("author")
                .child(
                  S.documentTypeList("author")
                    .id("authors")
                    .title("Авторы / Authors")
                ),
              S.listItem()
                .id("categories")
                .title("Категории / Categories")
                .icon(MdLocalOffer)
                .schemaType("category")
                .child(
                  S.documentTypeList("category")
                    .id("categories")
                    .title("Категории / Categories")
                ),
            ])
        ),
      S.listItem()
        .id("formSubmissions")
        .title("Полученные формы / Form Submissions")
        .child(
          S.list()
            .id("formSubmissions")
            .title("Полученные формы / Form Submissions")
            .items([
              S.listItem()
                .id("new")
                .title("Новые / New")
                .schemaType("contactForm")
                // .filter('_type == "contactForm"')
                .child(
                  S.documentTypeList("contactForm")
                    .id("newFormSubmissions")
                    .title("Новые заявки / New Form Submissions")
                    .filter('_type == "contactForm" && status == "new"')
                ),
              S.listItem()
                .id("open")
                .title("В процессе / Open")
                .schemaType("contactForm")
                // .filter('_type == "contactForm"')
                .child(
                  S.documentTypeList("contactForm")
                    .id("openFormSubmissions")
                    .title("Заявки в работе / Open Form Submissions")
                    .filter('_type == "contactForm" && status == "open"')
                ),
              S.listItem()
                .id("closed")
                .title("Завершенные / Closed")
                .schemaType("contactForm")
                // .filter('_type == "contactForm"')
                .child(
                  S.documentTypeList("contactForm")
                    .id("closedFormSubmissions")
                    .title("Завершенные заявки / Closed Form Submissions")
                    .filter('_type == "contactForm" && status == "closed"')
                ),
              S.listItem()
                .id("all")
                .title("Все / All")
                .schemaType("contactForm")
                .child(
                  S.documentTypeList("contactForm")
                    .id("allFormSubmissions")
                    .title("Все заявки / All Form Submissions")
                ),
            ])
        ),
      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above.
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "category",
            "projectCategory",
            "author",
            "post",
            "siteSettings",
            "companyDetails",
            "faq",
            "project",
            "foundation",
            "finishing",
            "license",
            "howWeWork",
            "aboutUs",
            "featuredProject",
            "contactForm",
            "technologyAndMaterials",
            "sale",
          ].includes(listItem.getId())
      ),
    ]);
