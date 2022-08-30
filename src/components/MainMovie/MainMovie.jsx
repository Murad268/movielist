import React from 'react';
import {Col, Layout, Card} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { actions } from '../../store/actions/actionIndex';
import { icons } from '../../utils/iconUtils';
import styles from './mainMovie.module.scss';
const MainMovie = ({movie}) => {
   const {pathname} = useLocation()
   const dispatch = useDispatch();
   const data = useSelector(state => {
      return {
         favorites: state.favoritesReducer?.favorites,
         watchers: state.watchReducer?.watchList
      }
   })

   const addFav = (e) => {
      e.preventDefault();
      dispatch(actions.addFavorites(movie))
   }
   const removeFav = (e) => {
      e.preventDefault();
      dispatch(actions.removeFavorites(movie.id))
   }
   const addWatch = (e) => {
      e.preventDefault();
      dispatch(actions.addWatchList(movie))
   }
   const removeWatch = (e) => {
      e.preventDefault();
      dispatch(actions.removeWatchList(movie.id))
   }
   return (
      <Col span={6}>
         <Link to={`/movie/${pathname.split("/")[1]}${movie.id}`}>
         <Card className={styles.card} cover={<img src={movie.poster_path?`https://image.tmdb.org/t/p/w500/${movie.poster_path}`:icons.notFound} alt="" />}>  
            <Layout.Content className={styles.card__raiting}><i className="fa-regular fa-star"></i>{String(+movie.vote_average?.toFixed(1)).length < 2 ? String(+movie.vote_average?.toFixed(1)) + ".0" : String(+movie.vote_average?.toFixed(1))}</Layout.Content>
            <Layout.Content className={styles.card__addFavorites}>
               {data.favorites?.some(film=>film.id===movie.id)?
               <div onClick={removeFav}><i className="fa fa-heart" style={{"color": "orange"}} ></i></div>:
               <div onClick={addFav}><i className="fa-regular fa-heart"  style={{"color": "orange"}}></i></div>}
            </Layout.Content>
            <Layout.Content className={styles.card__addWatchList}>
               {data.watchers?.some(film=>film.id===movie.id)?
               <div onClick={removeWatch}><i style={{"color": "orange"}} className="fas fa-bookmark"></i></div>:
               <div onClick={addWatch}><i style={{"color": "orange"}} className="fa-regular fa-bookmark"></i></div>}
            </Layout.Content>
            <Layout.Content className={styles.addWatchList}></Layout.Content>
            <Layout.Content className={styles.card__title}>{movie.title.length<16?movie.title:movie.title.slice(0, 16)+"..."}</Layout.Content>
         </Card>
         </Link>
      </Col>
   );
};

export default MainMovie;


// src={movie.poster_path?`https://image.tmdb.org/t/p/w500/${movie.poster_path}`:icons.notFound}