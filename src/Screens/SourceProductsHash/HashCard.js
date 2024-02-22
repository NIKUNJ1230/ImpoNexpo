import React from 'react'

export default function HashCard(props) {
    return (
        <>
            <span className={`borderBlue ${props.bg === "white" ? "bgWhite" : ""}`} style={{display: 'inline-block', padding: '5px 25px 2px', borderRadius: '100px', border:"2px solid #1D5DC7" }}>
                <span className='fw-Bold d-block'>{props.hash}</span>
                <span className='fs-small mt--1 d-block'>{props.post}K Posts</span>
            </span>
        </>
    )
}
                                      