// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// document schemas
import author from "./documents/author";
import category from "./documents/category";
import post from "./documents/post";
import siteSettings from "./documents/siteSettings";
import faq from "./documents/about/faq";
import companyDetails from "./documents/companyDetails";
import project from "./documents/project";
import projectCategory from "./documents/projectCategory";
import foundation from "./documents/foundation";
import finishing from "./documents/finishing";
import license from "./documents/license";
import aboutUs from "./documents/about/about-us";
import howWeWork from "./documents/about/how-we-work";
import featuredProject from "./documents/featuredProject";
import contactForm from "./documents/contactForm";
import technologyAndMaterials from "./documents/about/technology-and-materials";

// Object types
import bodyPortableText from "./objects/bodyPortableText";
import bioPortableText from "./objects/bioPortableText";
import excerptPortableText from "./objects/excerptPortableText";
import mainImage from "./objects/mainImage";
import authorReference from "./objects/authorReference";
import address from "./objects/address";
import simplePortableText from "./objects/simplePortableText";
import foundationOption from "./objects/foundationOption";
import svgUploadPreview from "sanity-plugin-inline-svg";
import svgUpload from "./objects/svgUpload";
import finishingOption from "./objects/finishingOption";
import question from "./objects/question";
import svgWithPreview from "./objects/svgWithPreview";
import titledText from "./objects/titledText";
import selectedProject from "./objects/selectedProject";
import bank from "./objects/bank";
import companyRequisites from "./objects/companyRequisites";
import featureOption from "./objects/featureOption";
import annotation from "./objects/annotation";
import annotatedImage from "./objects/annotatedImage";
import portableText from "./objects/portableText";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "blog",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    post,
    category,
    author,
    mainImage,
    authorReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    faq,
    companyDetails,
    project,
    projectCategory,
    simplePortableText,
    foundation,
    finishing,
    license,
    aboutUs,
    howWeWork,
    featuredProject,
    contactForm,
    technologyAndMaterials,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    address,
    foundationOption,
    svgUploadPreview,
    svgUpload,
    finishingOption,
    question,
    svgWithPreview,
    titledText,
    selectedProject,
    bank,
    companyRequisites,
    featureOption,
    annotation,
    annotatedImage,
    portableText,
  ]),
});
