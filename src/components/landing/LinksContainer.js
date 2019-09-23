import React from "react";
import { Row, Col } from "antd";
import "./LinksContainer.css";
import SocialLinkButton from "./SocialLinksButton";
import { Links } from "../constants";

const LinksContainer = () => {
  return (
    <div className="links--default" style={{ height: window.innerHeight }}>
      <Row className="links-content--bottom-align">
        <Col span={18} offset={3}>
          <div className="links-name--font">Hey! I&apos;m Akarsh Agarwal</div>
        </Col>
        <Col span={18} offset={3} className="links-titles--styling">
          <div className="links-title--styling">
            DEVELOPER
            <div className="links-dot--styling">&middot;</div>
            WRITER
            <div className="links-dot--styling">&middot;</div>
            TRAVELER
          </div>
        </Col>
        <Col offset={3} span={18} className="links-social--styling">
          {Links.map(link => (
            <SocialLinkButton
              key={link.url}
              typeOfLink={link.type}
              url={link.url}
            />
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default LinksContainer;
