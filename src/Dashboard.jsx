import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Assignments from './components/Assignments'
import { Outlet } from 'react-router-dom'


const Dashboard = () => {
  return (
    <>
      <Header />
      <div className='px-[8rem]'>
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default Dashboard