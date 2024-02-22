import React from 'react'
import "./Hash_live_stream.css"
import { Link } from 'react-router-dom'
import Single_hash_live from './Single_hash_live'
import { IoMdPlay } from 'react-icons/io'
function Hash_live_stream() {
    return (
        <div>
            <div className="container-fluid ">
                <div className="hash-live-title">
                    <h2>Livestream from #s</h2>
                </div>
            </div>
            <div className="hash-live-menu">
                <div className="container-fluid ">
                    <ul>
                        <li>
                            <Link to="live_stream_main">
                                all
                            </Link>
                        </li>
                        <li>
                            <Link to="live_stream_main">
                                Trending #
                            </Link>
                        </li>
                        <li>
                            <Link to="live_stream_main">
                                Product #
                            </Link>
                        </li>
                        <li>
                            <Link to="live_stream_main">
                                Users-Generated
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="hash-live-stream">
                <div className='row'>
                    <Single_hash_live hash={"# Computers"} />
                    <Single_hash_live hash={"# Computers"} />
                    <Single_hash_live hash={"# Computers"} />
                    <Single_hash_live hash={"# Computers"} />
                    <Single_hash_live hash={"# Computers"} />
                    <Single_hash_live hash={"# Computers"} />
                    <Single_hash_live hash={"# Computers"} />
                    <Single_hash_live hash={"# Computers"} />
                    <Single_hash_live hash={"# Computers"} />
                    <Single_hash_live hash={"# Computers"} />
                </div>
            </div>

            <div className="show-more-live">
                <Link to="/live_stream_main">
                    show more
                    <span>
                        <IoMdPlay />
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default Hash_live_stream
