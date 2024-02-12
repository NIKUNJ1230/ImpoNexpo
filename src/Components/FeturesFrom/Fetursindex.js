import React from 'react'
import FetursFrom from './FetursFrom'
import iconfirst from '../../../src/assets/images/clothing.svg'
export default function Fetursindex() {
  return (
    <div>
    
        <FetursFrom img={iconfirst} />
         <FetursFrom name="Clothing, shoes & more" />
    </div>
  )
}
