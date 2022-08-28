import React, {useState, useEffect} from 'react';
import {Row, Pagination} from 'antd';
import Title from '../Title/Title';
import MainButton from '../MainMovie/MainMovie';
import Count from '../Count/Count';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/actions/actionIndex';
import Loading from '../Loading/Loading';
import styles from './search.module.scss';
import { icons } from '../../utils/iconUtils';
const Search = () => {
   const {searchQuerry} = useParams();
   const [value, setValue] = useState(1)
   const [term, setTerm] = useState()
   const dispatch = useDispatch();
   const search = (term, page) => {
      dispatch(actions.searchMovie(searchQuerry, page))
      setValue(page)
   }
   useEffect(() => {
      search(term, value)
   }, [searchQuerry]) // eslint-disable-line react-hooks/exhaustive-deps
   const movies = useSelector(state => {
      return {
         results: state.appReducer.movies.results,
         totalPage: state.appReducer.movies.total_pages,
         total: state.appReducer.movies.total_results
      }
   })
   return (
      <>
         <Title setValue={setValue} setTerm={setTerm} term={term} category={searchQuerry}/>
         {
           <Pagination className={styles.pagination} onChange={(num) =>search(term, num)} current={value}  total={movies.totalPage} />
         }
         <Loading/>
         <Count title={searchQuerry} total={movies.total}/>
         <Row style={{"padding": "38px 0 0 90px"}} gutter={[16, 16]}>
           
            {
                !!movies.results?.length?movies.results.map(movie => {
                  return <MainButton key={movie.id} movie={movie}/>
               }):<div className={styles.empty}><img src={icons.nothing} alt="" /></div>
            }
         </Row>
      </>
   );
};

export default Search;