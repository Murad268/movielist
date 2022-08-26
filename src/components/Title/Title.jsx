import React, {useState, useEffect} from 'react';
import { Typography, Col, Row, Input, Space, Form } from 'antd';
import { useDispatch } from 'react-redux';

import { searchMovie } from '../../store/actions';
import styles from './title.module.scss'
const Title = ({category, term, setTerm, setValue}) => {

   const { Title } = Typography;
  
   const dispatch = useDispatch();
  const onSubmit = () => {
      dispatch(searchMovie(term, 1))
      setValue(1)
  }
   return (
      <>
         <Row>
            <Col span={7} offset={2}>
               <Title className={styles.title}>MovieDB</Title>
               <Title className={styles.subtitle} level={5}>the {category.replace("_", " ")} movies</Title>
               <Space className={styles.main} direction="vertical">
                  <Form onFinish={onSubmit}>
                     <Input value={term} onChange={e => setTerm(e.target.value)} className={styles.title__search} placeholder="Search Movies or TV Shows"  />
                  </Form>
               </Space>
            </Col>
         </Row> 
      </>
   );
};

export default Title;