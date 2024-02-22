import React, { useEffect } from 'react'
import "./Categories_page.css"
import Topbar from '../../Components/Topbar/Topbar'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Category_page from './Components/Category_page'
function Categories_page() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Topbar />
            <Navbar />
            <Category_page />
            <Footer />
        </div>
    )
}

export default Categories_page
