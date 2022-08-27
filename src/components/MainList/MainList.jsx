import React, {useState, useEffect} from 'react';
import {Row, Pagination} from 'antd';
import Title from '../Title/Title';
import MainButton from '../MainMovie/MainMovie';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { commentsLoad, searchMovie } from '../../store/actions';
import styles from './mainList.module.scss';
import nothing from '../../assets/images/nothing.png';
const MainList = () => {
   const {category} = useParams();
   const dispatch = useDispatch();
   const [value, setValue] = useState(1)
   const [term, setTerm] = useState()
   const filter = (cat, page) => {
      dispatch(commentsLoad(cat, page));
      setValue(page)
   }
   const search = (term, page) => {
      dispatch(searchMovie(term, page))
      setValue(page)
   }
   useEffect(() => {
      filter(category, value)
      setValue(1)
      setTerm("")
   }, [category]) // eslint-disable-line react-hooks/exhaustive-deps
  
   const movies = useSelector(state => {
      return {
         results: state.appReducer.movies.results,
         totalPage: state.appReducer.movies.total_pages
      }
   })

   return (
      <>
      
         <Title setValue={setValue} setTerm={setTerm} term={term} category={category}/>
         {
            !!movies.results?.length? <Pagination className={styles.pagination} onChange={!!term?.length?(num) =>search(term, num):(value) => filter(category, value)} current={value}  total={movies.totalPage} />:null
         }
         <Row style={{"padding": "38px 0 0 90px"}} gutter={[16, 16]}>
           
            {
                !!movies.results?.length?movies.results.map(movie => {
                  return <MainButton key={movie.id} movie={movie}/>
               }):<div className={styles.empty}><img src={nothing} alt="" /></div>
            }
         </Row>
      </>
   );
};

export default MainList;