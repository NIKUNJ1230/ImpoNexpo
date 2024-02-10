import React from 'react'

export default function UserInfo(props) {
    return (
        <div className='row bgWhite'>
            <div className="col-2  p-0 ps-1">
                <img src={props.image?props.image:""} alt="profile image"  className='chatsProfileImg '/>
            </div>
            <div className="col-10 ">
            <div className="row">
                <div className="col-12 fw-semibold fs-medium">{props.name?props.name:""}</div>
                <div className="col-12 fs-small fw-">{props.email?props.email:""}</div>
            </div>
            </div>
        </div>
    )
}
