import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import { Public } from './Public'
import AuthProvider from './GlobalContext'
import Information from './pages/Information'
import Login from './pages/Login'
import Home from './pages/Home'
import { Protected } from './Protected'
import { ProtectedRole } from './ProtectedRole'
import Authorised from './pages/Authorised'
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />}></Route>
            <Route path='register' element={<Public><Register /></Public>}></Route>
            <Route path='login' element={<Public><Login /></Public>} />
            <Route path='information' element={<Protected><Information /></Protected>} />
            <Route path='authorised' element={<ProtectedRole><Authorised /></ProtectedRole>} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
export default App