import React from 'react';
import { Typography, Col, Row, Input, Space, Form } from 'antd';
import { useDispatch } from 'react-redux';
import {actions} from '../../store/actions/actionIndex';
import { useNavigate } from 'react-router-dom';
import styles from './title.module.scss'
const Title = ({category, term, setTerm, setValue}) => {
   const navigate = useNavigate()
  const dispatch = useDispatch();
  const onSubmit = () => {
      dispatch(actions.searchMovie(term, 1))
      setValue(1)
      navigate(`/${term}`)
  }
   return (
      <>
         <Row>
            <Col span={7} offset={2}>
               <Typography.Title className={styles.title}>MovieDB</Typography.Title>
               <Typography.Title className={styles.subtitle} level={5}>the {category.replace("_", " ")} movies</Typography.Title>
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