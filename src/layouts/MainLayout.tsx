import Footer from '@/components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <main className='bg-gradient-to-br from-[#242633] to-[#46626A] text-white min-h-screen pt-4'>
      <Outlet/>
      <Footer/>
    </main>
  )
}

export default MainLayout
