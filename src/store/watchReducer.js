import { ADD_WATCH_LIST, REMOVE_WATCH_LIST } from "./types";
const initialState = {
   watchList:  localStorage.getItem('watchList')?JSON.parse(localStorage.getItem("watchList")):[]

}



const watchReducer = (state=initialState, action) => {
   switch(action.type) {
      case ADD_WATCH_LIST:
         const watchedavorites = [...state.watchList, action.data]
         localStorage.setItem("watchList", JSON.stringify(watchedavorites))
           return {
            ...state,
            watchList: [...state.watchList, action.data]
         }
         case REMOVE_WATCH_LIST:
          
            const {id} = action
            const afterDeleteWatched = state.watchList.filter(list => list.id !== id)
            localStorage.setItem("watchList", JSON.stringify(afterDeleteWatched))
            return {...state, watchList: state.watchList.filter(list => list.id !== id)}
      default: 
         return state
   }
}

export default watchReducer