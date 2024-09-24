import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Register from './pages/Register'
import Login from './Pages/Login'
import { Public } from './Public'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='login' element={<Public><Login /></Public>} />
        </Route>
       
      </Routes>
    </BrowserRouter>
  )
}

export default App