import React from 'react'
import ChatsfullLogo from '../../assets/images/chatsFullLogo.svg'
import profile from '../../assets/images/profile1.jpg'
import followBtn from '../../assets/images/followBtn.svg'
import iconVideo from '../../assets/images/icon-video.svg'
import iconCall from '../../assets/images/icon-call.svg'
import iconMic from '../../assets/images/icon-mic.svg'
import iconUser from '../../assets/images/icon-users.svg'
import iconBookmark from '../../assets/images/icon-bookmark.svg'
import iconRoundStar from '../../assets/images/icon-RoundStar.svg'
import iconThreedot from '../../assets/images/icon-threedot.svg'

import Atext from '../../assets/images/Atext.svg'
import smily from '../../assets/images/smily.svg'
import link from '../../assets/images/link.svg'
import translate from '../../assets/images/translate.svg'
import imageGalary from '../../assets/images/imageGalary.svg'
import copyClipoard from '../../assets/images/copyClipoard.svg'
import sendButton from '../../assets/images/sendButton.svg'
import { CiSearch } from "react-icons/ci";
import UserInfo from './UserInfo';
import SideUserInfo from './SideUserInfo'

export default function Chats() {
    return (
        <div>
            <div className="container-fluid pt-1" style={{height:"100vh" , width:"100vw", overflow:"hidden"}}>
                <div className="row">
                    <div className="col-2 ">
                        <div className="row">
                            <div className="col-10 ms-auto me-auto  p-1">
                                <img src={ChatsfullLogo} className='chatsLogo  my-2 ms-1' alt="" />
                            </div>
                            <div className="col-10  bgGray ms-auto me-auto mb-4">
                                <input type="text" placeholder='Type Your Message' className='chatsSearch bgGray border-0 p-1 ' /> <CiSearch size={25} className='colorBlue1' />
                            </div>
                            <div className="col-9"></div>
                        </div>
                    </div>
                    <div className="col-10 ">
                        <div className="row">
                            <div className="col-3 "><UserInfo image={profile} name="Christopher Campbell" email="@ChristopherCampbell" /></div>
                            <div className="col-9 ">
                                <div className="row d-flex justify-content-between">
                                    <div className="col-4">
                                        Origin:China
                                    </div>
                                    <div className="col-4 pt-0">
                                        <div className="fw-bolder ">Local time: Jan 12, 2024, 11:43 AM</div>
                                        <div className="colorGray fw-bolder fs-6 ">Last seen 02:55 pm</div>
                                    </div>
                                    <div className="col-4 d-flex justify-content-end">
                                        <div className="row">
                                            <div className="col-12 text-end"><button className='border-0'><img src={followBtn} alt="" style={{ backgroundColor: "#fff" }} /></button></div>
                                            <div className="col-12 fs-small text-end">12k followers</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row  ">
                            <div className="col-6  d-flex justify-content-around my-3">
                                <div className=""><img src={iconVideo} alt="" className='iconSize' /></div>
                                <div className=""><img src={iconCall} alt="" className='iconSize' /></div>
                                <div className=""><img src={iconMic} alt="" className='iconSize' /></div>
                                <div className=""><img src={iconUser} alt="" className='iconSize' /></div>
                            </div>
                            <div className="col-2 "></div>
                            <div className="col-4 ">
                                <div className="d-flex justify-content-end my-3">
                                    <div className="d-flex ">
                                        <div className="mx-4"><img src={iconBookmark} alt="" className='iconSize' /></div>
                                        <div className="mx-2"><img src={iconRoundStar} alt="" className='iconSize' /></div>
                                        <div className="mx-2"><img src={iconThreedot} alt="" className='iconSize' /></div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 border bgGray">
                        <div className="row ">
                            <div className="col-12 border d-flex justify-content-evenly">
                                <div className="fw-bold fs-small pointer">ALL</div>
                                <div className="fw-bold fs-small pointer">UNREAD</div>
                                <div className="fw-bold fs-small pointer">STARRED</div>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-12 border" style={{ height: "83vh", overflowY: "auto" }}>
                                <SideUserInfo className="" image={profile} name="Christopher Campbell" email="what do you have planed this.... " />
                                <SideUserInfo className="" image={profile} name="Christopher Campbell" email="what do you have planed this.... " />
                                <SideUserInfo className="" image={profile} name="Christopher Campbell" email="what do you have planed this.... " />
                                <SideUserInfo className="" image={profile} name="Christopher Campbell" email="what do you have planed this.... " />
                                <SideUserInfo className="" image={profile} name="Christopher Campbell" email="what do you have planed this.... " />
                                <SideUserInfo className="" image={profile} name="Christopher Campbell" email="what do you have planed this.... " />
                                <SideUserInfo className="" image={profile} name="Christopher Campbell" email="what do you have planed this.... " />
                                <SideUserInfo className="" image={profile} name="Christopher Campbell" email="what do you have planed this.... " />
                                <SideUserInfo className="" image={profile} name="Christopher Campbell" email="what do you have planed this.... " />
                                <SideUserInfo className="" image={profile} name="Christopher Campbell" email="what do you have planed this.... " />
                            </div>
                        </div>
                    </div>
                    <div className="col-10  bgGray px-0">
                        <div className="chat-display" style={{ height: "calc(100% - 200px)", overflowY: "auto" }}>
                            {/* Component to display chats */}
                            Chat Content
                        </div>
                        <div className="chat-send bgWhite " style={{ height: "80px", display: "flex", alignItems: "center" }}>
                            <div className="col-11 ">
                                <input type="text" name="" id="" className='border-0 px-2 py-2 w-100 chatInput' placeholder='Type Your Message...' />
                            </div>
                            <div className="col-1 ">
                                <img src={sendButton} alt="" className='btn border-0' style={{ width: "80px" }} />
                            </div>
                        </div>
                        <div className="row mx-1 ">
                            <div className="col-12 d-flex justify-content-center  bgWhite py-5" style={{ width: "100%", marginBottom: "50px" }}>
                                <div className="icon-container">
                                    <img src={Atext} alt="" width={50} />
                                </div>
                                <div className="icon-container">
                                    <img src={smily} alt="" width={50} />
                                </div>
                                <div className="icon-container">
                                    <img src={link} alt="" width={40} />
                                </div>
                                <div className="icon-container">
                                    <img src={translate} alt="" width={30} />
                                </div>
                                <div className="icon-container">
                                    <img src={imageGalary} alt="" width={40} />
                                </div>
                                <div className="icon-container">
                                    <img src={copyClipoard} alt="" width={30} />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <div className="col-10 border bgGray">
                        <div className="chat-display" style={{ height: "calc(100% - 100px)", overflowY: "auto" }}>
                            Chat Content

                        </div>
                        <div className="chat-send" style={{ height: "50px", display: "flex", alignItems: "center" }}>
                            <div className="col-11 border">
                                <input type="text" name="" id="" className='border-0 px-2 py-2 w-100 chatInput' placeholder='Type Your Message...' />
                            </div>
                            <div className="col-1 border">
                                <img src={sendButton} alt="" className='btn border-0' style={{ width: "80px" }} />
                            </div>
                        </div>
                        <div className="row bgGray">
                            <div className="col-12 d-flex justify-content-center py-2 bgGray" style={{ width: "100%", marginBottom: "50px" }}>
                                <div className=""><img src={Atext} alt="" width={50} /></div>
                                <div className=""><img src={smily} alt="" width={50} /></div>
                                <div className=""><img src={link} alt="" width={40} /></div>
                                <div className=""><img src={translate} alt="" width={30} /></div>
                                <div className=""><img src={imageGalary} alt="" width={40} /></div>
                                <div className=""><img src={copyClipoard} alt="" width={30} /></div>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="col-10 border bgGray">
                        <div className="chat-display" style={{ height: "calc(100% - 100px)", overflowY: "auto" }}>
                            Chat Content
                        </div>
                        <div className="chat-send" style={{ height: "50px", display: "flex", alignItems: "center" }}>
                            <div className="col-11 border">
                                <input type="text" name="" id="" className='border-0 px-2 py-2 w-100 chatInput' placeholder='Type Your Message...' />
                            </div>
                            <div className="col-1 border">
                                <img src={sendButton} alt="" className='btn border-0' style={{ width: "80px" }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-evenly py-2" style={{ width: "100%" }}>
                                <div className=""><img src={Atext} alt="" width={50} /></div>
                                <div className=""><img src={smily} alt="" width={50} /></div>
                                <div className=""><img src={link} alt="" width={40} /></div>
                                <div className=""><img src={translate} alt="" width={30} /></div>
                                <div className=""><img src={imageGalary} alt="" width={40} /></div>
                                <div className=""><img src={copyClipoard} alt="" width={30} /></div>
                            </div>
                        </div>
                    </div> */}



                    {/* <div className="col-10 border bgGray">
                        <div className="chat-display" style={{ height: "calc(100% - 50px)", overflowY: "auto" }}>
                            Chat Content
                        </div>
                        <div className="chat-send" style={{ height: "50px", display: "flex", alignItems: "center" }}>
                            <div className="col-11 border">
                                <input type="text" name="" id="" className='border-0 px-2 py-2 w-100 chatInput' placeholder='Type Your Message...' /> 
                            </div>
                            <div className="col-1 border">
                                <img src={sendButton} alt="" className='btn border-0' style={{ width: "80px" }} />
                            </div>
                            <div className="d-flex justify-content-evenly py-2" >
                                    <div className=""><img src={Atext} alt="" width={50} /></div>
                                    <div className=""><img src={smily} alt="" width={50} /></div>
                                    <div className=""><img src={link} alt="" width={40} /></div>
                                    <div className=""><img src={translate} alt="" width={30} /></div>
                                    <div className=""><img src={imageGalary} alt="" width={40} /></div>
                                    <div className=""><img src={copyClipoard} alt="" width={30} /></div>
                                </div>
                        </div>
                    </div> */}


                    {/* <div className="col-10 border bgGray">
                        <div className="row">
                            <div className="col-12 border" >Message BOX</div>
                            <div className="col-12 border bgWhite " >
                                <div className="row">
                                        <div className="col-11 border"><input type="text" name="" id="" className='border-0 px-2 py-3 w-100 chatInput' placeholder='Type Your Message...' /></div>
                                        <div className="col-1 border"><img src={sendButton} alt="" className='btn border-0' style={{width:"80px"}}/></div>
                                </div>
                                <div className="d-flex justify-content-evenly py-3" >
                                    <div className=""><img src={Atext} alt="" width={50} /></div>
                                    <div className=""><img src={smily} alt="" width={50} /></div>
                                    <div className=""><img src={link} alt="" width={40} /></div>
                                    <div className=""><img src={translate} alt="" width={30} /></div>
                                    <div className=""><img src={imageGalary} alt="" width={40} /></div>
                                    <div className=""><img src={copyClipoard} alt="" width={30} /></div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
