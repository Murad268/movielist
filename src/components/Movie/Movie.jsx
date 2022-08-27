import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Row, Col, Typography, Image } from 'antd';
import { loadDetails } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorites, addWatchList, removeWatchList } from '../../store/actions';
import 'antd/dist/antd.min.css';
import styles from './movie.module.scss';
import star from '../../assets/icons/Vector.png';
const Movie = () => {
   const {  Content } = Layout;
   const {Title} = Typography
   const {id} = useParams();
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(loadDetails(id))
   }, []) // eslint-disable-line react-hooks/exhaustive-deps
   const data = useSelector(state => {
      return {
         details: state.detailsReducer.details,
         favorites: state.favoritesReducer.favorites,
         watch_list: state.watchReducer.watchList
      }
   })
   const hasInFavorites = !data.favorites.some(list => list.id === data.details.id)
   const hasInWatchList = !data.watch_list.some(list => list.id === data.details.id)
   
   return (
      <>
        <Layout className={styles.movie}>
         <Image preview={false} height={480} src={"https://image.tmdb.org/t/p/w500/"+data.details.backdrop_path}/>
          <Layout className={styles.movie__sub}>
            <Title className={styles.movie__title}>{data.details.title}</Title>
          </Layout>
       </Layout>
       <Row className={styles.movie__wrapper}>
         <Col className={styles.movie__poster} span={10}>
            <Image preview={false}  width={480} height={720} src={"https://image.tmdb.org/t/p/w500/"+data.details.poster_path}/>
          
               <Row className={styles.movie__controlls}>
                  {
                     hasInFavorites?
                     <Col onClick={() => dispatch(addFavorite(data.details))} className={styles.movie__addFav}>
                        add favorite
                     </Col>
                     :
                     <Col onClick={() => dispatch(removeFavorites(data.details.id))} className={styles.movie__removeFav}>
                        remove from Favorite
                     </Col>
                  }  
                   {
                     hasInWatchList?
                     <Col onClick={() => dispatch(addWatchList(data.details))} className={styles.movie__addWatch}>
                        add watch list
                     </Col>
                     :
                     <Col onClick={() => dispatch(removeWatchList(data.details.id))} className={styles.movie__removeWatch}>
                        remove from watch list
                     </Col>
                  }  
               </Row>
           
         </Col>
         <Col offset={3} span={10}>
            <Title className={styles.movie__poster__title}>{data.details.title}</Title>
            <Content className={styles.movie__poster__desc}>{data.details.overview}</Content>
            <Content className={styles.movie__raiting}><Image preview={false}  width={14} height={14} src={star}/><Content style={{"marginLeft": "10px"}}>{String(+data.details.vote_average?.toFixed(1))}</Content></Content>
            <Title level={4} className={styles.movie__poster__subtitle}>type</Title>
            <Content className={styles.movie__poster__content}>{data.details.budget?"movie":"tw-show"}</Content>
            <Title className={styles.movie__poster__subtitle}>Release Date:</Title>
            <Content className={styles.movie__poster__content}>{data.details.release_date}</Content>
            <Title className={styles.movie__poster__subtitle}>Run time</Title>
            <Content className={styles.movie__poster__content}>{data.details.runtime} min</Content>
            <Title className={styles.movie__poster__subtitle}>Genres</Title>
            <Content className={styles.movie__genres}> {
               data.details.genres?.map((genre, i) => {
                  return <Content key={genre.id} className={styles.movie__poster__content}>{genre.name}{i !== 2?",":null}</Content>
               })
            }</Content>
         </Col>
      </Row>
      </>
      
   );
};

export default Movie;