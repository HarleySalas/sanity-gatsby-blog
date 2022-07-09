import React, { useRef } from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import Annotation from "./Annotation/Annotation";
import "./annotated-image.scss";
import { useResizeObserver, useDebouncedState } from "@react-hookz/web";

const AnnotatedImage = (props) => {
  const imgRef = useRef();
  const annotations = props.value.annotations;
  const [imgSize, setImageSize] = useDebouncedState({ x: 0, y: 0 }, 720);
  useResizeObserver(imgRef, (e) =>
    setImageSize((prevState) =>
      prevState.x !== e.contentRect.width ||
      prevState.y !== e.contentRect.height
        ? { x: e.contentRect.width, y: e.contentRect.height }
        : prevState
    )
  );

  return (
    <div className="annotated-image">
      <div className="annotated-image__img-wrapper" ref={imgRef}>
        <SanityImage
          className="annotated-image__img"
          {...props.value.image}
          width={900}
          fit="contain"
          alt={props.value.alt}
        ></SanityImage>
        {annotations
          ? annotations.map((annotation) => (
              <Annotation
                key={`${annotation._key}-${imgSize.x}-${imgSize.y}`}
                content={annotation.text}
                x={annotation.x}
                y={annotation.y}
                parentSize={imgSize}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default AnnotatedImage;
