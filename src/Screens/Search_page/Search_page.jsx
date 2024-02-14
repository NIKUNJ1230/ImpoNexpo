import React from 'react'
import Topbar from '../../Components/Topbar/Topbar'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from "../../Components/Footer/Footer"
import "./Search_page.css"
import Search_full_page from './Components/Search_full_page/Search_full_page'
function Search_page() {
    return (
        <div>
            <Topbar />
            <Navbar />
            <Search_full_page />
            <Footer />
        </div>
    )
}

export default Search_page
