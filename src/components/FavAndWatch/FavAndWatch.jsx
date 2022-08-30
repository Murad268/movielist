import React from 'react';
import {Row, Typography, Layout} from 'antd';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { icons } from '../../utils/iconUtils';
import MainMovie from '../MainMovie/MainMovie';
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
      <Layout.Content className={styles.layout}>
         <Typography.Title className={styles.title}>my {pathname.slice(1).replace("_", " ")} movies</Typography.Title>
         <Row className={styles.mainList}
            gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
            }}>
            {
               !!moviesList?.length?moviesList.map(movie => {
               return <MainMovie key={movie.id} movie={movie}/>
            }):<div className={styles.mainList__empty}><img src={icons.empty} alt="" /></div>
            }
         </Row>
      </Layout.Content>
   );
};

export default FavAndWatch;