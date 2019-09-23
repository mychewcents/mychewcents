import React from "react";
import { Row, Col } from "antd";
// import ImageContainer from "./ImageContainer";
import LinksContainer from "./LinksContainer";
import "./IntroductionContainer.css";

const IntroductionContainer = () => {
  return (
    <Row>
      <Col span={12}>{/* <ImageContainer /> */}</Col>
      <Col span={12}>
        <LinksContainer />
      </Col>
    </Row>
  );
};

export default IntroductionContainer;
