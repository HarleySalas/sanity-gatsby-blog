import SvgPreviewComponent from "../components/svgPreviewComponent";

export default {
  type: "object",
  name: "svgUpload",
  title: "SVG Icon Upload",
  fields: [
    {
      type: "svgUploadPreview",
      name: "source",
      title: "SVG Icon",
    },
  ],
  preview: {
    select: {
      svgHtml: "source",
    },
    component: SvgPreviewComponent,
  },
};
