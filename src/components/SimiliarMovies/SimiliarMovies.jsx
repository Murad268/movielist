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
  
   const list = useSelector(state => {
      return state.appReducer.similiar.results
   })
   return (
      <>
      <div style={{"paddingTop": "150px"}} className={styles.inner}>
         <Typography.Title className={styles.inner__name}>people who watched the movie {name} are also watching</Typography.Title>
         <Swiper
               spaceBetween={5}
               slidesPerView={3}
              
            >
               {
                  list?.map(sim => {
                     return <SwiperSlide key={sim.id}>
                     <div className={styles.carusel}>
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