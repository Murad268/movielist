import React from 'react';
import {Col, Card} from 'antd';
import styles from './mainMovie.module.scss';
import star from '../../assets/icons/Vector.png';
import notFound from '../../assets/images/notfound.png';
const MainMovie = ({movie}) => {
   return (
      <Col span={5} className={styles.movie} >
         <div className={styles.movie__raiting}><img src={star} alt="" /><div>{movie.vote_average}</div></div>
         {
            <img src={movie.poster_path?`https://image.tmdb.org/t/p/w500/${movie.poster_path}`:notFound} alt="" />
         }
         
         <div className={styles.movie__name}>{movie.title}</div>
      </Col>
   );
};

export default MainMovie;