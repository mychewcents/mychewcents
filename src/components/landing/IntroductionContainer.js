import React from "react";
import { Row, Col } from "antd";
// import ImageContainer from "./ImageContainer";
import LinksContainer from "./LinksContainer";

const IntroductionContainer = () => {
  return (
    <Row>
      <Col span={24}>
        <LinksContainer />
      </Col>
    </Row>
  );
};

export default IntroductionContainer;
