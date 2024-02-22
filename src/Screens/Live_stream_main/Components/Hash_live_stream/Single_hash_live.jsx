import React from 'react'
import { Link } from 'react-router-dom'

function Single_hash_live({ hash }) {
    return (
        <div className="w-5">
            <div className="single-live-hash">
                <Link to="live_stream_main">{hash}</Link>
            </div>
        </div>
    )
}

export default Single_hash_live
