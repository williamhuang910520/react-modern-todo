import React from 'react'
import Tag from './Tag'

const Memo = ({content, category, tags}) => {
  return (
    <div className="w-full border-[1.5px] rounded-lg p-3 flex flex-col gap-2">
      <p className="text-lg">
        {content}
      </p>
      <div className="flex gap-2">
        {tags.map((tag) => (
          <Tag small>{tag}</Tag>
        ))}
      </div>
    </div>
  )
}

export default Memo