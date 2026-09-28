import { createRoot } from 'react-dom/client'
import React, { useEffect, useState } from 'react'
import './styles.css'
import HomePage from './pages/HomePage'
import CoursesPage from './pages/CoursesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'

function App() { const [path, setPath] = useState(window.location.pathname); useEffect(() => { const update = () => setPath(window.location.pathname); window.addEventListener('popstate', update); window.addEventListener('app:navigate', update); return () => { window.removeEventListener('popstate', update); window.removeEventListener('app:navigate', update) } }, []); if (path === '/courses') return <CoursesPage/>; if (path === '/gallery') return <GalleryPage/>; if (path === '/about') return <AboutPage/>; if (path === '/contact') return <ContactPage/>; return <HomePage/> }
class AppErrorBoundary extends React.Component { state = { error: null }; static getDerivedStateFromError(error) { return { error } }; render() { return this.state.error ? <div style={{ padding: 40, fontFamily: 'system-ui' }}><h1>Unable to load Aathichoodi Academy</h1><pre>{this.state.error.message}</pre></div> : this.props.children } }
createRoot(document.getElementById('root')).render(<AppErrorBoundary><App /></AppErrorBoundary>)
