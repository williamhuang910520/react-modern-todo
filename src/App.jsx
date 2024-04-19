import { useState } from 'react'
import Tag from "../src/components/Tag.jsx"
import Category from "../src/components/Category.jsx"

function App() {

  return (
    <div className="flex justify-center">
      <div className="container py-8 gap-4 flex flex-col">
        <div className="flex gap-2">
          <input className=" w-full h-12 px-4 border-[1.5px] rounded-lg" type="text"/>
          <button className="bg-slate-200 w-20 px-4 py-2 rounded-lg">新增</button>
        </div>
        <div className="flex gap-2">
          <Tag color="bg-red-200">tag1</Tag>
          <Tag color="bg-orange-200" >tag2</Tag>
          <Tag color="bg-emerald-200">tag3</Tag>
          <Tag color="bg-sky-200">tag4</Tag>
          <select name="" id="" className="ml-auto">
            <option value="">HIHI</option>
            <option value="">HIHI</option>
            <option value="">HIHI</option>
          </select>
        </div>
        <div className="flex gap-4 mt-8">
          <Category title="TODO" />
          <Category title="Current" />
          <Category title="Finish" />
        </div>
      </div>
    </div>
  )
}

export default App
