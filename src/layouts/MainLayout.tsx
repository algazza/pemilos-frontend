import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <main className='overflow-hidden'>
      <Outlet/>
    </main>
  )
}

export default MainLayout