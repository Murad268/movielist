import React, {useState, useEffect} from 'react';
import {Row, Pagination} from 'antd';
import Title from '../Title/Title';
import MainButton from '../MainMovie/MainMovie';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { commentsLoad } from '../../store/actions';
import styles from './mainList.module.scss';
const MainList = () => {
   const {category} = useParams();
   const dispatch = useDispatch();
   const [value, setValue] = useState(1)
   const filter = (cat, page) => {
      dispatch(commentsLoad(cat, page));
      setValue(page)
   }
   useEffect(() => {
      filter(category, value)
      setValue(1)
   }, [category])

   const movies = useSelector(state => {
      const {appReducer} = state
      return {
         results: appReducer.movies.results,
         totalPage: appReducer.movies.total_pages
      }
   })
   return (
      <>
         <Title category={category}/>

         <Pagination className={styles.pagination} onChange={(value) => filter(category, value)}  current={value} total={movies.totalPage} />;
         <Row style={{"padding": "38px 0 0 90px"}} gutter={[16, 16]}>
            {
                movies.results?.map(movie => {
                  return <MainButton key={movie.id} movie={movie}/>
               })
            }
         </Row>
      </>
   );
};

export default MainList;