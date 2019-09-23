import React from "react";
import { Row, Col } from "antd";
import ImageContainer from "./ImageContainer";
import LinksContainer from "./LinksContainer";

const IntroductionContainer = () => {
  return (
    <div>
      <Row>
        <Col span={10}>
          Hello
          {/* <LinksContainer /> */}
        </Col>
        <Col span={10}>
          Hello
          {/* <LinksContainer /> */}
        </Col>
      </Row>
    </div>
  );
};

export default IntroductionContainer;
