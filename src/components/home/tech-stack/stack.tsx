import * as React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const Stack = () => {
  console.log('image');
  console.log('title');
  console.log('level of expertise');

  return (
    <div className='stack'>
      <Card
        hoverable
        cover={
          <img
            alt='example'
            src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
          />
        }
      >
        <Meta title='Europe Street beat' description='www.instagram.com' />
      </Card>
      ,
    </div>
  );
};

export default Stack;
