import React, { useState, useContext, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDrag } from "react-dnd";
import Tag, {TagSelector}  from './Tag'
import { MemoContent } from '../App'
import IconButton from './IconButton'
import { CATEGORY, TAGS, testData } from "../../src/assets/Data.js"

export const Memo = ({ memo, edit, onComplete }) => {

  const [{}, dragRef] = useDrag({
    type: "card",
    item: { memo }
  });

  const [myMemo, setMyMemo] = useState(memo.uuid?memo:{...memo, uuid: uuidv4()})
  const [editable, setEditable] = useState(edit)
  const [showTagSelector, setShowTagSelector] = useState(false)
  const tagSelectorRef = useRef(null)

  const handleUpdateContentTitle = (e) => {
    setMyMemo({
      ...myMemo,
      content: {
        ...myMemo.content,
        title: e.target.value
      }
    })
    console.log(myMemo);
  }

  const handleUpdateContentSubhead = (e) => {
    setMyMemo({
      ...myMemo,
      content: {
        ...myMemo.content,
        subhead: e.target.value
      }
    })
    // console.log(myMemo);
  }

  const memos = useContext(MemoContent)
  const handleSubbmitMemoEdit = (e) => {
    setEditable(false)
    console.log(memos)
    console.log(myMemo.uuid)
    // console.log(myMemo.uuid)

    if(memos.allMemo.filter(memo => memo.uuid == myMemo.uuid).length > 0){
      console.log(memos.allMemo.filter(memo => memo.uuid == myMemo.uuid));
      memos.setAllMemo(memos.allMemo.map(memo=>{
        if(memo.uuid==myMemo.uuid)
          return myMemo
        else
          return memo
        })
      )
      console.log(memos.allMemo);
    }else{  
      memos.setAllMemo([...memos.allMemo, myMemo])
      console.log("EEEEEEEEEEEEEE");
    }

    if(onComplete)
      onComplete()
    
    console.log("setEditable(false)")
  }

  const handleStartMemoEdit = (e) => {
    setEditable(true)
    console.log("setEditable(true)")
  }

  const handleShowTagSelector = (e) => {
    setShowTagSelector(!showTagSelector)
  }

  const handleToggleTag = (tag) => {
    setMyMemo(prevMemo => {
      const tags = prevMemo.tags.some(t => t.name === tag.name)
        ? prevMemo.tags.filter(t => t.name !== tag.name)
        : [...prevMemo.tags, tag];
      return {
        ...prevMemo,
        tags,
      };
    });
  };

  const handleDelete = () => {
    memos.setAllMemo(m => m.filter(memo=>memo.uuid != myMemo.uuid))

  }

  const handlePinMemo = () => {
    memos.setAllMemo(prevAllMemo => 
      prevAllMemo.map(memo =>
        memo.uuid === myMemo.uuid ? {...memo, pin: !memo.pin} : memo
      )
    )
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tagSelectorRef.current && !tagSelectorRef.current.contains(event.target)) {
        setShowTagSelector(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [tagSelectorRef])

  return (
    <>
      {editable ?
        <div className="w-full border-[1.5px] rounded-lg p-4 flex flex-col gap-3 relative">
          <div className='flex flex-col gap-1'>
            <input
              type="text"
              className="text-lg font-semibold"
              value={myMemo.content.title}
              onChange={handleUpdateContentTitle} />
            <textarea
              type="text"
              className="text-base text-wrap whitespace-pre-wrap resize-none"
              value={myMemo.content.subhead}
              onChange={handleUpdateContentSubhead} />
          </div>
          {myMemo.tags.length>0 && <div className="flex gap-2">
            {myMemo.tags.map((tag) => (
              <Tag small color={tag.color} key={tag.name}>{tag.name}</Tag>
            ))}
          </div>}
          <div className="flex -m-2 gap-1 justify-end relative">
            <IconButton 
              icon="material-symbols:delete-outline-rounded"/>
            <IconButton 
              icon="material-symbols:label-outline-rounded"
              onClick={handleShowTagSelector}/>
            <IconButton 
              icon="ic:round-check" 
              onClick={handleSubbmitMemoEdit}/>
            {showTagSelector && <TagSelector tags={myMemo.tags} ref={tagSelectorRef} onToggleTag={handleToggleTag} />}
          </div>
          <div className="group/pinMemoIcon rounded-full absolute right-[8px] top-[8px]">
            <IconButton 
              icon="ri:pushpin-2-line" 
              className={`${myMemo.pin?"visable": "invisible"} group-hover/pinMemoIcon:visible`}
              onClick={handlePinMemo}
            />
          </div>
        </div>
        :
        <div ref={dragRef} className="w-full border-[1.5px] rounded-lg p-4 flex flex-col gap-3 relative">
          <div className='flex flex-col gap-1'>
            <p className="text-lg font-semibold">{myMemo.content.title}</p>
            <p className=" text-base text-wrap whitespace-pre-wrap">{myMemo.content.subhead}</p>
          </div>
          {myMemo.tags.length>0 && <div className="flex gap-2">
            {myMemo.tags.map((tag) => (
              <Tag small color={tag.color} key={tag.name}>{tag.name}</Tag>
            ))}
          </div>}
          <div className="flex -m-2 gap-1 justify-end group/toolbar">
            <IconButton 
              icon="material-symbols:delete-outline-rounded"
              className="invisible group-hover/toolbar:visible"
              onClick={handleDelete} />
            <IconButton 
              icon="material-symbols:edit-outline" 
              className="invisible group-hover/toolbar:visible" 
              onClick={handleStartMemoEdit}/>
          </div>
          <div className="group/pinMemoIcon rounded-full absolute right-[8px] top-[8px]">
            <IconButton 
              icon="ri:pushpin-2-line" 
              className={`${myMemo.pin?"visable": "invisible"} group-hover/pinMemoIcon:visible`}
              onClick={handlePinMemo}
            />
          </div>
        </div>
      }
    </>
  )
}
