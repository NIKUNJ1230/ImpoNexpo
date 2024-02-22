import React from 'react'
import "./Live_stream_category.css"
import cat_1 from "../../../../assets/Live main/cat-1.svg"
import cat_2 from "../../../../assets/Live main/cat-2.svg"
import cat_3 from "../../../../assets/Live main/cat-3.svg"
import cat_4 from "../../../../assets/Live main/cat-4.svg"
import cat_5 from "../../../../assets/Live main/cat-5.svg"
import cat_6 from "../../../../assets/Live main/cat-6.svg"
import cat_7 from "../../../../assets/Live main/cat-7.svg"
import cat_8 from "../../../../assets/Live main/cat-8.svg"
import Single_live_category from './Single_live_category'
function Live_stream_category() {
    return (
        <div>
            <div className="container-fluid ">
                <div className="live-stream-category-title">
                    <h2>Livestream from Categories</h2>
                </div>
                <div className="live-stream-categories">
                    <div className="row">
                        <Single_live_category img={cat_1} title={"Fashion"} />
                        <Single_live_category img={cat_2} title={"Furniture"} />
                        <Single_live_category img={cat_8} title={"Sports"} />
                        <Single_live_category img={cat_3} title={"Toys"} />
                        <Single_live_category img={cat_4} title={"Cameras"} />
                        <Single_live_category img={cat_5} title={"Gaming"} />
                        <Single_live_category img={cat_6} title={"Headphones"} />
                        <Single_live_category img={cat_7} title={"Smartphones"} />
                    </div>
                </div>
                <div className="live-stream-categories">
                    <div className="row">
                        <Single_live_category img={cat_1} title={"Fashion"} />
                        <Single_live_category img={cat_2} title={"Furniture"} />
                        <Single_live_category img={cat_8} title={"Sports"} />
                        <Single_live_category img={cat_3} title={"Toys"} />
                        <Single_live_category img={cat_4} title={"Cameras"} />
                        <Single_live_category img={cat_5} title={"Gaming"} />
                        <Single_live_category img={cat_6} title={"Headphones"} />
                        <Single_live_category img={cat_7} title={"Smartphones"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Live_stream_category
