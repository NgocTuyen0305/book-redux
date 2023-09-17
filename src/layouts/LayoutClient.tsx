
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../pages/components/Header'
import Footer from '../pages/components/Footer'

const LayoutClient = () => {
  return (
    <div className=''>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default LayoutClient