import { types } from "../types/typeIndex"
import { actions } from "./actionIndex"
export function addFavorites(data) {
   actions.addFavoriteVery()
   return {
      type: types.ADD_FAVORITES,
      data
   }
}

export function removeFavorites(id) {
   actions.deleteFromFavaritesVery()
   return {
      type: types.REMOVE_FAVORITES,
      id
   }
}