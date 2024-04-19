import React from 'react'
import Memo from "/src/components/Memo.jsx"

const Category = ({title}) => {
  return (
    <div className="w-full h-full ">
      <h3 className="w-full font-semibold text-2xl mb-4">{title}</h3>
      <div className="flex flex-col gap-4">
        <Memo />
        <Memo />
        <Memo />
        <Memo />
      </div>
    </div>
  )
}

export default Category