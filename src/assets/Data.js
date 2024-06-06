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
      title: "Test Title 1",
      subhead: "Test Data 1"
    },
    category: CATEGORY.TODO,
    tags: [TAGS.tag1, TAGS.tag2],
    pin: true,
    uuid: "0736c6c2-9fd6-433f-8196-c96ac14a7cf2"
  },
  {
    content: {
      title: "Test Title 2",
      subhead: "Test Data 2"
    },
    category: CATEGORY.Doing,
    tags: [TAGS.tag3, TAGS.tag2],
    pin: true,
    uuid: "5308ca13-c71b-4c4d-b7ad-8e46dc511673"
  },
  {
    content: {
      title: "Test Title 3",
      subhead: "Test Data 3"
    },
    category: CATEGORY.Finish,
    tags: [TAGS.tag4, TAGS.tag2, TAGS.tag3],
    pin: true,
    uuid: "c69c1df6-4a5e-416e-bcb5-acf7f13d42f0"
  },
]