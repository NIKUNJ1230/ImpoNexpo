import React from 'react'
import "./Procard-demo.css"

import profilelogo from '../../../src/assets/images/procard-profile-logo.svg'
import location from '../../../src/assets/images/procard-location.svg'
import follow from '../../../src/assets/images/procard-follow.svg'
import productimg from '../../../src/assets/images/procardimg.svg'
import prolike from '../../../src/assets/images/porcard-like.svg'
import procomment from '../../../src/assets/images/procard-message.svg'
import proshare from '../../../src/assets/images/procard-share.svg'
import profile from '../../../src/assets/images/procard-file.svg'
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineGroups } from "react-icons/md";
import { LiaCommentsSolid } from "react-icons/lia";
import { RWebShare } from "react-web-share";

{/* discription.slice(0,100)... */ }

export default function ProcardDemo() {
    return (
        <div className='procard-demon-main'>
            <div className='procard-header-main'>
                <div className='procard-header-1'>
                    <div className='procard-header-1-logo-img-main'>
                        <img src={profilelogo} alt="" className='procard-header-1-logo-img' />
                    </div>
                    <div className='procard-header-1-logo-text-main'>
                        <p className='procard-header-1-logo-text-p1'>
                            David Semllons
                        </p>
                        <p className='procard-header-1-logo-text-p2'>
                            @davidsem22
                        </p>
                    </div>
                </div>
                <div className='procard-header-loaction-main'>
                    <img src={location} alt="" className='procard-header-loaction-img' />
                    <p className='procard-header-loaction-p'>
                        china
                    </p>
                </div>
                <div className='procard-header-follow-main'>
                    <img src={follow} alt="" className='procard-header-follow-img' />
                    <p className='procard-header-follow-p'>
                        1.2k followers
                    </p>
                </div>
            </div>
            <div className='procard-img-info-main'>
                <div className='procard-img-info-1-imgdiv' >
                    <img src={productimg} alt="" className='procard-img-info-img' />
                </div>
                <div className='procard-btns-info-main'>
                    <div className='procard-ing-line-main'>
                        <img src={prolike} alt="" className='procard-ing-line-img' />
                        <p className='procard-ing-line-p'> 231</p>
                    </div>
                    <div className='procard-ing-line-main'>
                        <img src={procomment} alt="" className='procard-ing-line-img' />
                        <p className='procard-ing-line-p'>450</p>
                    </div>
                    <div className='procard-ing-line-main'>
                        <RWebShare
                            data={{
                                text: "Like humans, flamingos make friends for life",
                                url: "https://on.natgeo.com/2zHaNup",
                                title: "Flamingos",
                            }}
                            onClick={() => console.log("shared successfully!")}
                        >
                            <button className='sharebuttone-btn'>
                                <img src={proshare} alt="" className='procard-ing-line-img' />
                                <p className='procard-ing-line-p'> 45</p>
                            </button>                                             
                        </RWebShare>
                    </div>
                    <div className='procard-ing-line-main'>
                        <img src={profile} alt="" className='procard-ing-line-img' />
                        <p className='procard-ing-line-p'>
                            500</p>
                    </div>
                </div>
            </div>
            <div className='procard-text-main'>
                <div className='procard-text-1-main-div' >
                    <p className='procard-text-1-p'>
                        2924 Powerful Children’s Toys
                    </p>
                </div>
                <div className='procard-text-2-main-div'>
                    <p className='procard-text-2-p'>#go #World #David #Semllons #Export #imports</p>
                </div>
                <div className='procard-text-3-main-div'>
                    <p className='procard-text-3-p'>Lorem ipsum dolor sit amet consectetur. Sit dis fusce quis etiam arcu. Parturient sagittis facilisi nunc viverra non malesuada              Read More.</p>
                </div>
                <div className='procard-text-4-main-div'>
                    <div className='procard-text-4-price-main'>
                        <p className='procard-text-4-price-p'>$4.45- $6.5</p>
                    </div>
                    <div className='procard-minorder-text-4-main'>
                        <p className='procard-minorder-text-4-p'>Min orders: 20 Units</p>
                    </div>
                </div>
            </div>
            <div className='procard-bottum-btn-main'>
                <button className='procard-bottum-btn-1'><CiShoppingCart /> Order Now </button>

                <button className='procard-bottum-btn-2'><MdOutlineGroups /> Group Import</button>

                <button className='procard-bottum-btn-3'><LiaCommentsSolid /> Contact Exporter </button>

            </div>
            <RWebShare
                data={{
                    text: "Like humans, flamingos make friends for life",
                    url: "https://on.natgeo.com/2zHaNup",
                    title: "Flamingos",
                }}
                onClick={() => console.log("shared successfully!")}
            >
                <button>Share 🔗</button>
            </RWebShare>
        </div>
    )
}
