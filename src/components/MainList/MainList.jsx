import React, {useState, useEffect} from 'react';
import {Row, Pagination, Layout} from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/actions/actionIndex';
import Loading from '../Loading/Loading';
import Count from '../Count/Count';
import Title from '../Title/Title';
import MainMovie from '../MainMovie/MainMovie';
import styles from './mainList.module.scss';
import { icons } from '../../utils/iconUtils';
const MainList = () => {
   const {category} = useParams();
   const dispatch = useDispatch();
   const [value, setValue] = useState(1)
   const [term, setTerm] = useState()
   const filter = (cat, page) => {
      dispatch(actions.moviesLoad(cat, page));
      setValue(page)
   }
   const search = (term, page) => {
      dispatch(actions.searchMovie(term, page))
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
         totalPage: state.appReducer.movies.total_pages,
         total: state.appReducer.movies.total_results
      }
   })

   return (
      <Layout.Content className={styles.layout}>
         <Title setValue={setValue} setTerm={setTerm} term={term} category={category}/>
         {
            !!movies.results?.length? <Pagination className={styles.mainList__pagination} onChange={!!term?.length?(num) =>search(term, num):(value) => filter(category, value)} current={value}  total={movies.totalPage} />:null
         }
         <Loading/>
         <Count title={category} total={movies.total} level={4}/>
            <Row className={styles.mainList}
               gutter={{
               xs: 8,
               sm: 16,
               md: 24,
               lg: 32,
               }}>
            {
                !!movies.results?.length?movies.results.map(movie => {
                  return <MainMovie key={movie.id} movie={movie}/>
               }):<div className={styles.mainList__empty}><img src={icons.nothing} alt="" /></div>
            }
         </Row>
      </Layout.Content>
   );
};

export default MainList;