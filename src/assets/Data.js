// const TAG = {
//   tag1: "tag1",
//   tag2: "tag2",
//   tag3: "tag3",
//   tag4: "tag4",
// };

// const TAG_COLOR = {
//   tag1: "bg-red-200",
//   tag2: "bg-orange-200",
//   tag3: "bg-emerald-200",
//   tag4: "bg-sky-200",
// };

export const TAGS = {
  "tag1": {
    name: "學習",
    color: "bg-red-200"
  },
  "tag2": {
    name: "工作",
    color: "bg-orange-200"
  },
  "tag3": {
    name: "社團",
    color: "bg-emerald-200"
  },
  "tag4": {
    name: "代辦",
    color: "bg-sky-200"
  }
}

export const CATEGORY = {
  TODO: "TODO",
  Doing: "Doing",
  Finish: "Finish"
}

export const testData = [
  {
    content: {
      title: "✏️ 基本筆記編輯",
      subhead: "將滑鼠移到筆記下方，可進行編輯刪除操作\n移到筆記右上方可釘選。"
    },
    category: CATEGORY.TODO,
    tags: [TAGS.tag1],
    pin: true,
    uuid: "0736c6c2-9fd6-433f-8196-c96ac14a7cf2"
  },
  {
    content: {
      title: "📄 新增筆記",
      subhead: "將滑鼠移到欄位最下方以新增筆記。"
    },
    category: CATEGORY.TODO,
    tags: [TAGS.tag1],
    pin: false,
    uuid: "d8ecc44c-deab-43eb-bd62-0404d0cd8d95"
  },
  {
    content: {
      title: "🔍 搜尋筆記",
      subhead: "利用上方的搜尋欄位以及Tag選擇，可以快速尋找筆記。"
    },
    category: CATEGORY.Finish,
    tags: [TAGS.tag1],
    pin: false,
    uuid: "5308ca13-c71b-4c4d-b7ad-8e46dc511673"
  },
  {
    content: {
      title: "🤚 拖曳筆記",
      subhead: "可以將筆記拖曳到其他欄位。"
    },
    category: CATEGORY.Doing,
    tags: [TAGS.tag1],
    pin: false,
    uuid: "c69c1df6-4a5e-416e-bcb5-acf7f13d42f0"
  },
  {
    content: {
      title: "6/13 網頁報告",
      subhead: "就算畢業了還是要報告的可憐大學生 (›´ω`‹ )"
    },
    category: CATEGORY.Doing,
    tags: [TAGS.tag1, TAGS.tag4],
    pin: false,
    uuid: "dde029c7-6508-4bf2-8f59-afb677337e9f"
  },
]