import React from 'react';
import {Row, Typography, Col} from 'antd';
import { icons } from '../../utils/iconUtils';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import MainButton from '../MainMovie/MainMovie';
import styles from './fandw.module.scss'
import './fandw.module.scss'
const FavAndWatch = () => {
   const {pathname} = useLocation()
   const movies = useSelector(state => {
      const {favoritesReducer, watchReducer} = state
      return {
         favorites: favoritesReducer.favorites,
         watch_list: watchReducer.watchList
      }
   })
   const moviesList = pathname === "/favorites"?movies.favorites:pathname === "/watch_list"?movies.watch_list:null
   return (
            <>
               <Col span={16} offset={2}><Typography.Title className={styles.title}>my {pathname.slice(1).replace("_", " ")} movies</Typography.Title></Col>
               <Row style={{"padding": "38px 0 0 90px"}} gutter={[16, 16]}>
                  {
                     !!moviesList.length?moviesList.map(movie => {
                        return <MainButton key={movie.id} movie={movie}/>
                     }):<div className={styles.empty}><img src={icons.empty} alt="" /></div>
                  }
               </Row>
              
            </>
   );
};

export default FavAndWatch;