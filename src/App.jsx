import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"

import './App.css'

function App() {
  

  return (
    
    
    <BrowserRouter>

    <nav className="relative flex w-full flex-wrap items-center justify-between bg-neutral-900 py-3 text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start">
     {/* This is the main Turquoise Cobra link */}
     <ul className='list-style-none mr-auto flex flex-col pl-0 lg:flex-row'>
      <Link to="/">Turquois Cobra Blog</Link>
      </ul> 
      
      <Link to="/about">About</Link>
    </nav>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    
    </BrowserRouter>
    
  )
}

export default App
