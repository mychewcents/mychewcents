import * as React from 'react';
import { Row, Col } from 'antd';

import './header.scss';

const Header: React.FC = () => {
  return (
    <Row className='header'>
      <Col
        className='header-components'
        xs={{ span: 22, offset: 1 }}
        lg={{ span: 18, offset: 3 }}
      >
        <div className='header-name'>Akarsh Agarwal</div>
        <div className='header-links'>
          <div className='header-links-text'>Hey! Everyone!</div>
        </div>
      </Col>
    </Row>
  );
};

export default Header;
