import React, { useRef, useState, useEffect } from "react";
import Image from "gatsby-plugin-sanity-image";
import Annotation from "./Annotation/Annotation";
import "./annotated-image.scss";
import { window } from "browser-monads";
import { useCallback } from "react";

const AnnotatedImage = (props) => {
  const imgRef = useRef(null);
  const annotations = props.value.annotations;
  const [imgSize, setImageSize] = useState({ x: 0, y: 0 });
  const [firstRender, setFirstRender] = useState(true);
  const handleResize = useCallback(() => {
    if (imgRef.current) {
      setImageSize((prevState) => {
        let currentState = {
          x: imgRef.current.clientWidth,
          y: imgRef.current.clientHeight,
        };

        if (currentState.x !== prevState.x && currentState.y !== prevState.y) {
          return currentState;
        } else {
          return prevState;
        }
      });
    }
  }, []);

  useEffect(() => {
    setImageSize({
      x: imgRef.current.clientWidth,
      y: imgRef.current.clientHeight,
    });

    if (firstRender) {
      setFirstRender(false);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [imgRef, handleResize, firstRender]);

  return (
    <div className="annotated-image">
      <div className="annotated-image__img-wrapper" ref={imgRef}>
        <Image
          className="annotated-image__img"
          {...props.value.image}
          width={900}
          alt={props.value.alt}
        ></Image>
        {annotations
          ? annotations.map((annotation) => (
              <Annotation
                key={annotation._key}
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
