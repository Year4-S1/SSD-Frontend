import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateUser from './Components/CreateUser/CreateUser'
import Login from './Components/Login/Login'
import Navbar from './Components/Navbar/Navbar'
import AppProvider from './ContextAPI/AppProvider'
import Home from './Components/Home/Home'
import SaveMessage from './Components/Message/SaveMessage'
import AdminHome from './Components/AdminHome/AdminHome'
import Files from './Components/File/Files'
import UploadFile from './Components/File/UploadFile'



const RouteFile = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/adminHome' element={<AdminHome />} />
          <Route path='/createUser' element={<CreateUser />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/saveMessage' element={<SaveMessage/>} />
          <Route path='/uploadFile' element={<UploadFile/>} />

        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}

export default RouteFile