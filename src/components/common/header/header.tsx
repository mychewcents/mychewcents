import * as React from 'react';
import { Row, Col } from 'antd';

import './header.scss';

const Header: React.FC = () => {
  return (
    <Row className='header'>
      <Col className='header-components'>
        <div className='header-name'>Akarsh Agarwal</div>
        <div className='header-links'>
          {/* <a href='#expertises'>
            <div className='header-links-text'>Expertises</div>
          </a>
          <a href='#history'>
            <div className='header-links-text'>History</div>
          </a>
          <a href='#projects'>
            <div className='header-links-text'>Projects</div>
          </a> */}
          <a href='#contact-me'>
            <div className='header-links-text'>Contact Me</div>
          </a>
        </div>
      </Col>
    </Row>
  );
};

export default Header;
