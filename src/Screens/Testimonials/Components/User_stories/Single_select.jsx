import React from 'react'

function Single_select({ name, value }) {
    return (
        <div className="w-4">
            <div className="user-stories-select">
                <select name={name} id="">
                    <option value="">{value}</option>
                </select>
            </div>

        </div>
    )
}

export default Single_select
