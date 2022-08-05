import SvgPreviewComponent from "../components/svgPreviewComponent";

export default {
  name: "svgUploadv2",
  title: "SVG Upload",
  type: "object",
  fields: [
    {
      type: "svgUploadPreview",
      name: "source",
      title: "SVG",
    },
  ],
  preview: {
    select: {
      svgHtml: "source",
    },
    component: SvgPreviewComponent,
  },
};
