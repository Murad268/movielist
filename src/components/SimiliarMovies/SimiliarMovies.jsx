import React, {useEffect} from 'react';
import styles from './similiar.module.scss'
import { actions } from '../../store/actions/actionIndex';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typography } from 'antd';
import { icons } from '../../utils/iconUtils';
import 'swiper/css';
const SimiliarMovies = ({id, name}) => {
   const dispatch = useDispatch()
   
   useEffect(() => {
      dispatch(actions.loadSimiliars(id))
   }, [id])
   const data = useSelector(state => {
      return {
         list: state.appReducer.similiar.results,
         favorites: state.favoritesReducer?.favorites,
         watchers: state.watchReducer?.watchList
      }
   })
  
   const addFav = (movie) => {
      dispatch(actions.addFavorites(movie))
   }
   const removeFav = (movie) => {
      dispatch(actions.removeFavorites(movie.id))
   }
   const addWatch = (movie) => {
      dispatch(actions.addWatchList(movie))
   }
   const removeWatch = (movie) => {
      dispatch(actions.removeWatchList(movie.id))
   }

   return (
      <>
      <div style={{"paddingTop": "150px"}} className={styles.inner}>
         <Typography.Title className={styles.inner__name}>people who watched the movie {name} are also watching</Typography.Title>
         <Swiper
               spaceBetween={5}
               slidesPerView={3}
              
            >
               {
                  data.list?.map(sim => {
                     return <SwiperSlide key={sim.id}>
                     <div className={styles.carusel}>
                        <div className={styles.controlls}>
                        <div className="favorite">
                           {data.favorites?.some(film=>film.id===sim.id)?
                           <div onClick={() => removeFav(sim)}>💛</div>:
                           <div onClick={() => addFav(sim)}>💙</div>}
                        </div>
                        <div className="watch">
                           {data.watchers?.some(film=>film.id===sim.id)?
                           <div onClick={() => removeWatch(sim)}>👁️</div>:
                           <div onClick={() => addWatch(sim)}>👁️‍🗨️</div>}
                           </div>
                        </div>
                        <Link to={`/movie/${sim.id}`}>
                           <img src={sim.poster_path?`https://image.tmdb.org/t/p/w500/${sim.poster_path}`:icons.notFound} alt="" />
                           <div className={styles.carusel__name}>{sim.title}</div>
                        </Link>
                  
                     </div>
                  </SwiperSlide>
                  })
               }
            </Swiper>
      </div>   
      </>
   );
};

export default SimiliarMovies;