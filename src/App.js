import React from 'react';
import "./App.css";
//import Router
import {BrowserRouter as Router, Route, Routes, NavLink} from "react-router-dom";

import Navbar from "./components/navbar.js";
import Home from "./pages/Home.js";
import Footer from "./components/footer.js";
import About from "./components/about.js";
import Forms from "./components/forms.js";
import Services from './components/services';

export default function App() {
  return (
    <>
   
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
           <Route exact path='/Contact' element={<Forms/>}></Route>
           <Route exact path='/home' element={<Home/>}></Route>
           <Route exact path='/hwk' element={<About/>}></Route>
           <Route exact path='form' element={<Forms/>}></Route>
           <Route exact path='spmenu' element={<Services/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
    
    
  )
}