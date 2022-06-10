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
        .title("Settings")
        .icon(MdSettings)
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.listItem()
        .title("Company Details")
        .icon(MdSettings)
        .child(
          S.editor()
            .id("companyDetails")
            .schemaType("companyDetails")
            .documentId("companyDetails")
        ),
      S.divider(),
      S.listItem()
        .title("About")
        .child(
          S.list()
            .title("About")
            .items([
              S.listItem()
                .title("About Us")
                .child(
                  S.editor()
                    .id("aboutUs")
                    .schemaType("aboutUs")
                    .documentId("aboutUs")
                    .title("About Us")
                ),
              S.listItem()
                .title("How We Work")
                .child(
                  S.editor()
                    .id("howWeWork")
                    .schemaType("howWeWork")
                    .documentId("howWeWork")
                    .title("How We Work")
                ),
              S.listItem()
                .title("Licenses")
                .schemaType("license")
                .child(S.documentTypeList("license").title("Licenses")),
              S.listItem()
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
        .title("Projects")
        .child(
          S.list()
            .title("Projects")
            .items([
              S.listItem()
                .title("Listings")
                .schemaType("project")
                .child(S.documentTypeList("project").title("Project Listings")),
              S.listItem()
                .title("Categories")
                .schemaType("projectCategory")
                .child(
                  S.documentTypeList("projectCategory").title(
                    "Project Categories"
                  )
                ),
              S.listItem()
                .title("Options")
                .child(
                  S.list()
                    .title("Options")
                    .items([
                      S.listItem()
                        .title("Foundations")
                        .schemaType("foundation")
                        .child(
                          S.documentTypeList("foundation").title("Foundations")
                        ),
                    ])
                ),
              S.listItem()
                .title("Featured Project")
                .child(
                  S.editor()
                    .id("featuredProject")
                    .schemaType("featuredProject")
                    .documentId("featuredProject")
                    .title("Featured Project")
                ),
            ])
        ),
      S.listItem()
        .title("Articles")
        .icon(MdDescription)
        .child(
          S.list()
            .title("Articles")
            .items([
              S.listItem()
                .title("Posts")
                .schemaType("post")
                .child(S.documentTypeList("post").title("Article Posts")),
              S.listItem()
                .title("Authors")
                .icon(MdPerson)
                .schemaType("author")
                .child(S.documentTypeList("author").title("Authors")),
              S.listItem()
                .title("Categories")
                .icon(MdLocalOffer)
                .schemaType("category")
                .child(S.documentTypeList("category").title("Categories")),
            ])
        ),
      S.listItem()
        .title("Form Submissions")
        .child(
          S.list()
            .title("Form Submissions")
            .items([
              S.listItem()
                .title("New")
                .schemaType("contactForm")
                // .filter('_type == "contactForm"')
                .child(
                  S.documentTypeList("contactForm")
                    .title("New Form Submissions")
                    .filter('_type == "contactForm" && status == "new"')
                ),
              S.listItem()
                .title("Open")
                .schemaType("contactForm")
                // .filter('_type == "contactForm"')
                .child(
                  S.documentTypeList("contactForm")
                    .title("Open Form Submissions")
                    .filter('_type == "contactForm" && status == "open"')
                ),
              S.listItem()
                .title("Closed")
                .schemaType("contactForm")
                // .filter('_type == "contactForm"')
                .child(
                  S.documentTypeList("contactForm")
                    .title("Closed Form Submissions")
                    .filter('_type == "contactForm" && status == "closed"')
                ),
              S.listItem()
                .title("All")
                .schemaType("contactForm")
                .child(
                  S.documentTypeList("contactForm").title(
                    "All Form Submissions"
                  )
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
          ].includes(listItem.getId())
      ),
    ]);
