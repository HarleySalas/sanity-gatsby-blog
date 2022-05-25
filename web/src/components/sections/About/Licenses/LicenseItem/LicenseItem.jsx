import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import DownloadIcon from "../../../../../assets/icons/download.svg";
import "./license-item.scss";

const LicenseItem = ({ data }) => {
  const imagePlaceholder = getImage(data.preview.asset);

  return (
    <div className="license-item">
      <div className="license-item__img-wrapper">
        <div className="license-item__img-overlay">
          <a
            href={`${data.file.asset.url}?dl=${data.file.asset.originalFilename}`}
            className="license-item__download-link"
          >
            <DownloadIcon className="license-item__download-lg" />
          </a>
        </div>
        <GatsbyImage
          image={imagePlaceholder}
          alt={`${data.type} file preview.`}
          className="license-item__img"
        />
      </div>
      <div className="license-item__bar">
        <div className="license-item__bar__left">
          <span className="license-item__type">{data.type}</span>
        </div>
        <div className="license-item__bar__right">
          <a
            href={`${data.file.asset.url}?dl=${data.file.asset.originalFilename}`}
            className="license-item__download-link"
          >
            <div className="license-item__download-wrapper">
              <DownloadIcon className="license-item__download-sm" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LicenseItem;
