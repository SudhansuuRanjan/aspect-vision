import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Aspect Vision | Register',
  description: 'Simplifying your Counselling Experience.',
}

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout