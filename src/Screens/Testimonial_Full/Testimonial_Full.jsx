import React from 'react'
import Topbar from '../../Components/Topbar/Topbar'
import Navbar from '../../Components/Navbar/Navbar'
import Full_hero from './Components/Full_hero/Full_hero'
import Full_testimonial from './Components/Full_testimonial/Full_testimonial'
import Footer from "../../Components/Footer/Footer"
import Possible from './Components/Full_testimonial/Possible/Possible'
function Testimonial_Full() {
    return (
        <div>
            <Topbar />
            <Navbar />
            <Full_hero />
            <Full_testimonial />
            {/* <Possible /> */}
            <Footer />
        </div>
    )
}

export default Testimonial_Full
