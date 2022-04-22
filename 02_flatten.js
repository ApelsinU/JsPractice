// My Solution

function flatten(array) {
  let flattenArr = [];
  flattenArr =  unpackArr(array, flattenArr);

  return flattenArr
}

function unpackArr(array, flattenArr) {
  array.map(el => {
    Array.isArray(el) ? unpackArr(el, flattenArr) : flattenArr.push(el)
  })

  return flattenArr;
}

console.log(flatten([[1], [[2, 3]], [[[[[4]]]]]])) // -> [1, 2, 3, 4]