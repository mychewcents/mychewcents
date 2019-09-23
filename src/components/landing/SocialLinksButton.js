import React from "react";
import { Button, Icon } from "antd";

const linksSocialStyling = {
  color: "#e5e3fa",
  fontSize: "26px"
};

const SocialLinkButton = ({ url, typeOfLink }) => {
  return (
    <Button type="link" href={url} target="_blank">
      <Icon type={typeOfLink} style={linksSocialStyling} theme="outlined" />
    </Button>
  );
};

export default SocialLinkButton;
