import * as React from 'react';

import './footer.scss';
import { Row, Col, Button, Icon } from 'antd';
import { LINKS } from '../constants';

const Footer = () => {
  return (
    <div>
      <Row className='footer-home'>
        <Col
          className='footer-components'
          xl={{ span: 18, offset: 3 }}
          xs={{ span: 22, offset: 1 }}
        >
          <div className='footer-title'>
            Reach me: <span className='username'>@mychewcents</span>
          </div>
          <div className='footer-links'>
            {LINKS.map((link: any, index: number) => (
              <Button key={index} type='link' href={link.url} target='_blank'>
                <Icon
                  type={link.type}
                  className='icon-style'
                  style={{ fontSize: 30, color: 'white' }}
                  // theme='outlined'
                />
              </Button>
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className='footer-copyright'>
            <Icon type='copyright' />
            <div className='copyright-text'>2020 All rights reserved.</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
