import React from 'react'
import "./Live_stream_main.css"
import Live_stream_navbar from './Components/Live_stream_navbar/Live_stream_navbar'
import Footer from '../../Components/Footer/Footer'
import Live_stream_banner from './Components/Live_stream_banner/Live_stream_banner'
import On_going_live from './Components/On_going_live/On_going_live'
import Live_stream_category from './Components/Live_stream_category/Live_stream_category'
import Upcoming_live from './Components/Upcoming_live/Upcoming_live'
import Trending_supliers_live_stream from './Components/Trending_suppliers_live_stream/Trending_supliers_live_stream'
import Hash_live_stream from './Components/Hash_live_stream/Hash_live_stream'
import Follow_live_stream from './Components/Follow_live_stream/Follow_live_stream'
import Intreact_live_stream from './Components/Intreact_live_stream/Intreact_live_stream'

function Live_stream_main() {
    return (
        <div className='bg-dark'>
            <Live_stream_navbar />
            <Live_stream_banner />
            <On_going_live />
            <Live_stream_category />
            <Upcoming_live />
            <Trending_supliers_live_stream />
            <Hash_live_stream />
            <Follow_live_stream />
            <Intreact_live_stream />

            <Footer />
        </div>
    )
}

export default Live_stream_main
