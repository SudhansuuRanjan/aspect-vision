import Link from 'next/link'
import { FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const date = new Date;
  const year = date.getFullYear();

  return (
    <footer className='px-10 bg-black pt-10 w-full bottom-0 mt-32'>
      <div className='grid lg:grid-cols-3 grid-cols-1 mb-10 gap-10'>
        <div>
          <h3 className='text-rose-600 font-bold text-xl mb-5'>Aspect Vision</h3>
          <div className='flex flex-col gap-1.5'>
            <Link className='text-[#929292] font-medium text-base hover:text-white w-fit' href='/#features'>
              <span>Features</span>
            </Link>
            <Link className='text-[#929292] font-medium text-base hover:text-white w-fit' href='/#features'>
              <span>Services</span>
            </Link>
            <Link className='text-[#929292] font-medium text-base hover:text-white w-fit' href='/legals?term=refund'>
              <span>Refund Policy</span>
            </Link>
            <Link className='text-[#929292] font-medium text-base hover:text-white w-fit' href='/legals?term=privacy'>
              <span>Privacy Policy</span>
            </Link>
            <Link className='text-[#929292] font-medium text-base hover:text-white w-fit' href='/legals?term=tnc'>
              <span>Terms & Conditions</span>
            </Link>
          </div>
        </div>

        <div>
          <h3 className='text-rose-600 font-bold text-xl mb-5'>Address</h3>
          <p className='text-[#929292] font-medium'>
            Aspect Vision, Patliputra Complex,<br /> Ashok Rajpath, Patna,<br /> 80006, Bihar, INDIA
          </p>
        </div>

        <div>
          <h3 className='text-rose-600 font-bold text-xl mb-5'>Contact</h3>
          <img className='h-16 w-16 my-5' src="./images/logo.png" alt="logo" />
          <div className='flex gap-3 items-center mt-6'>
            <a style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tesla_nitp/" >
              <FaInstagram className='transition ease-in delay-50 text-pink-500 visited:text-pink-500 hover:text-pink-600 hover:scale-[110%]' size={30} />
            </a>
            <a style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/tesla-club-nitp/" >
              <FaLinkedinIn className='transition ease-in delay-50 text-blue-500 visited:text-blue-500 hover:text-blue-600 hover:scale-[110%]' size={30} />
            </a>
            <a style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer" href="https://twitter.com/T_E_S_L_Aclub" >
              <FaTwitter className='transition ease-in delay-50 text-sky-500 visited:text-sky-500 hover:text-sky-600 hover:scale-[110%]' size={30} />
            </a>
            <a style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer" href="https://twitter.com/T_E_S_L_Aclub" >
              <FaYoutube className='transition ease-in delay-50 text-rose-500 visited:text-rose-500 hover:text-rose-600 hover:scale-[110%]' size={30} />
            </a>
          </div>
        </div>
      </div>

      <div className="m-[auto] bg-gray-800 h-[1px]"></div>
      <div className="m-[auto] pb-8 pt-5 text-gray-600 font-medium text-sm flex flex-col md:flex-row lg:flex-row justify-between items-center">
        <p>
          © {year} Aspect Vision. All Rights Reserved.
        </p>
        <p>
          Designed & Developed by <a style={{ textDecoration: "none" }} className="font-medium" href="#">
            <span className='text-rose-500'>Sudhanshu Ranjan</span>
          </a>.
        </p>
      </div>
    </footer>
  )
}

export default Footer