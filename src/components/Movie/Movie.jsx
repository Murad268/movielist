import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './movie.module.scss';
const Movie = () => {
   const {id} = useParams();
   console.log(id)
   return (
      <div>
         
      </div>
   );
};

export default Movie;