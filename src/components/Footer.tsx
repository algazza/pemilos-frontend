import snapandev from '../assets/Logo Snapandec.svg'
const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-2 py-12">
        Made with 🩷 By
        <img src={snapandev} alt="snapandev" className='w-40'/>
    </footer>
  )
}

export default Footer