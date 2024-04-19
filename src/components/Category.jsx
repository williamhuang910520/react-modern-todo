import React, { useEffect, useState } from 'react'
import Memo from "/src/components/Memo.jsx"

function Category({ title, memos }) {
  
  return (
    <div className="w-full h-full ">
      <h3 className="w-full font-semibold text-2xl mb-4">{title}</h3>
      <div className="flex flex-col gap-4">
        {memos && memos.map((memo, i) => (
          <Memo key={i} content={memo.content} category={memo.category} tags={memo.tags} />
        ))}
      </div>
    </div>
  )
}

export default Category