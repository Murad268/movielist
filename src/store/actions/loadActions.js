
import { types } from "../types/typeIndex"
import axios from "axios";
export function moviesLoad(category, page) {
   return async dispatch => {
      try{
         await axios.get(`https://api.themoviedb.org/3/movie/${category}?api_key=82918892663111fc45ffe32102bc5fe1&language=en-US&page=${page}`).
         then((res) => {
            dispatch({
               type: types.LOAD,
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
               type: types.SEARCH,
               data: res.data
            })  
         })       
      } catch(e) {
   
      }
      
   }
}



export function loadDetails(id) {
   return async dispatch => {
      try{
         await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=82918892663111fc45ffe32102bc5fe1&language=en-US`).
         then((res) => {
            dispatch({
               type: types.LOAD_DETAILS,
               data: res.data
            })  
         })       
      } catch(e) {
   
      }
      
   }
}