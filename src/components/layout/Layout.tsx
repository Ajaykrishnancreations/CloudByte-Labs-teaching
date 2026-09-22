import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'
import ChatWidget from '../chatbot/ChatWidget'
import FloatingActions from '../contact/FloatingActions'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      <Header />
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="pt-16 md:pt-20"
      >
        <Outlet />
      </motion.main>
      <Footer />
      <FloatingActions />
      <ChatWidget />
    </div>
  )
}
