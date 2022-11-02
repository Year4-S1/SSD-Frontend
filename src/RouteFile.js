import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login/Login'
import Navbar from './Components/Navbar/Navbar'
import AppProvider from './ContextAPI/AppProvider'

const RouteFile = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}

export default RouteFile