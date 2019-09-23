import React from "react";
import { Row, Col } from "antd";
import ImageContainer from "./ImageContainer";
import LinksContainer from "./LinksContainer";

const IntroductionContainer = () => {
  return (
    <Row>
      <Col span={12}>
        <LinksContainer style={{ zIndex: 100 }} />
      </Col>
      <Col span={12}>
        <ImageContainer style={{ zIndex: -100 }} />
      </Col>
    </Row>
  );
};

export default IntroductionContainer;
