import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Suspense } from 'react';
import Header from './components/Header/Header';
import MainPage from './containers/MainPage';
function App() {
  return (
    <Router>
    <Header/>
    <Suspense fallback="loading...">
      <Routes>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </Suspense>
  </Router>
  );
}

export default App;
