import React from 'react'

function Price_pair({ pairs, price }) {
    return (
        <>

            <div className="w-2">
                <span>{pairs}</span>
            </div>
            <div className="w-2">
                <span>{price}</span>
            </div>

        </>
    )
}

export default Price_pair
