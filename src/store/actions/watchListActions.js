import { actions } from "./actionIndex"
import { types } from "../types/typeIndex"
export function addWatchList(data) {
   actions.addWatchListVery()
   return    {
      type: types.ADD_WATCH_LIST,
      data
   }
}

export function removeWatchList(id) {
   actions.deleteFromWatchListVery()
   return    {
      type: types.REMOVE_WATCH_LIST,
      id
   }
}



