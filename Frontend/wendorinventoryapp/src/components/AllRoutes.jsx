import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Products from '../Pages/Products'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<SignUp/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes