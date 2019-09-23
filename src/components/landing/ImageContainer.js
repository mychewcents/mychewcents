import React from "react";
import { Avatar } from "antd";

const ImageContainer = () => {
  return (
    <Avatar
      src="https://s3.amazonaws.com/mychewcents.github.io/landing-image.jpg"
      alt="landing"
      size={400}
      shape="square"
    />
  );
};

export default ImageContainer;
