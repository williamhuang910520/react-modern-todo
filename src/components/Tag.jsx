import React, { useState } from 'react';

const Tag = ({children, color, checkable, small}) => {

  const [isChecked, setIsChecked] = useState(false)

  return (
    <div 
      className={`${isChecked?color:"bg-white "} ${small?"text-sm":""} ${checkable?"cursor-pointer":""} flex border-[1.5px] rounded-lg px-3 py-1 select-none `}
      onClick={() => {setIsChecked(!isChecked)}}
    >
      {children}
    </div>
  )
}

export default Tag
