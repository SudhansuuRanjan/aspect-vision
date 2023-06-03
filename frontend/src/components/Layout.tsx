import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='min-h-screen relative'>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout