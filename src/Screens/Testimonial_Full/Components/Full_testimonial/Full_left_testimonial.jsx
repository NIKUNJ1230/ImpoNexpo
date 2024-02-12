import React from 'react'
import quote from "../../../../assets/testimonial/quote.svg"
function Full_left_testimonial({text,name,desig}) {
    return (
        <div className="w-40">
            <div className="full-left-testimonial">
                <div className="full-left-testimonial-text">
                    <p>{text}</p>
                    <img src={quote} alt="" />
                </div>
                <div className="full-left-testimonial-content">
                    <h3 className="full-left-testimonial-name">
                        {name}
                    </h3>
                    <p className='full-left-testimonial-desig'>{desig}</p>
                </div>
            </div>
        </div>
    )
}

export default Full_left_testimonial
