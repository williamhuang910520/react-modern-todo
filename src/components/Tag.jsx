import React, { useState, forwardRef } from 'react';
import { TAGS } from "../../src/assets/Data.js"

const Tag = ({children, color, small, tag, checkable, onChecked}) => {

  const [isChecked, setIsChecked] = useState(false)
  const handleOnClick = (e) => {
    setIsChecked(checkable && !isChecked)
    onChecked(tag)
  }

  return (
    <div 
      className={`${isChecked?color:""} ${small?"text-xs":""} ${checkable?"cursor-pointer":color} flex border-[1.5px] rounded-lg px-2 py-1 select-none `}
      onClick={handleOnClick}
    >
      {children}
    </div>
  )
}

export default Tag

export const TagSelector = forwardRef(({ tags, onToggleTag }, ref)  => {

  return (
    <div ref={ref} className="absolute z-10 -right-[1px] top-[32px] w-auto h-min rounded-lg select-none overflow-hidden shadow-lg bg-white">
      {Object.values(TAGS).map((tag, index) => 
        <TagSelectorItem 
          name={tag.name} 
          isChecked={tags.some(t => t.name == tag.name)} 
          key={tag.name}
          tag={tag}
          onToggleTag={onToggleTag}/>
      )}
    </div>
  )
})

const TagSelectorItem = ({name, isChecked, onToggleTag, tag }) => {


  return (
    <label className="flex gap-2 py-2 px-4 hover:bg-gray-100">
      <input type="checkbox" className="rounded-lg" id={name} defaultChecked={isChecked} onChange={()=>onToggleTag(tag)} />
      <span className='text-sm'>{name}</span>
    </label>
  )
}
