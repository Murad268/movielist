import { LOAD, SEARCH, ADD_FAVORITES, REMOVE_FAVORITES, ADD_WATCH_LIST, REMOVE_WATCH_LIST, LOAD_DETAILS } from "./types";
import {toast} from 'react-toastify'
import axios from "axios";


const addFavoriteVery = () => toast("movie added to favorites");
const deleteFromFavaritesVery = () => toast("movie removed from favorites");
const addWatchListVery = () => toast("movie added to watchlist");
const deleteFromWatchListVery = () => toast("movie removed from watchlist");
export function moviesLoad(category, page) {
   return async dispatch => {
      try{
         await axios.get(`https://api.themoviedb.org/3/movie/${category}?api_key=82918892663111fc45ffe32102bc5fe1&language=en-US&page=${page}`).
         then((res) => {
            dispatch({
               type: LOAD,
               data: res.data
            })  
         })       
      } catch(e) {
   
           
      }
      
   }
}

export function searchMovie(query, page) {
   return async dispatch => {
      try{
         await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=82918892663111fc45ffe32102bc5fe1&page=${page}&query=${query}`).
         then((res) => {
            dispatch({
               type: SEARCH,
               data: res.data
            })  
         })       
      } catch(e) {
   
      }
      
   }
}




export function addFavorite(data) {
   addFavoriteVery()
   return {
      type: ADD_FAVORITES,
      data
   }
}

export function removeFavorites(id) {
   deleteFromFavaritesVery()
   return {
      type: REMOVE_FAVORITES,
      id
   }
}

export function addWatchList(data) {
   addWatchListVery()
   return    {
      type: ADD_WATCH_LIST,
      data
   }
}

export function removeWatchList(id) {
   deleteFromWatchListVery()
   return    {
      type: REMOVE_WATCH_LIST,
      id
   }
}


export function loadDetails(id) {
   return async dispatch => {
      try{
         await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=82918892663111fc45ffe32102bc5fe1&language=en-US`).
         then((res) => {
            dispatch({
               type: LOAD_DETAILS,
               data: res.data
            })  
         })       
      } catch(e) {
   
      }
      
   }
}