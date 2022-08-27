import { combineReducers } from "redux";
import appReducer from "./appReducer";
import favoritesReducer from "./favoritesReducers";
import watchReducer from "./watchReducer";
import detailsReducer from "./detailsReduce";
const rootReducer = combineReducers({
   appReducer,
   favoritesReducer,
   watchReducer,
   detailsReducer
})

export default rootReducer