import React from "react";

const IconLink = ({ url, icon }) => {
  return (
    <div className="m-1">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {icon()}
      </a>
    </div>
  );
};

export default IconLink;
