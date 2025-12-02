import React from 'react'
import Home from './Pages/Home';
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
        
    </div>
  )
}

export default App
