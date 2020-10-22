import React from "react";
import "./ImageList.css";
const ImageList = (props) => {
  const imge = props.images.map((image) => {
    return (
      <img
        className="image-list"
        key={image.id}
        src={image.urls.regular}
        alt={image.description}
      />
    );
  });
  return <div className="images-grid">{imge}</div>;
};
export default ImageList;
