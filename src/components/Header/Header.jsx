import React from 'react';
import { PageHeader } from 'antd';
import { NavLink } from 'react-router-dom';
import { icons } from '../../utils/iconUtils';
import { useSelector } from 'react-redux';
import 'antd/dist/antd.min.css';
import styles from './header.module.scss';
const Header = () => {
 
   const movies = useSelector(state => {
      const {favoritesReducer, watchReducer} = state
      return {
         favorites: favoritesReducer.favorites,
         watch_list: watchReducer.watchList
      }
   })
  
   return (
         <PageHeader className={styles.header} ghost={false}>
            <div className="container">
               <div className={styles.header__wrapper}>
                  <div className={styles.header__logo}>
                     <NavLink to="/"><img src={icons.logo} alt="" /></NavLink>
                  </div>
                  <div className={styles.header__links}>
                     <NavLink className={({ isActive }) => (isActive ? styles.header__navLink : "link")} to="/popular" rel="noopener noreferrer">
                         Popular
                     </NavLink>,
                     <NavLink className={({ isActive }) => (isActive ? styles.header__navLink : "link")} to="/now_playing" rel="noopener noreferrer">
                         Now Playing
                     </NavLink>,
                     <NavLink className={({ isActive }) => (isActive ? styles.header__navLink : "link")} to="/top_rated" rel="noopener noreferrer">
                         Top Rated
                     </NavLink>,
                     <NavLink className={({ isActive }) => (isActive ? styles.header__navLink : "link")} to="/upcoming" rel="noopener noreferrer">
                        Upcoming
                     </NavLink>
                     <NavLink className={({ isActive }) => (isActive ? styles.header__navLink : "link")} to="/latest" rel="noopener noreferrer">
                        Latest
                     </NavLink>
                     <NavLink style={{"position": "relative"}} className={({ isActive }) => (isActive ? styles.header__navLink : "link")} to="/favorites" key="3"><i className="fa-regular fa-heart" style={{"fontSize": "20px"}}></i>{movies.favorites.length>0?<sup className={styles.header__noty}>{movies.favorites.length}</sup>:null}</NavLink>,
                     <NavLink style={{"position": "relative"}} className={({ isActive }) => (isActive ? styles.header__navLink : "link")} to="/watch_list" key="2"><i style={{"fontSize": "20px"}} className="fa-regular fa-bookmark"></i>{movies.watch_list.length>0?<sup className={styles.header__noty}>{movies.watch_list.length}</sup>:null}</NavLink>,
                  </div>
               </div>
            </div>
         </PageHeader>
   );
};

export default Header;