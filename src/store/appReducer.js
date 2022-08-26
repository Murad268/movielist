import { LOAD, SEARCH } from "./types";

const initialState = {
   movies: []
}

const appReducer = (state=initialState, action) => {
   switch(action.type) {
      case LOAD:
         const movies = action.data;
         return {
            ...state,
            movies: movies
         }
      case SEARCH:
         const seacrhed = action.data;
         return {
            ...state,
            movies: seacrhed
         }
      default: 
         return state
   }
}

export default appReducer