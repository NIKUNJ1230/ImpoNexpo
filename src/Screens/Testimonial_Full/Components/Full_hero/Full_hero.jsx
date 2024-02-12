import React from 'react'
import "./Full_hero.css"
import hero_icon from "../../../../assets/testimonial/hero_icon.svg"
import hero_img from "../../../../assets/testimonial/hero_img.svg"
import hero_company from "../../../../assets/testimonial/full_hero_company.svg"
import { FaChevronRight } from "react-icons/fa6";
import Full_right_banner from './Full_right_banner'
import Full_left_banner from './Full_left_banner'
function Full_hero() {
    return (
        <section>
            <div className="full-hero">
                <div className="row">

                    <Full_left_banner path1={"Customer Stories"} path2={"Education - K-12"} path3={"Achievement First"} title={"Achievement First Deploys Zoom + Neat to Empower Teachers & Maintain School Communities"} text={"Learn how Achievement First uses Zoom and Neat to create a seamless educational experience for students in the classroom and at home."}/>

                    <Full_right_banner icon={hero_icon} img={hero_img} company={hero_company} />
                </div>
            </div>
        </section>
    )
}

export default Full_hero
