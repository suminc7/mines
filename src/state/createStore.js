import { createStore as reduxCreateStore } from "redux"

const offsetX = 8
const offsetY = 8
const size = 23
const numOfBlock = offsetX * offsetY



const { blocks, mines, selectedMines } = createAll()


const reducer = (state, action) => {
  if (action.type === `RESTART`) {
    const { blocks, mines, selectedMines } = createAll()
    return {
      ...state,
      blocks,
      mines,
      selectedMines
    }
  }else if (action.type === `SET_MINE`) {
    let blocks = [ ...state.blocks ]
    blocks[action.index].isMine = !blocks[action.index].isMine
    const selectedMines = blocks.filter(o => o.isMine)
    return {
      ...state,
      blocks,
      selectedMines
    }
  }else if (action.type === `SEARCH_BLOCK`) {
    let blocks = [ ...state.blocks ]
    const { index } = action
    if(blocks[index].type === 10){
      blocks.map(o => o.isOpen = true)
    }else{
      searchBlock(blocks, index, index)
    }
    return {
      ...state,
      blocks
    }
  }
  return state
}


const initialState = {
  blocks,
  mines,
  selectedMines
}

function createAll() {
  const mines = []
  const blocks = []
  const selectedMines = []

  for (let i = 0; i < numOfBlock; i++) {
    const x = i % offsetX
    const y = Math.floor(i / offsetY)
    const style = { left: x * size, top: y * size }
    const mine = Math.random() > 0.9 ? 10 : 0
    if(mine === 10) mines.push(i)
    blocks.push({ starter: i, isMine: false, isOpen: false, x, y, style, index: i, type: mine, len: 0 })
  }
  for (let k = 0; k < numOfBlock; k++) {
    const arr = []
    checkInBound(blocks, k, (mBlock, index) => {
      if(mBlock.type === 10) arr.push(index)
    })
    blocks[k].len = arr.length
  }
  return {
    blocks,
    mines,
    selectedMines
  }
}

function searchBlock(blocks, index, starter) {
  // 9 = 0,1,2   8,9,10   16,17,18
  const block = blocks[index]
  block.isOpen = true
  block.starter = starter

  blocks = checkInBound(blocks, index, (mBlock, index) => {
    if(mBlock && block.len === 0 && mBlock.starter !== starter){
      mBlock.isOpen = true
      mBlock.starter = starter
      searchBlock(blocks, index, starter)
    }
  })
  return blocks
}

function checkInBound(blocks, index, callback) {
  const block = blocks[index]
  for (let i = 0; i < 3; i++) {
    const n = (i-1) * offsetX
    for (let j = 0; j < 3; j++) {
      const m = n + (j-1) + index
      const mBlock = blocks[m]
      if(mBlock && block.x - 1 <= mBlock.x && mBlock.x <= block.x + 1 && block.y - 1 <= mBlock.y && mBlock.y <= block.y + 1){
        callback.call(null, mBlock, m)
      }
    }
  }
  return block
}


const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
