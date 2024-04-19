import React, { useState } from 'react';

const Tag = ({children, color, checkable}) => {

  const [isChecked, setIsChecked] = useState(false)

  return (
    <div 
      className={`${isChecked?color:"bg-white "} flex border-[1.5px] rounded-lg px-3 py-1 select-none cursor-pointer`}
      onClick={() => {setIsChecked(!isChecked)}}
    >
      {children}
    </div>
  )
}

export default Tag
