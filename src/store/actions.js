import { LOAD, SEARCH, ADD_FAVORITES, REMOVE_FAVORITES, ADD_WATCH_LIST, REMOVE_WATCH_LIST, LOAD_DETAILS } from "./types";
import axios from "axios";
export function commentsLoad(category, page) {
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
   return {
      type: ADD_FAVORITES,
      data
   }
}

export function removeFavorites(id) {
   return {
      type: REMOVE_FAVORITES,
      id
   }
}

export function addWatchList(data) {
   return    {
      type: ADD_WATCH_LIST,
      data
   }
}

export function removeWatchList(id) {
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