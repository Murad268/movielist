import { types } from "./types/typeIndex"
const initialState = {
   watchList:  localStorage.getItem('watchList')?JSON.parse(localStorage.getItem("watchList")):[]

}



const watchReducer = (state=initialState, action) => {
   switch(action.type) {
      case types.ADD_WATCH_LIST:
         const watchedavorites = [...state.watchList, action.data]
         localStorage.setItem("watchList", JSON.stringify(watchedavorites))
           return {
            ...state,
            watchList: [...state.watchList, action.data]
         }
         case types.REMOVE_WATCH_LIST:
          
            const {id} = action
            const afterDeleteWatched = state.watchList.filter(list => list.id !== id)
            localStorage.setItem("watchList", JSON.stringify(afterDeleteWatched))
            return {...state, watchList: state.watchList.filter(list => list.id !== id)}
      default: 
         return state
   }
}

export default watchReducer