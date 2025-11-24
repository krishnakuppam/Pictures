import React from 'react'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
        
    </div>
  )
}

export default App
