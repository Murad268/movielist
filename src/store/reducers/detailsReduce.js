import { types } from "../types/typeIndex";

const initialState = {
   details: {}
}

const detailsReducer = (state = initialState, action) => {
   switch(action.type) {
      case types.LOAD_DETAILS:
         const details = action.data;
         return {...state, details }
         case types.EMPTY_DETAILS: 
            return {
               ...state,
               details: {}
            }
         
      default:
         return state
   }
}

export default detailsReducer