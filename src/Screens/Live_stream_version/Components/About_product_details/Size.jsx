import React, { useState } from 'react'

function Size({ size, price, index }) {
    const [quantities, setQuantities] = useState({});


    const handleIncrement = (index) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [index]: Math.min((prevQuantities[index] || 0) + 1000, 10000)
        }));
    };

    const handleDecrement = (index) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [index]: Math.max((prevQuantities[index] || 0) - 1000, 0)
        }));
    };

    const handleInputChange = (index, event) => {
        const newValue = parseInt(event.target.value) || 0;
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [index]: Math.min(Math.max(newValue, 0), 10000)
        }));
    };

    return (
        <>
            <div className="w-3">
                <span>{size}</span>
            </div>
            <div className="w-3">
                <span>{price}</span>
            </div>
            <div className="w-3">
                <div key={index} className="qty-container">
                    <button className="qty-btn-minus" onClick={() => handleDecrement(index)}>-</button>
                    <input
                        type="text"
                        className="input-qty"
                        value={quantities[index] || ''}
                        onChange={(e) => handleInputChange(index, e)}
                    />
                    <button className="qty-btn-plus" onClick={() => handleIncrement(index)}>+</button>
                </div>
            </div>
        </>
    )
}

export default Size
