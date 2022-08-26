import { LOAD } from "./types";

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
      default: 
         return state
   }
}

export default appReducer