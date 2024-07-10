import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import FeedbackPage from './pages/FeedbackPage/FeedbackPage';
import MapsPage from './pages/MapsPage/MapsPage';


function App() {
  
  
  return (
    <div >
     <BrowserRouter>
     <Routes>
     <Route path='/:branchId' element={<MainPage />} />
      <Route path='/maps/:branchId' element={<MapsPage />} />
      <Route path='/feedback' element={<FeedbackPage />} />
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
