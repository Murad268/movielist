import { ADD_FAVORITES, REMOVE_FAVORITES, ADD_WATCH_LIST } from "./types";
const initialState = {
   favorites:   localStorage.getItem('favorites')?JSON.parse(localStorage.getItem("favorites")):[]

}

const favoritesReducer = (state=initialState, action) => {
   switch(action.type) {
      case ADD_FAVORITES:
         const addedFavorites = [...state.favorites, action.data]
         localStorage.setItem("favorites", JSON.stringify(addedFavorites))
         console.log(state)
           return {
            ...state,
            favorites: [...state.favorites, action.data]
         }
         case REMOVE_FAVORITES:
            const {id} = action
            const afterDeleteFavorites = state.favorites.filter(favorite => favorite.id !== id)
            localStorage.setItem("favorites", JSON.stringify(afterDeleteFavorites))
            return {...state, favorites: state.favorites.filter(favorite => favorite.id !== id)}
       
      default: 
         return state
   }
}

export default favoritesReducer