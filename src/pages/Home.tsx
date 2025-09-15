import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <p>Home</p>
      <button onClick={() => window.location.href = "/form"} className='bg-blue-500 w-fit px-5 py-1 rounded-md'>Pilih kandidat</button>
    </div>
  )
}

export default Home