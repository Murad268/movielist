import { types } from "./types/typeIndex";

const initialState = {
   movies: []
}

const appReducer = (state=initialState, action) => {
   switch(action.type) {
      case types.LOAD:
         const movies = action.data;
         return {
            ...state,
            movies: movies
         }
      case types.SEARCH:
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