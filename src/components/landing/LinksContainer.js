import React from 'react';
import { Row, Col } from 'antd';
import './LinksContainer.css';
import SocialLinkButton from './SocialLinksButton';
import { Links } from '../common/constants';
import ImageContainer from './ImageContainer';

const LinksContainer = () => {
  return (
    <div className='links--default'>
      <Row style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <Col
          span={24}
          className='links-content--center-align links-image--margin-top'
        >
          <ImageContainer />
        </Col>
        <Col span={24} className='links-content--center-align'>
          <div className='links-name--font'>Hey! I&apos;m Akarsh Agarwal</div>
        </Col>
        <Col
          span={24}
          className='links-titles--styling links-content--center-align'
        >
          <div className='links-title--styling'>
            DEVELOPER
            <div className='links-dot--styling'>&middot;</div>
            WRITER
            <div className='links-dot--styling'>&middot;</div>
            TRAVELER
          </div>
        </Col>
        <Col
          span={24}
          className='links-social--styling links-content--center-align'
        >
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
