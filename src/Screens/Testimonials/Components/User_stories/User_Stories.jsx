import React from 'react'
import "./User_Stories.css"
import user_s1 from "../../../../assets/testimonial/user_s1.svg"
import user_s2 from "../../../../assets/testimonial/user_s2.svg"
import user_s3 from "../../../../assets/testimonial/user_s3.svg"
import user_s4 from "../../../../assets/testimonial/user_s4.svg"
import user_s5 from "../../../../assets/testimonial/user_s5.svg"
import user_s6 from "../../../../assets/testimonial/user_s6.svg"
import user_s7 from "../../../../assets/testimonial/user_s7.svg"
import user_s8 from "../../../../assets/testimonial/user_s8.svg"
import user_s9 from "../../../../assets/testimonial/user_s9.svg"
import user_c1 from "../../../../assets/testimonial/user_c1.svg"
import user_c2 from "../../../../assets/testimonial/user_c2.svg"
import user_c3 from "../../../../assets/testimonial/user_c3.svg"
import user_c4 from "../../../../assets/testimonial/user_c4.svg"
import user_c5 from "../../../../assets/testimonial/user_c5.svg"
import user_c6 from "../../../../assets/testimonial/user_c6.svg"
import user_c7 from "../../../../assets/testimonial/user_c7.svg"
import user_c8 from "../../../../assets/testimonial/user_c8.svg"
import user_c9 from "../../../../assets/testimonial/user_c9.svg"
import Single_select from './Single_select'
import { Link } from 'react-router-dom'
import Single_stories from './Single_stories'
function User_Stories() {
    return (
        <section>
            <div className="container-fluid ">
                <div className="user-stories-title">
                    <h2>feature user stories</h2>
                </div>

                <div className="user-stories-menu">
                    <div className="row">

                        <div className="w-4">
                            <div className="user-stories-search">
                                <div className="user-search-icon">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <input type="search" name='user_stories_search' placeholder='Search' />
                            </div>
                        </div>
                        <Single_select name={"product"} value={"Product"} />
                        <Single_select name={"industries"} value={"Industries"} />
                        <Single_select name={"countries"} value={"Countries"} />

                    </div>
                </div>

                <div className="user-stories">
                    <div className="row">
                        <Single_stories src_s={user_s1} src_c={user_c1} title={"AB InBev"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem hic earum nulla vero libero nemo neque sint corrupti eveniet fugit?"} />
                        <Single_stories src_s={user_s2} src_c={user_c2} title={"AccioJob"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem hic earum nulla vero libero nemo neque sint corrupti eveniet fugit?"} />
                        <Single_stories src_s={user_s3} src_c={user_c3} title={"Achivement First"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem hic earum nulla vero libero nemo neque sint corrupti eveniet fugit?"} />
                        <Single_stories src_s={user_s4} src_c={user_c4} title={"Acosta"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem hic earum nulla vero libero nemo neque sint corrupti eveniet fugit?"} />
                        <Single_stories src_s={user_s5} src_c={user_c5} title={"Agriwebb"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem hic earum nulla vero libero nemo neque sint corrupti eveniet fugit?"} />
                        <Single_stories src_s={user_s6} src_c={user_c6} title={"ALCIVIA"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem hic earum nulla vero libero nemo neque sint corrupti eveniet fugit?"} />
                        <Single_stories src_s={user_s7} src_c={user_c7} title={"Ally Finacial"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem hic earum nulla vero libero nemo neque sint corrupti eveniet fugit?"} />
                        <Single_stories src_s={user_s8} src_c={user_c8} title={"American Woodmark"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem hic earum nulla vero libero nemo neque sint corrupti eveniet fugit?"} />
                        <Single_stories src_s={user_s9} src_c={user_c9} title={"Appetize"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem hic earum nulla vero libero nemo neque sint corrupti eveniet fugit?"} />
                    </div>
                </div>
                <div className="loading-stories">
                    <Link to="/" className="load-more">
                        Load more
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default User_Stories
