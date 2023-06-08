"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { HiMenuAlt3 } from 'react-icons/hi'
import { FiX } from 'react-icons/fi'
import Image from 'next/image'

const NavBar = () => {

  const [menu, setMenu] = useState<Boolean>(false);
  const [colorChange, setColorchange] = useState<Boolean>(false);

  const changeNavbarColor = (): void => {
    if (window.scrollY >= 0) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    }
  }, [])

  return (
    <nav className={`flex z-20 items-center justify-between lg:px-8 md:px-6 px-3  py-4 gap-5 fixed top-0 w-full ${colorChange && " bg-black transition-all delay-100  ease-in-out bg-opacity-40 backdrop-blur-md border-gray-800 shadow-lg"}`}>
      <Link href="/">
        <Image height={200} width={200} className='h-12 w-12' src="/images/logo.png" alt="Aspect Vision" />
      </Link>

      <div className='gap-5 lg:flex md:flex hidden'>
        <Link className='text-gray-300 px-3 py-1 rounded-full hover:bg-gray-700 hover:text-white' href="/">
          <span>Home</span>
        </Link>

        <Link className='text-gray-300 px-3 py-1 rounded-full hover:bg-gray-700 hover:text-white' href="#about">
          <span>About</span>
        </Link>

        <Link className='text-gray-300 px-3 py-1 rounded-full hover:bg-gray-700 hover:text-white' href="#services">
          <span>Services</span>
        </Link>

        <Link className='text-gray-300 px-3 py-1 rounded-full hover:bg-gray-700 hover:text-white' href="#pricing">
          <span>Pricing</span>
        </Link>
      </div>

      <div className='lg:flex md:flex hidden items-center gap-2'>
        <button className='border bg-gray-900 hover:bg-gray-800 text-white font-semibold border-white text-sm py-1.5 px-4 rounded-full'>
          <span>Contact</span>
        </button>
        <Link href="/register">
          <button className='bg-white text-black border border-[#10101a] hover:bg-gray-300 font-semibold text-sm py-1.5 px-4 rounded-full'>
            <span>Book Now</span>
          </button>
        </Link>
      </div>

      <button
        type="button"
        onClick={() => {
          if (menu == false) {
            setMenu(true);
          } else {
            setMenu(false);
          }
        }}
        className="animate-pulse md:hidden border focus:ring-[2.5px] focus:outline-none font-medium rounded-lg text-lg px-2.5 py-2.5 text-center items-center focus:ring-gray-500 bg-gray-800 border-gray-900 text-white hover:bg-gray-700 mr-2"
      >
        {!menu ? <HiMenuAlt3 /> : <FiX />}
      </button>
    </nav>
  )
}

export default NavBar;