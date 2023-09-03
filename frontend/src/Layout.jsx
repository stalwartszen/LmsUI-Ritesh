import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Assignments from './components/Classroom'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <>
      <Header />
      <div className='px-[4rem] w-full h-[84vh]'>
        <Outlet />
      </div>
    </>
  )
}

export default Layout