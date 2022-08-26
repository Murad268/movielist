import { LOAD } from "./types";
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