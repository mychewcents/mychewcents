import * as React from 'react';

import './expertize.scss';
import { Row, Col, Card } from 'antd';
import MenuTab from './menu-tab';

const Expertize = () => {
  return (
    <Row>
      <Col span={24} className='expertize-home'>
        <Row>
          <Col span={24} className='expertize-title-container'>
            <div className='expertize-title'>Core Competencies</div>
          </Col>
        </Row>
        <MenuTab />
        <Row>
          <Col
            xs={{ span: 16, offset: 4 }}
            xl={{ span: 8, offset: 0 }}
            className='expertize-cards-view-container'
          >
            <Card>Hello</Card>
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

export default Expertize;
