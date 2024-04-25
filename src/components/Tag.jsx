import React, { useState } from 'react';

const Tag = ({children, color, checkable, small}) => {

  const [isChecked, setIsChecked] = useState(false)

  return (
    <div 
      className={`${isChecked?color:""} ${small?"text-sm":""} ${checkable?"cursor-pointer":color} flex border-[1.5px] rounded-lg px-3 py-1 select-none `}
      onClick={() => {setIsChecked(checkable && !isChecked)}}
    >
      {children}
    </div>
  )
}

export default Tag
