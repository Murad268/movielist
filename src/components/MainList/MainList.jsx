import React, {useEffect} from 'react';
import {Row} from 'antd';
import Title from '../Title/Title';
import MainButton from '../MainMovie/MainMovie';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { commentsLoad } from '../../store/actions';
import styles from './mainList.module.scss';
const MainList = () => {
   const {category} = useParams();
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(commentsLoad(category));
   }, [category])
   const movies = useSelector(state => {
      const {appReducer} = state
      return appReducer.movies
   })
   return (
      <>
         <Title category={category}/>
         <Row style={{"padding": "68px 0 0 90px"}} gutter={[16, 16]}>
            {
                movies?.map(movie => {
                  return <MainButton key={movie.id} movie={movie}/>
               })
            }
         </Row>
      </>
   );
};

export default MainList;