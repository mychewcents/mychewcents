import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import Header from '../common/header/header';
import Landing from './landing/landing';
import { Row, Col } from 'antd';

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <Row>
      <Col offset={3} span={18}>
        <Header />
        <Landing />
      </Col>
    </Row>
  );
};

export default Home;
