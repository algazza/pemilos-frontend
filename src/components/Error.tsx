//import React from 'react'

const Error = () => {
  return (
    <div className="bg-[linear-gradient(336deg,_#46626A_-36.08%,_#242633_83.86%)] w-screen h-screen flex flex-col justify-center items-center gap-3 font-inter text-white">
      <div className="w-fit h-fit flex flex-col gap-3">
        <div className="flex items-center gap-5">
          <div className="font-black text-5xl">404</div>
          <div>
            <div className="font-bold text-xl">Oops!</div>
            <div className="font-bold text-md">Halaman tidak ditemukan</div>
          </div>
        </div>
        <button onClick={() => {window.location.href = "/"}} className="font-medium tracking-wide bg-white w-full h-10 rounded-md">
          <span className="text-transparent bg-clip-text bg-[linear-gradient(336deg,_#46626A_-36.08%,_#242633_83.86%)]">Kembali ke Halaman Utama</span>
        </button>
      </div>
    </div>
  )
}

export default Error
