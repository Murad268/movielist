import { combineReducers } from "redux";
import appReducer from "./appReducer";
import favoritesReducer from "./favoritesReducers";
const rootReducer = combineReducers({
   appReducer,
   favoritesReducer
})

export default rootReducer