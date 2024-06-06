import { useState, createContext, useContext, useEffect  } from 'react'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Tag, {TagSelector} from "../src/components/Tag.jsx"
import Category from "../src/components/Category.jsx"
import { CATEGORY, TAGS, testData } from "../src/assets/Data.js"

export const MemoContent = createContext()

function App() {

  const storgedMemo = localStorage.getItem("allMemo")
  const [allMemo, setAllMemo] = useState(storgedMemo==null?testData:JSON.parse(storgedMemo))
  
  useEffect(() => {
    localStorage.setItem("allMemo", JSON.stringify(allMemo))
  }, [allMemo])
  console.log(allMemo);

  const [filteredMemo, setFilteredMemo] = useState(allMemo)
  const [searchText, setSearchText] = useState("")
  const onChangeSearchText = (e) => {
    setSearchText(e.target.value)
  }
  const [searchTag, setSearchTag] = useState([])
  const onChangeSearchTag = (tag) => {
    const tags = searchTag.some(t => t.name === tag.name)
      ? searchTag.filter(t => t.name !== tag.name)
      : [...searchTag, tag];
    console.log("Select Tags: ", tags);
    setSearchTag(tags)
  }

  useEffect(() => {
    if(searchText == "" && searchTag.length === 0) {
      setFilteredMemo(allMemo)
    } else {
      const searchTagNames = searchTag.map(tag => tag.name);
      setFilteredMemo(allMemo.filter(fMemo => {
        const conditionText = Object.values(fMemo.content).toString().toLowerCase().includes(searchText.toLowerCase()) || searchText == "" 
        const conditionTag = searchTagNames.every(tagName => fMemo.tags.some(t => t.name === tagName));
        return conditionText && conditionTag;
      }));
    }
  }, [allMemo, searchText, searchTag])
  


  return (
    <MemoContent.Provider value={{allMemo, setAllMemo}}>
      <DndProvider backend={HTML5Backend}>
        <div className="flex justify-center">
          <div className="container max-w-5xl p-8 gap-4 flex flex-col">
            <div className="flex gap-2">
              <input type="text" 
                className=" w-full h-12 px-4 border-[1.5px] rounded-lg"
                onChange={onChangeSearchText}
                value={searchText}
              />
              <button className="bg-slate-200 w-20 px-4 py-2 rounded-lg">搜尋</button>
            </div>
            <div className="flex gap-2">
              {Object.values(TAGS).map(tag =>
                <Tag checkable tag={tag} color={tag.color} onChecked={onChangeSearchTag} key={tag.name}>{tag.name}</Tag>
              )}
              <div className="flex rounded-lg px-3 py-1 select-none text-lg font-black" >
                +
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <Category categoryTitle="TODO" memos={filteredMemo.filter((memo) => memo.category == CATEGORY.TODO)} />
              <Category categoryTitle="Doing" memos={filteredMemo.filter((memo) => memo.category == CATEGORY.Doing)} />
              <Category categoryTitle="Finish" memos={filteredMemo.filter((memo) => memo.category == CATEGORY.Finish)} />
              {/* <TagSelector tags={Object.values(TAGS)}/> */}
            </div>
          </div>
        </div>
      </DndProvider>
    </MemoContent.Provider>
  )
}

export default App
