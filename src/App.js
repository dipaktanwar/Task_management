import React from 'react';
import './App.css';
import Signup from './Component/Signup';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import Board from './Component/Board'
import Analytics from './Component/Analytics'
import Setting from './Component/Setting'
import Login from './Component/Login';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     {/* <Dashboard/> */}
       <Routes>
        <Route  path='/board'  element ={<Board/>}/>
        <Route  path='/analytics'  element ={<Analytics/>}/>
        <Route  path='/setting'  element ={<Setting/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
       <Route path='/' element={<Signup/>}/>
       <Route path='*' element={<h2>page route not available</h2>}/>
       </Routes>
       {/* <Routes>
       </Routes> */}

           </BrowserRouter>
      </div>
  );
}

export default App;
