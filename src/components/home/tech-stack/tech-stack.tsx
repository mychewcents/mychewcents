import * as React from 'react';

import './tech-stack.scss';
import { Row, Col, Card } from 'antd';
import MenuTab from './menu-tab';
import Stack from './stack';

const TechStack = () => {
  return (
    <Row>
      <Col span={24} className='expertize-home'>
        <Row>
          <Col span={24} className='expertize-title-container'>
            <div className='expertize-title'>Core Competencies</div>
          </Col>
        </Row>
        {/* <MenuTab /> */}
        <Row>
          <Col
            xs={{ span: 16, offset: 4 }}
            xl={{ span: 8, offset: 0 }}
            className='expertize-cards-view-container'
          >
            <Stack />
          </Col>
          <Col
            xs={{ span: 16, offset: 4 }}
            xl={{ span: 8, offset: 0 }}
            className='expertize-cards-view-container'
          >
            Hello
          </Col>
          <Col
            xs={{ span: 16, offset: 4 }}
            xl={{ span: 8, offset: 0 }}
            className='expertize-cards-view-container'
          >
            Hello
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default TechStack;
