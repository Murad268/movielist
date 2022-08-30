import React, {useEffect} from 'react';
import styles from './similiar.module.scss'
import { actions } from '../../store/actions/actionIndex';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typography } from 'antd';
import MainMovie from '../MainMovie/MainMovie';
import 'swiper/css';
const SimiliarMovies = ({id, name}) => {
   const dispatch = useDispatch()
   
   useEffect(() => {
      dispatch(actions.loadSimiliars(id))
   }, [id]) // eslint-disable-line react-hooks/exhaustive-deps
   const data = useSelector(state => {
      return  state.appReducer.similiar.results
       
     
   })


   return (
      <>
         <div style={{"paddingTop": "150px"}} >
            <Typography.Title style={{"textAlign": "center"}} className={styles.inner__name}>Recommended Movies</Typography.Title>
            <Swiper spaceBetween={5} slidesPerView={4}>
                  {
                     data?.map(sim => {
                        return <SwiperSlide key={sim.id}>
                           <MainMovie movie={sim}/>
                        </SwiperSlide>
                     })
                  }
               </Swiper>
         </div>   
      </>
   );
};

export default SimiliarMovies;