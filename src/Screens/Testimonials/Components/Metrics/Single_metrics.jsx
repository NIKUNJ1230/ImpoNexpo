import React from 'react'

function Single_metrics({title,text}) {
    return (
        <div className="w-4">
            <div className="single-metrics">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Single_metrics
