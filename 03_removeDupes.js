// My solution, Best practice

function removeDupes(str) {
  let set = new Set(str)
  return Array.from(set).join('')
}

console.log(removeDupes('abcd')) // -> 'abcd'
console.log(removeDupes('aabbccdd')) // -> 'abcd'
console.log(removeDupes('abcddbca')) // -> 'abcd'
console.log(removeDupes('abababcdcdcd')) // -> 'abcd'