import Navbar from '../components/Navbar'; import Footer from './Footer'
export default function PageLayout({ children }) { return <><Navbar/><main className="overflow-hidden pt-0">{children}</main><Footer/></> }
