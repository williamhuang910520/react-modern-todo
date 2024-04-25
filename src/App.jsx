import { useState } from 'react'
import Tag from "../src/components/Tag.jsx"
import Category from "../src/components/Category.jsx"
import { CATEGORY, TAGS, testData } from "../src/assets/Data.js"

function App() {


  return (
    <div className="flex justify-center">
      <div className="container p-8 gap-4 flex flex-col">
        <div className="flex gap-2">
          <input className=" w-full h-12 px-4 border-[1.5px] rounded-lg" type="text"/>
          <button className="bg-slate-200 w-20 px-4 py-2 rounded-lg">新增</button>
        </div>
        <div className="flex gap-2">
          {Object.values(TAGS).map(tag => 
            <Tag checkable color={tag.color} key={tag.name}>{tag.name}</Tag>
          )}
          
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
