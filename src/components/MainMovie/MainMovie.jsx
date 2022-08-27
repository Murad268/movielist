import React from 'react';
import {Col} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavorite, removeFavorites, addWatchList, removeWatchList } from '../../store/actions';
import { icons } from '../../utils/iconUtils';
import styles from './mainMovie.module.scss';
const MainMovie = ({movie}) => {
   const dispatch = useDispatch();
   const data = useSelector(state => {
      console.log(state)
      return {
         favorites: state.favoritesReducer?.favorites,
         watchers: state.watchReducer?.watchList
      }
   })

   const addFav = (e) => {
      e.preventDefault();
      dispatch(addFavorite(movie))
   }
   const removeFav = (e) => {
      e.preventDefault();
      dispatch(removeFavorites(movie.id))
   }
   const addWatch = (e) => {
      e.preventDefault();
      dispatch(addWatchList(movie))
   }
   const removeWatch = (e) => {
      e.preventDefault();
      dispatch(removeWatchList(movie.id))
   }
   return (
      <Col span={5} className={styles.movie}>
        <Link to={`/movie/${movie.id}`} >
        <div className={styles.movie__controlls}>
            <div  className="favorite">
               {data.favorites?.some(film=>film.id===movie.id)?
               <div onClick={removeFav}>💛</div>:
               <div onClick={addFav}>💙</div>}
            </div>
            <div className="watch">
               {data.watchers?.some(film=>film.id===movie.id)?
               <div onClick={removeWatch}>👁️</div>:
               <div onClick={addWatch}>👁️‍🗨️</div>}
               </div>
         </div>
         <div className={styles.movie__raiting}><img src={icons.star} alt="" /><div>{String(+movie.vote_average?.toFixed(1))}</div></div>
         {
            <img src={movie.poster_path?`https://image.tmdb.org/t/p/w500/${movie.poster_path}`:icons.notFound} alt="" />
         }
         
         <div className={styles.movie__name}>{movie.title} </div>
         
        </Link>
      </Col>
   );
};

export default MainMovie;