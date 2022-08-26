import React from 'react';
import {Col} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorites } from '../../store/actions';
import styles from './mainMovie.module.scss';
import star from '../../assets/icons/Vector.png';
import notFound from '../../assets/images/notfound.png';
const MainMovie = ({movie}) => {
   const dispatch = useDispatch();
   const iclr = useSelector(state => {
      const {favoritesReducer} = state;
      return favoritesReducer.favorites
   })
  
   return (
      <Col span={5} className={styles.movie}>
         <div className={styles.movie__controlls}>
            <div  className="favorite">
               {iclr?.some(film=>film.id===movie.id)?
               <div onClick={()=>dispatch(removeFavorites(movie.id))}>💛</div>:
               <div onClick={()=>dispatch(addFavorite(movie))}>💙</div>}
            </div>
            <div className="watch">👁</div>
         </div>
         <div className={styles.movie__raiting}><img src={star} alt="" /><div>{movie.vote_average}</div></div>
         {
            <img src={movie.poster_path?`https://image.tmdb.org/t/p/w500/${movie.poster_path}`:notFound} alt="" />
         }
         
         <div className={styles.movie__name}>{movie.title}</div>
      </Col>
   );
};

export default MainMovie;