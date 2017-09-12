const countWords = (str) => {
  if (str === '') {
    return {}
  }
  return str.split(' ').reduce ((words, word) => {
    if (word in words) {
      words[word]++
    } else {
      words[word] = 1
    }
    return words
  }, {})
}

console.log(countWords('ask a bunch get a bunch'))
console.log(countWords(''))
