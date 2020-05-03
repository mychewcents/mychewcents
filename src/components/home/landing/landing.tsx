import * as React from 'react';

import './landing.scss';
import { Row, Col, Avatar } from 'antd';

const Landing = () => {
  return (
    <div className='home-landing'>
      <Row>
        <Col span={16}>
          <div className='landing-text'>
            I design and develop <br /> "Privacy First" applications!
          </div>
        </Col>
        <Col span={8} className='landing-image'>
          <img src='https://s3.amazonaws.com/mychewcents.github.io/landing-image.jpg' />
        </Col>
      </Row>
    </div>
  );
};

export default Landing;
