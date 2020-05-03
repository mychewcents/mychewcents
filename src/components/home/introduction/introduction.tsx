import * as React from 'react';
import { Row, Col } from 'antd';

import './introduction.scss';

const Introduction = () => {
  return (
    <Row className='introduction'>
      <Col xs={{ span: 22, offset: 1 }} xl={{ span: 16, offset: 4 }}>
        <div className='introduction-title'>
          Solutions Architect & Technical Writer
        </div>
        <div className='introduction-desc'>
          I design and develop the in-place legacy processes into server-less
          and distributed applications, leveraging Cloud, Blockchain, and Data
          Analytics. I contribute to technical white-papers, augmenting my
          analytical and logical expertise to design correct solutions in an
          Agile development environment.
        </div>
      </Col>
    </Row>
  );
};

export default Introduction;
