import React, {useEffect} from 'react';
import styles from './similiar.module.scss'
import { actions } from '../../store/actions/actionIndex';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typography, Card, Col, Layout } from 'antd';
import { icons } from 'antd/lib/image/PreviewGroup';
import { Link, useLocation } from 'react-router-dom';
import MainMovie from '../MainMovie/MainMovie';
import 'swiper/css';
const SimiliarMovies = ({id, name}) => {
   const dispatch = useDispatch()
   const {pathname} = useLocation()
   useEffect(() => {
      dispatch(actions.loadSimiliars(id))
   }, [id]) // eslint-disable-line react-hooks/exhaustive-deps
   const data = useSelector(state => {
      return {
         movies: state.appReducer.similiar.results,
         favorites: state.favoritesReducer?.favorites,
         watchers: state.watchReducer?.watchList
      }
      })
 


      console.log(data?.movies)
   return (
      <>
         <div style={{"paddingTop": "150px"}} >
            <Typography.Title style={{"textAlign": "center"}} className={styles.inner__name}>Recommended Movies</Typography.Title>
            <Swiper spaceBetween={5} slidesPerView={4}>
                  {
                     data.movies?.map(sim => {
                        return <SwiperSlide key={sim.id}>
                                 <Col span={6}>
                                    <Link to={`/movie/${pathname.split("/")[1]}${sim.id}`}>
                                    <Card className={styles.card} cover={<img src={sim.poster_path?`https://image.tmdb.org/t/p/w500/${sim.poster_path}`:icons.notFound} alt="" />}>  
                                       <Layout.Content className={styles.card__raiting}><i className="fa-regular fa-star"></i>{String(+sim.vote_average?.toFixed(1)).length < 2 ? String(+sim.vote_average?.toFixed(1)) + ".0" : String(+sim.vote_average?.toFixed(1))}</Layout.Content>
                                       <Layout.Content className={styles.card__addFavorites}>
                                          {data.favorites?.some(film=>film.id===sim.id)?
                                          <div onClick={() => dispatch(actions.removeFavorites(sim.id))}><i className="fa fa-heart" style={{"color": "orange"}} ></i></div>:
                                          <div onClick={() => dispatch(actions.addFavorites(sim))}><i className="fa-regular fa-heart"  style={{"color": "orange"}}></i></div>}
                                       </Layout.Content>
                                       <Layout.Content className={styles.card__addWatchList}>
                                          {data.watchers?.some(film=>film.id===sim.id)?
                                          <div onClick={() => dispatch(actions.addWatchList(sim))}><i style={{"color": "orange"}} className="fas fa-bookmark"></i></div>:
                                          <div onClick={() => dispatch(actions.removeWatchList(sim.id))}><i style={{"color": "orange"}} className="fa-regular fa-bookmark"></i></div>}
                                       </Layout.Content>
                                       <Layout.Content className={styles.addWatchList}></Layout.Content>
                                       <Layout.Content className={styles.card__title}>{sim.title.length<16?sim.title:sim.title.slice(0, 16)+"..."}</Layout.Content>
                                    </Card>
                                    </Link>
                                 </Col>
                           </SwiperSlide>
                     })
                  }
               </Swiper>
         </div>   
      </>
   );
};

export default SimiliarMovies;