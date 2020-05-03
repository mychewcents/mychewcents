import * as React from 'react';
import { Row, Col, Tabs } from 'antd';
import { Link } from '@reach/router';

import './menu-tab.scss';

const { TabPane } = Tabs;

const MenuTab: React.FC = () => {
  const getActiveClass = (isCurrent: boolean) => {
    return isCurrent
      ? {
          className: 'active',
        }
      : {
          className: '',
        };
  };

  return (
    <div className='menu-tab'>
      <Tabs defaultActiveKey='1'>
        <TabPane tab='Product Details' key='1'>
          Hello
        </TabPane>
        <TabPane tab='Product Summary' key='2'>
          Hi
        </TabPane>
      </Tabs>
    </div>
  );
};

export default MenuTab;
