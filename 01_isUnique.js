// My Solution
function isUnique(string) {
  let unicArr = []
  let verdict = true

  string.split('').map(s => {
    if (!unicArr.includes(s)) {
      unicArr.push(s)

    } else {
      verdict = false
    }
  })

  return verdict
}

// Best Practice
function isUniqueBest(string) {
  return new Set(string).size === string.length
}

console.log(isUnique('abcdef'), isUniqueBest('abcdef')) // -> true
console.log(isUnique('1234567'), isUniqueBest('1234567')) // -> true
console.log(isUnique('abcABC'), isUniqueBest('abcABC')) // -> true
console.log(isUnique('abcadef'), isUniqueBest('abcadef')) // -> false
