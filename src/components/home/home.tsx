import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import Header from '../common/header/header';
import Landing from './landing/landing';
import { Row, Col } from 'antd';
import Expertize from './expertize/expertize';
import Footer from '../common/footer/footer';

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <Row>
      <Col xs={{ span: 22, offset: 1 }} lg={{ span: 18, offset: 3 }}>
        <Header />
        <Landing />
        <Expertize />
      </Col>
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
};

export default Home;
