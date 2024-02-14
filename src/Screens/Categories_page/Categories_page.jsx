import React from 'react'
import "./Categories_page.css"
import Topbar from '../../Components/Topbar/Topbar'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Category_page from './Components/Category_page'
function Categories_page() {
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
