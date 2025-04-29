import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import './Layout.css'

function Layout() {
  return (
    <div className='layout-container'>
        <Header/>
            <div className='layout-outlet'>
                <Outlet/>
            </div>
        <Footer/>
    </div>
  )
}

export default Layout