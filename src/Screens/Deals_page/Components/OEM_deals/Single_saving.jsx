import React from 'react'

function Single_saving({img,title,text}) {
  return (
    <div className="w-4">
    <div className="single-saving-deals">
        <div className="single-saving-deals-img">
            <img src={img} alt="" />
        </div>
        <div className="single-saving-deals-content">
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    </div>
</div>
  )
}

export default Single_saving
