import React, {useState, useEffect} from 'react';
import {Row, Pagination, Layout} from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/actions/actionIndex';
import Loading from '../Loading/Loading';
import Title from '../Title/Title';
import MainButton from '../MainMovie/MainMovie';
import Count from '../Count/Count';
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
       <Layout.Content className="container">
          <Title setValue={setValue} setTerm={setTerm} term={term} category={searchQuerry}/>
          {
           <Pagination className={styles.pagination} onChange={(num) =>search(term, num)} current={value}  total={movies.totalPage} />
         }
         <Loading/>
         <Count title={searchQuerry} total={movies.total} level={4}/>
            <Row className={styles.mainList}
               gutter={{
               xs: 8,
               sm: 16,
               md: 24,
               lg: 32,
               }}>
               {
                  !!movies.results?.length?movies.results.map(movie => {
                     return <MainButton key={movie.id} movie={movie}/>
                  }):<div className={styles.empty}><img src={icons.nothing} alt="" /></div>
               }
            </Row>
      </Layout.Content>
   );
};

export default Search;