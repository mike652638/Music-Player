import storage from 'good-storage'

const SEARCH_KEY = '__search__'
const SEARCH_MAX_LENGTH = 15

function insertArray(arr, val, compare, maxlen) {
  const index = arr.findIndex(compare)
  if (!index) {
    return
  }
  if (index > 0) {
    arr.splice(index, 1)
  }
  arr.unshift(val) // 向数组前插
  if (maxlen && arr.length > maxlen) {
    arr.pop() //删掉数据最后一个
  }
}
export function saveSearch(query) {
  let searchs = storage.get(SEARCH_KEY, [])
  console.log(searchs)
  insertArray(
    searchs,
    query,
    item => {
      return (item === query)
    },
    SEARCH_MAX_LENGTH
  )
  storage.set(SEARCH_KEY, searchs)
  return searchs
}
export function loadSearch() {
  return storage.get(SEARCH_KEY, [])
}