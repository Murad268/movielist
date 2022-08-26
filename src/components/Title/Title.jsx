import React from 'react';
import { Typography, Col, Row, Input, Space } from 'antd';
import styles from './title.module.scss'
const Title = ({category}) => {
   const { Title } = Typography;
   const { Search } = Input;

   return (
      <>
      <Row>
         <Col span={7} offset={2}>
            <Title className={styles.title}>MovieDB</Title>
            <Title className={styles.subtitle} level={5}>the {category.replace("_", " ")} movies</Title>
            <Space className={styles.main} direction="vertical">
            <Input className={styles.title__search} placeholder="Search Movies or TV Shows"  />
         </Space>
         </Col>
      </Row>
         
      </>
   );
};

export default Title;