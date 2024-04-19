import { useState } from 'react'
import Tag from "../src/components/Tag.jsx"
import Category from "../src/components/Category.jsx"

function App() {
  const CATEGORY = {
    TODO: "TODO",
    Doing: "Doing",
    Finish: "Finish"
  }

  const testData = [
    {
      content: "Test Data 1",
      category: CATEGORY.TODO,
      tags: ["tag", "tag2"]
    },
    {
      content: "HIHI",
      category: CATEGORY.Doing,
      tags: []
    },
    {
      content: "Hello",
      category: CATEGORY.Finish,
      tags: []
    },
  ]

  return (
    <div className="flex justify-center">
      <div className="container p-8 gap-4 flex flex-col">
        <div className="flex gap-2">
          <input className=" w-full h-12 px-4 border-[1.5px] rounded-lg" type="text"/>
          <button className="bg-slate-200 w-20 px-4 py-2 rounded-lg">新增</button>
        </div>
        <div className="flex gap-2">
          <Tag checkable color="bg-red-200">tag1</Tag>
          <Tag checkable color="bg-orange-200" >tag2</Tag>
          <Tag checkable color="bg-emerald-200">tag3</Tag>
          <Tag checkable color="bg-sky-200">tag4</Tag>
          <select name="" id="" className="ml-auto">
            <option value="">HIHI</option>
            <option value="">HIHI</option>
            <option value="">HIHI</option>
          </select>
        </div>
        <div className="flex gap-4 mt-8">
          <Category title="TODO" memos={testData.filter((memo)=>memo.category==CATEGORY.TODO)}/>
          <Category title="Doing" memos={testData.filter((memo)=>memo.category==CATEGORY.Doing)}/>
          <Category title="Finish" memos={testData.filter((memo)=>memo.category==CATEGORY.Finish)}/>
        </div>
      </div>
    </div>
  )
}

export default App
