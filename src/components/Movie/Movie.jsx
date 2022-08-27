import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Row, Col, Typography, Image } from 'antd';
import { loadDetails } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import 'antd/dist/antd.min.css';
import styles from './movie.module.scss';
import star from '../../assets/icons/Vector.png';
const Movie = () => {
   const { Header, Footer, Sider, Content } = Layout;
   const {Title} = Typography
   const {id} = useParams();
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(loadDetails(id))
   }, [])
   const details = useSelector(state => {
      return state.detailsReducer.details
   })
   console.log(details)
   return (
      <>
        <Layout className={styles.movie}>
         <Image height={480} src={"https://image.tmdb.org/t/p/w500/"+details.backdrop_path}/>
          <Layout className={styles.movie__sub}>
            <Title className={styles.movie__title}>{details.title}</Title>
          </Layout>
       </Layout>
       <Row className={styles.movie__wrapper}>
         <Col className={styles.movie__poster} span={10}><Image width={480} height={720} src={"https://image.tmdb.org/t/p/w500/"+details.poster_path}/></Col>
         <Col offset={3} span={10}>
            <Title className={styles.movie__poster__title}>{details.title}</Title>
            <Content className={styles.movie__poster__desc}>{details.overview}</Content>
            <Content className={styles.movie__raiting}><Image width={14} height={14} src={star}/><Content style={{"marginLeft": "10px"}}>{+details.vote_average?.toFixed(1)}</Content></Content>
            <Title level={4} className={styles.movie__poster__subtitle}>type</Title>
            <Content className={styles.movie__poster__content}>{details.budget?"movie":"tw-show"}</Content>
            <Title className={styles.movie__poster__subtitle}>Release Date:</Title>
            <Content className={styles.movie__poster__content}>{details.release_date}</Content>
            <Title className={styles.movie__poster__subtitle}>Run time</Title>
            <Content className={styles.movie__poster__content}>{details.runtime} min</Content>
            <Title className={styles.movie__poster__subtitle}>Genres</Title>
            <Content className={styles.movie__genres}> {
               details.genres?.map((genre, i) => {
                  return <Content key={genre.id} className={styles.movie__poster__content}>{genre.name}{i != 2?",":null}</Content>
               })
            }</Content>
         </Col>
      </Row>
      </>
   );
};

export default Movie;