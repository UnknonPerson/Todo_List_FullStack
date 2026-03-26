import React from 'react'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
        <Nav />

        <main className="grow">
            <Outlet />
        </main>

        <Footer />
    </div>
  )
}

export default Layout
