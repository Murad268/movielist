import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { Suspense } from 'react';
import Header from './components/Header/Header';
import MainPage from './containers/MainPage';
import FavoritesAndWatchList from './containers/FavoritesAndWatchList';
import MoviePage from './containers/MoviePage';
import NotFoundPage from './containers/NotFoundPage';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Router>
    <Header/>
    <Suspense fallback="loading...">
      <Routes>
        <Route path="/" element={<Navigate to="/popular" replace/>} ></Route>
        <Route path='/:category' element={<MainPage/>}/>
        <Route path={'/favorites'} element={<FavoritesAndWatchList/>}/>
        <Route path={'/watch_list'} element={<FavoritesAndWatchList/>}/>
        <Route path={'/movie/:id'} element={<MoviePage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </Suspense>
    <ToastContainer
            position='top-right'
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />
  </Router>
  
  );
}

export default App;
