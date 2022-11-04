import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateUser from './Components/CreateUser/CreateUser'
import Login from './Components/Login/Login'
import Navbar from './Components/Navbar/Navbar'
import AppProvider from './ContextAPI/AppProvider'

const RouteFile = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Navbar />
        <Routes>
          {/* <Route path='/login' element={<Login />} /> */}
          <Route path='/' element={<CreateUser />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}

export default RouteFile