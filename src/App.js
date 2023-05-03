import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Homepage from './component/Homepage';
import Blog from './component/Blog';
import Home from './Home';
import Nav from './component/nav';
import Photos from './component/photos'
import { ToastContainer } from 'react-toastify';
function App() {
  return (
   <BrowserRouter>
   <Nav/>
     <Routes>
      
       <Route path='/' element={<Homepage/>} />
       <Route path='/blog' element={<Blog/>} />
       <Route path='/photos' element={<Photos/>} />
       <Route path='/' element={<Homepage/>} />
     </Routes>
     <ToastContainer/>
   </BrowserRouter>
  );
}

export default App;
