import { combineReducers } from "redux";
import appReducer from "./appReducer";
import favoritesReducer from "./favoritesReducers";
import watchReducer from "./watchReducer";
const rootReducer = combineReducers({
   appReducer,
   favoritesReducer,
   watchReducer
})

export default rootReducer