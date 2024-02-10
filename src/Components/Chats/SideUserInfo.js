import React from 'react'

export default function SideUserInfo(props) {
    return (
        <div className='row bgWhite py-3 my-2 px-2'>
            <div className="col-2  p-0 ps-1">
                <img src={props.image?props.image:""} alt="profile image"  className='chatsProfileImg '/>
            </div>
            <div className="col-10 ">
            <div className="row">
                <div className="col-12 fw-semibold fs-medium colorBlue2">{props.name?props.name:""}</div>
                <div className="col-12 fs-small fw-semibold">{props.email?props.email:""}</div>
            </div>
            </div>
        </div>
    )
}

