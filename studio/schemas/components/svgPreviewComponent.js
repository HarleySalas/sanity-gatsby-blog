import React from "react";

function SvgPreviewComponent({ value }) {
  if (!value) {
    return <pre>Please upload an SVG Icon</pre>;
  }

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: value.svgHtml }} />
    </>
  );
}

export default SvgPreviewComponent;
