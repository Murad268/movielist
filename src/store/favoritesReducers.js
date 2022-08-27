import { types } from "./types/typeIndex"
const initialState = {
   favorites:   localStorage.getItem('favorites')?JSON.parse(localStorage.getItem("favorites")):[]

}

const favoritesReducer = (state=initialState, action) => {
   switch(action.type) {
      case types.ADD_FAVORITES:
         const addedFavorites = [...state.favorites, action.data]
         localStorage.setItem("favorites", JSON.stringify(addedFavorites))
       
           return {
            ...state,
            favorites: [...state.favorites, action.data]
         }
         case types.REMOVE_FAVORITES:
            const {id} = action
            const afterDeleteFavorites = state.favorites.filter(favorite => favorite.id !== id)
            localStorage.setItem("favorites", JSON.stringify(afterDeleteFavorites))
            return {...state, favorites: state.favorites.filter(favorite => favorite.id !== id)}
       
      default: 
         return state
   }
}

export default favoritesReducer