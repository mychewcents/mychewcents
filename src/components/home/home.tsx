import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import Header from '../common/header/header';
import Landing from './landing/landing';
import { Row, Col } from 'antd';
import TechStack from './tech-stack/tech-stack';
import Footer from '../common/footer/footer';
import Introduction from './introduction/introduction';

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <Row>
      <Col span={24}>
        <Header />
        <Landing />
        <Introduction />
        {/* <TechStack /> */}
      </Col>
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
};

export default Home;
