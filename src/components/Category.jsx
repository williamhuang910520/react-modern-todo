import React, { useEffect, useState, useContext } from 'react'
import { Icon } from '@iconify/react'
import { useDrop } from 'react-dnd'
import { MemoContent } from '../App'
import { Memo } from "/src/components/Memo.jsx"

function Category({ categoryTitle, memos }) {

  const [isPhone, setIsPhone] = useState(false)
  useEffect(() => {
    let ua = navigator.userAgent;
    let android = ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1; // android
    let ios = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios
     
    // 將變數存入 state 可以用來做其他樣式判斷
    setIsPhone(android || ios)
}, []); 

  const [isAdding, setIsAdding] = useState(false)

  const [memoData, setMemoData] = useState({
    content: {
      title: "HIHIHI",
      subhead: "test"
    },
    category: categoryTitle,
    tags: [],
    pin: false
    // uuid: uuidv4()
  })

  const setAllMemo = useContext(MemoContent).setAllMemo
  const allMemo = useContext(MemoContent).allMemo
  const handleMoveMemo = (draggingMemoUuid, targetCategory) => {
    console.log(draggingMemoUuid, targetCategory);
    setAllMemo(prevAllMemo => 
      prevAllMemo.map(memo =>
        memo.uuid === draggingMemoUuid ? {...memo, category: targetCategory} : memo
      )
    )
    console.log("drop!!");
  }

  const [{}, dropRef] = useDrop(() => ({
    accept: "card",
    drop: item=>{
      handleMoveMemo(item.memo.uuid, categoryTitle)
    }
  }))
  
  return (
    <div ref={dropRef} className="flex-1 min-w-64">
      <h3 className="w-full font-semibold text-2xl mb-4">{categoryTitle}</h3>
      {memos.filter(memo=>memo.pin===true).length != 0 && 
        <div className="flex flex-col gap-4">
          {memos && 
            memos
              .filter(memo=>memo.pin===true)
              .map((memo, i) => (
                <Memo key={memo.uuid} memo={memo} />
              ))
          }
        </div>
      }
      <div className="flex flex-col gap-4 mt-4">
        {memos && memos
          .filter(memo=>memo.pin!=true)
          .map((memo, i) => (
          <Memo key={memo.uuid} memo={memo} />
        ))}
      <div className="w-full group/newMemo ">
        {!isAdding && <button 
          className={`w-full h-12 rounded-lg border-[1.5px] ${isPhone?"visible":"invisible"} group-hover/newMemo:visible`}
          onClick={()=>{setIsAdding(true)}}>
			      <Icon className='m-auto w-[20px] h-[20px]' icon="material-symbols:add"></Icon>
          </button>}
        {isAdding && <Memo edit memo={memoData} onComplete={()=>{setIsAdding(false)}}/>}
      </div>
      </div>
    </div>
  )
}

export default Category