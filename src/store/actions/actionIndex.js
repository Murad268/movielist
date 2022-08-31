import {toast} from 'react-toastify'
import { addFavorites, removeFavorites } from './favoritesActions';
import { moviesLoad, searchMovie, loadDetails, loadSimiliars, emptyDetails } from './loadActions';
import { addWatchList, removeWatchList } from './watchListActions';


const addFavoriteVery = () => toast("movie added to favorites");
const deleteFromFavaritesVery = () => toast("movie removed from favorites");
const addWatchListVery = () => toast("movie added to watchlist");
const deleteFromWatchListVery = () => toast("movie removed from watchlist");


export const actions = {
   addFavorites,
   removeFavorites,
   addWatchList,
   removeWatchList,
   moviesLoad,
   searchMovie,
   loadDetails,
   addFavoriteVery,
   deleteFromFavaritesVery,
   addWatchListVery,
   deleteFromWatchListVery,
   loadSimiliars,
   emptyDetails
}