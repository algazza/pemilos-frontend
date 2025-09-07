import Footer from '@/components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <main className='bg-gradient-to-br from-[#242633] to-[#46626A] text-white min-h-screen pt-10 pb-6 px-4 md:px-10 lg:px-20'>
      <Outlet/>
      <Footer/>
    </main>
  )
}

export default MainLayout
