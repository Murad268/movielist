import { types } from "../types/typeIndex";

const initialState = {
   movies: [],
   loading: false
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
      case types.LOAD_ON:
         return {...state, loading: true}
      case types.LOAD_OFF:
         return {...state, loading: false}
      default: 
         return state
   }
}

export default appReducer