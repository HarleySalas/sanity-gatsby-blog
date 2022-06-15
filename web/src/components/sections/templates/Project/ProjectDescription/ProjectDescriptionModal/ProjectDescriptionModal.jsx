import React, { useRef } from "react";
import "./project-description-modal.scss";

import Modal from "../../../../../Modal/Modal";

import { useMediaQuery } from "../../../../../../hooks";

// import SqmOutline from "../../../../../../assets/icons/sqm-outline.svg";

const ProjectDescriptionModal = ({ blueprint }) => {
  const modalRef = useRef(null);
  const isDesktop = useMediaQuery("(min-width: 75em)");

  if (isDesktop) {
    return (
      <>
        <button
          className="project-description-modal__btn"
          onClick={() => modalRef.current.openModal()}
          aria-label="Expand Image"
        ></button>
        <Modal ref={modalRef}>
          <div className="project-description-modal">
            <button
              className="project-description-modal__close"
              onClick={() => modalRef.current.closeModal()}
            >
              X
            </button>
            <div
              className="project-description-modal__blueprint"
              dangerouslySetInnerHTML={{
                __html: blueprint.svg.source,
              }}
            ></div>
          </div>
        </Modal>
      </>
    );
  }
  return null;
};

export default ProjectDescriptionModal;
