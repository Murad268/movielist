import React, {useState, useEffect} from 'react';
import {Row, Typography, Col} from 'antd';
import styles from './fandw.module.scss'
import MainButton from '../MainMovie/MainMovie';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import './fandw.module.scss'
const FavAndWatch = () => {
   const { Title } = Typography;
   const {pathname} = useLocation()
   const movies = useSelector(state => {
      const {favoritesReducer, watchReducer} = state
      return {
         favorites: favoritesReducer.favorites,
         watch_list: watchReducer.watchList
      }
   })
   const moviesList = pathname === "/favorites"?movies.favorites:pathname === "/watch_list"?movies.watch_list:null
   console.log(moviesList)
   return (
            <>
               <Col span={16} offset={2}><Title className={styles.title}>my {pathname.slice(1).replace("_", " ")} movies</Title></Col>
               <Row style={{"padding": "38px 0 0 90px"}} gutter={[16, 16]}>
                  {
                     moviesList?.map(movie => {
                        return <MainButton key={movie.id} movie={movie}/>
                     })
                  }
               </Row>
              
            </>
   );
};

export default FavAndWatch;