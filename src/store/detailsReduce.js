import { LOAD_DETAILS } from "./types";

const initialState = {
   details: {}
}

const detailsReducer = (state = initialState, action) => {
   switch(action.type) {
      case LOAD_DETAILS:
         const details = action.data;
         return {...state, details }
      default:
         return state
   }
}

export default detailsReducer