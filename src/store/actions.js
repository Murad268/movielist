import { LOAD, SEARCH } from "./types";
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

export function searchMovie(query) {
   return async dispatch => {
      try{
         await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=82918892663111fc45ffe32102bc5fe1&query=${query}`).
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