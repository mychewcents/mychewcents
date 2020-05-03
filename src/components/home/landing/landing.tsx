import * as React from 'react';

import './landing.scss';
import { Row, Col, Avatar } from 'antd';

const Landing = () => {
  return (
    <Row>
      <Col xs={{ span: 22, offset: 1 }} lg={{ span: 18, offset: 3 }}>
        <Row type='flex' className='home-landing'>
          <Col xs={{ span: 24 }} xl={{ span: 14 }}>
            <div className='landing-text'>
              I design and develop <br className='landing-breakline-display' />
              "Privacy First" applications!
            </div>
          </Col>
          <Col xs={{ span: 24 }} xl={{ span: 10 }}>
            <div className='landing-image'>
              <img src='https://s3.amazonaws.com/mychewcents.github.io/landing-image.jpg' />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Landing;
