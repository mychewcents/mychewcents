import React from "react";

const ImageContainer = () => {
  return (
    <div
      style={{
        display: "flex",
        overflowX: "hidden",
        justifyContent: "flex-end",
        backgroundColor: "#233775"
      }}
    >
      <img
        src="https://s3.amazonaws.com/mychewcents.github.io/landing-image.jpg"
        alt="landing"
        style={{
          height: window.innerHeight
        }}
      />
    </div>
  );
};

export default ImageContainer;
