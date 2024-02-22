import React from 'react'
import Live_stream_navbar from '../Live_stream_main/Components/Live_stream_navbar/Live_stream_navbar'
import Footer from '../../Components/Footer/Footer'
import More_live_menu from './Components/More_live_menu/More_live_menu'
import More_single_live from './More_single_live'

function More_live() {
    return (
        <div className='bg-dark'>
            <Live_stream_navbar />
            <More_live_menu />
            <More_single_live />
            <Footer />
        </div>
    )
}

export default More_live
