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
    name: "tag1",
    color: "bg-red-200"
  },
  "tag2": {
    name: "tag2",
    color: "bg-orange-200"
  },
  "tag3": {
    name: "tag3",
    color: "bg-emerald-200"
  },
  "tag4": {
    name: "tag4",
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
    content: "Test Data 1",
    category: CATEGORY.TODO,
    tags: [TAGS.tag1, TAGS.tag2]
  },
  {
    content: "HIHI",
    category: CATEGORY.Doing,
    tags: [TAGS.tag3, TAGS.tag2]
  },
  {
    content: "Hello",
    category: CATEGORY.Finish,
    tags: [TAGS.tag4, TAGS.tag2, TAGS.tag3]
  },
]