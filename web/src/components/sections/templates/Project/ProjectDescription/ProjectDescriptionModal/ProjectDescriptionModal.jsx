import React, { useRef, useState, useEffect } from "react";
import "./project-description-modal.scss";

import Modal from "../../../../../Modal/Modal";

import SqmOutline from "../../../../../../assets/icons/sqm-outline.svg";

const ProjectDescriptionModal = ({ blueprint, btnMargin }) => {
  const modalRef = useRef(null);

  return (
    <>
      <button
        className="project-description-modal__btn"
        onClick={() => modalRef.current.openModal()}
      >
        <SqmOutline className="project-description-modal__icon" />
      </button>
      <Modal ref={modalRef}>
        <div className="project-description-modal">
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
};

export default ProjectDescriptionModal;
