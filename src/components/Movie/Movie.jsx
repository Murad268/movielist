import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Row, Col, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/actions/actionIndex';
import { icons } from '../../utils/iconUtils';
import Loading from '../Loading/Loading';
import SimiliarMovies from '../SimiliarMovies/SimiliarMovies';
import styles from './movie.module.scss';
import 'antd/dist/antd.min.css';

const Movie = () => {
 
   const {id} = useParams();
   const dispatch = useDispatch();
   const toTop = () => {
      document.documentElement.scrollTop = 0;
   }
   let movieId = parseInt(id.match(/\d+/));
   let movieCategory = id.replace(/[0-9]/g, '')
   useEffect(() => {
      toTop()
      dispatch(actions.emptyDetails())
      dispatch(actions.loadDetails(movieId))
   }, [id]) // eslint-disable-line react-hooks/exhaustive-deps
   const data = useSelector(state => {
      return {
         details: state.detailsReducer.details,
         favorites: state.favoritesReducer.favorites,
         watch_list: state.watchReducer.watchList
      }
   })
   const hasInFavorites = !data.favorites.some(list => list.id === data.details.id)
   const hasInWatchList = !data.watch_list.some(list => list.id === data.details.id)
   let genres = [];
   data.details.genres?.forEach(el => {
      genres.push(el.name)
   })
   

   return (
      <Layout className={styles.col}>
         <div className={styles.layout}>
            <Row className={styles.header}>
               <Col span={24}>
                  {
                     data.details.backdrop_path?
                     <img src={"https://image.tmdb.org/t/p/original/"+data.details.backdrop_path} alt="" />
                     :data.details.backdrop_path===null?
                     <img src={icons.posterNot} alt="" />
                     :<div style={{"marginTop": "120px"}}>
                         <Loading/>
                     </div>
                  }
                  
               </Col>
               <Layout.Content className={styles.header__footer}>
                  <div className={styles.header__footer__top}>
                     {movieCategory} movies / {data.details?.title}
                  </div>
                  <div className={styles.header__footer__bottom}>
                     {data.details?.title}
                  </div>
               </Layout.Content>
            </Row>
            <Row className={styles.movie__poster}>
               <Col>
                  {
                     data.details.poster_path?
                     <img src={"https://image.tmdb.org/t/p/original/"+data.details.poster_path} alt="" />:
                     data.details.poster_path === null?
                     <img src={icons.notFound} alt="" />:
                     <Loading/>

                  }
                  
               </Col>
               <Col>
               <Typography.Title className={styles.movie__poster__title}>{data.details.title}</Typography.Title>
               <Layout.Content className={styles.movie__poster__desc}>{data.details.overview}</Layout.Content>
               <Layout.Content className={styles.movie__poster__about}>
                  <div className={styles.movie__poster__about__raiting}><i style={{"marginRight":"5px"}} className="fa-regular fa-star"></i>{String(+data.details.vote_average)} ({data.details?.vote_count} vote)</div>
                  {
                     hasInFavorites?
                     <div onClick={() => dispatch(actions.addFavorites(data.details))} className={styles.movie__poster__about__fav}><i className="fa-regular fa-heart" style={{"color": "orange"}}></i></div>
                     :
                     <div onClick={() => dispatch(actions.removeFavorites(data.details.id))} className={styles.movie__poster__about__fav}><i className="fa fa-heart" style={{"color": "orange"}}></i></div>
                    
                  }  
                   {
                     hasInWatchList?
                     <div onClick={() => dispatch(actions.addWatchList(data.details))}  className={styles.movie__poster__about__watch}><i style={{"color": "orange"}} className="fa-regular fa-bookmark"></i></div>
                     :
                     <div onClick={() => dispatch(actions.removeWatchList(data.details.id))} className={styles.movie__poster__about__watch}><i style={{"color": "orange"}} className="fa fa-bookmark"></i></div>
                  }  
               </Layout.Content>
               <Typography.Title level={4} className={styles.movie__poster__subtitle}>type</Typography.Title>
               <Layout.Content className={styles.movie__poster__content}>{data.details.budget?"movie":"tw-show"}</Layout.Content>
               <Typography.Title className={styles.movie__poster__subtitle}>Release Date:</Typography.Title>
               <Layout.Content className={styles.movie__poster__content}>{data.details.release_date}</Layout.Content>
               <Typography.Title className={styles.movie__poster__subtitle}>Run time</Typography.Title>
               <Layout.Content className={styles.movie__poster__content}>{data.details.runtime} min</Layout.Content>
               <Typography.Title className={styles.movie__poster__subtitle}>Genres</Typography.Title>
               <Layout.Content className={styles.movie__poster__genres}> 
                  {
                     <Layout.Content className={styles.movie__poster__content}>{genres.join(", ")}</Layout.Content> 
                  }
                 
               </Layout.Content>
               </Col>
            </Row>
            <SimiliarMovies id={movieId} name={data.details.title}/>
         </div>
      </Layout>
      
   );
};

export default Movie;