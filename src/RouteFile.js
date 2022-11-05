import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateUser from './Components/CreateUser/CreateUser'
import Login from './Components/Login/Login'
import Navbar from './Components/Navbar/Navbar'
import AppProvider from './ContextAPI/AppProvider'
import Home from './Components/Home/Home'
import SaveMessage from './Components/Message/SaveMessage'

const RouteFile = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Navbar />
        <Routes>
          {/* <Route path='/login' element={<Login />} /> */}
          <Route path='/' element={<CreateUser />} />
          {/* <Route path='/' element={<Home/>} /> */}
          {/* <Route path='/' element={<SaveMessage/>} /> */}

        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}

export default RouteFile