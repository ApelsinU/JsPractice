[https://youtu.be/x-EZy6gu_38](https://youtu.be/x-EZy6gu_38)

![концепты111.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e3c927f9-7c2a-4eaf-a891-40fbc8e4fdf7/концепты111.png)

## Строки и массивы

### Уникальность всех символов в строке

Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: `‘a’` и `‘A’` разные символы.

**Input**: String

**Output**: Boolean

```jsx
function isUnique(string) {
	// todo
}

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false
```

- Решение

    ```jsx
    function isUnique(str) {
      // for (let i = 0; i < str.length; i++) {
      //   if (str.lastIndexOf(str[i]) !== i) {
      //     return false
      //   }
      // }
      // return true
      // const chars = new Set()
      //
      // for (let i = 0; i < str.length; i++) {
      //   const current = str[i]
      //
      //   if (chars.has(current)) {
      //     return false
      //   }
      //
      //   chars.add(current)
      // }
      // return true
      return new Set(str).size === str.length
    }
    ```

- Дополнительный материал

  [Урок 13. JavaScript. Все о Map, Set, WeakMap, WeakSet с примерами](https://youtu.be/mbcP3Oc0PjU)


### Плоский массив

Напишите функцию, принимающая массив с вложенными массивами и распакуйте в результирующий плоский массов. В результате должны получить новый одномерный массив.

**Input**: Array

**Output**: Array

```jsx
function flatten(array) {
  // todo
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]
```

- Решение

    ```jsx
    function flatten(array) {
      const res = []
    
      for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          const flat = flatten(array[i])
          for (let j = 0; j < flat.length; j++) {
            res.push(flat[j])
          }
        } else {
          res.push(array[i])
        }
      }
    
      return res
    }
    ```

- Дополнительный материал

  [Рекурсия в JavaScript за МИНУТУ! #Shorts](https://youtube.com/shorts/yVy7vHS6BJU?feature=share)


### Удаление всех повторяющихся значений в строке

Напишите функцию, которая принимает строку и возвращает новую, в которой все дублирующиеся символы будут удалены.

**Input**: String

**Output**: String

```jsx
function removeDupes(str) {
	 // todo 
}

console.log(removeDupes('abcd')) // -> 'abcd'
console.log(removeDupes('aabbccdd')) // -> 'abcd'
console.log(removeDupes('abcddbca')) // -> 'abcd'
console.log(removeDupes('abababcdcdcd')) // -> 'abcd'
```

- Решение

    ```jsx
    function removeDupes(str) {
      // const chars = {}
      // const res = []
    
      // for (let i = 0; i < str.length; i++) {
        // if (!chars[str[i]]) {
          // chars[str[i]] = true
          // res.push(str[i])
        // }
      // }
    
      // return res.join('')
    
      return Array.from(new Set(str)).join('')
    }
    ```

  ### 


### Какая строка встречается чаще всего

Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве. Если таких строк несколько, то нужно вернуть первую, идя слева на право.

**Input**: String[]

**Output**: String

```jsx
function highestFrequency(array) {
	 // todo
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ])) // -> ghi
```

- Решение

    ```jsx
    function highestFrequency(array) {
      const map = {}
      let maxFreq = 0
      let maxFreqStr = array[0]
    
      for (let i = 0; i < array.length; i++) {
        const current = array[i]
    
        if (map[current]) {
          map[current]++
        } else {
          map[current] = 1
        }
    
        if (map[current] > maxFreq) {
          maxFreq = map[current]
          maxFreqStr = current
        }
      }
    
      return maxFreqStr
    }
    ```


### Повернута ли строка?

Напишите функцию, которая принимает 2 строки. Верните `true` если строки являются перевернутым вариантом друг друга (см. пример). Иначе верните `false`.

**Input**: String, String

**Output**: Boolean

```jsx
function isStringRotated(source, test) {
  // todo
}

console.log(isStringRotated('javascript', 'scriptjava')) // -> true
console.log(isStringRotated('javascript', 'iptjavascr')) // -> true
console.log(isStringRotated('javascript', 'java')) // -> false
```

- Решение

    ```jsx
    function isStringRotated(source, test) {
      // if (source.length !== test.length) {
      //   return false
      // }
      //
      // for (let i = 0; i < source.length; i++) {
      //   const rotate = source.slice(i, source.length) + source.slice(0, i)
      //
      //   if (rotate === test) {
      //     return true
      //   }
      // }
      //
      // return false
      return source.length === test.length && (source + source).includes(test)
    }
    ```


### Является ли массив подмножеством другого массива

Напишите функцию, которая проверяет, является ли второй массив подмножеством первого. То есть есть ли элементы второго массива в первом.

**Input**: Number[] & String[], Number[] & String[]

**Output**: Boolean

```jsx
function arraySubset(source, subset) {
  // todo
}

console.log(arraySubset([2, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])) // -> false
console.log(arraySubset([1, 2], [1, 2, 3])) // -> false
```

- Решение

    ```jsx
    function arraySubset(source, subset) {
      if (source.length < subset.length) {
        return false
      }
    
      for (let i = 0; i < subset.length; i++) {
        const index = source.indexOf(subset[i])
        if (index === -1) {
          return false
        }
        delete source[index]
      }
      return true
    }
    ```


### Анаграммы

Напишите функцию, которая проверяет, являются ли все элементы в массиве анаграммами друг друга.

**Input**: String[]

**Output**: Boolean

```jsx
function allAnagrams(array) {
  // todo
}

console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) // false
```

- Решение

    ```jsx
    function allAnagrams(array) {
      const sorted = array.map(str => str.split('').sort().join(''))
    
      for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] !== sorted[0]) {
          return false
        }
      }
      return true
    }
    
    console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
    console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) // false
    ```

- Дополнительный материал

  [Урок 12. JavaScript. Методы массивов (forEach, map, filter, reduce, find, findIndex). Js Массивы.](https://youtu.be/nEabP9CYCAQ)


### Перевернуть матрицу 3х3

Напишите функцию, которая принимает матрицу 3х3 и переворачивает на 90 градусов по часовой стрелке.

**Дополнительно**: Напишите еще 2 функции, которые переворачивают матрицу на 180 и 270 градусов.

```
[1, 2, 3]    [7, 4, 1]
[4, 5, 6] -> [8, 5, 2]  
[7, 8, 9]    [9, 6, 3]   
```

**Input**: Number[][]

**Output**: Number[][]

```jsx
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function rotate(source) {
  // todo
}

console.log(rotate(matrix))
```

- Решение

    ```jsx
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
    
    function rotate(source) {
      const newMatrix = source[0].map(() => [])
    
      for (let i = 0; i < source.length; i++) {
        for (let j = 0; j < source[0].length; j++) {
          newMatrix[j][source.length - 1 - i] = source[i][j]
        }
      }
    
      return newMatrix
    }
    
    function rotate180(source) {
      return rotate(rotate(source))
    }
    
    function rotate270(source) {
      return rotate180(rotate(source))
    }
    ```


## Алгоритмы

### Простой поиск

Напишите функцию, которая принимает отсортированный массив с числами и число. Необходимо вернуть индекс числа, если оно есть в массиве. Иначе вернуть `-1`.

**Input**: Number[], Number

**Output**: Number

```jsx
function search(array, target) {
  // todo
}

console.log(search([1, 3, 6, 13, 17], 13)) // -> 3
console.log(search([1, 3, 6, 13, 17], 12)) // -> -1
```

- Решение

    ```jsx
    // Time: O(n)
    function search(array, target) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
          return i
        }
      }
      return -1
    }
    
    // Time: O(log(n))
    function binary(array, target) {
      let start = 0
      let end = array.length - 1
    
      if (target < array[start] || target > array[end]) {
        return -1
      }
    
      while (true) {
        if (target === array[start]) {
          return start
        }
    
        if (target === array[end]) {
          return end
        }
    
        if (end - start <= 1) {
          return -1
        }
    
        const middle = Math.floor((start + end) / 2)
    
        if (target > array[middle]) {
          start = middle + 1
        } else if (target < array[middle]) {
          end = middle - 1
        } else {
          return middle
        }
      }
    }
    ```


### Сбалансированные скобки

Напишите функцию, которая проверит строку на сбалансированность скобок: `{}, (), []`. Вернуть `true` если они сбалансированы, иначе `false`.

**Input**: String

**Output**: Boolean

```jsx
function isBalanced(string) {
  // todo
}

console.log(isBalanced('(x + y) - (4)')) // -> true
console.log(isBalanced('(((10 ) ()) ((?)(:)))')) // -> true
console.log(isBalanced('[{()}]')) // -> true
console.log(isBalanced('(50)(')) // -> false
console.log(isBalanced('[{]}')) // -> false
```

- Решение

    ```jsx
    function isBalanced(string) {
      const start = '({['
      const end = ']})'
    
      const map = {
        '}': '{',
        ')': '(',
        ']': '['
      }
    
      const queue = []
    
      for (let i = 0; i < string.length; i++) {
        const char = string[i]
    
        if (start.includes(char)) {
          queue.push(char)
        } else if (end.includes(char)) {
          const last = queue.pop()
    
          if (map[char] !== last) {
            return false
          }
        }
      }
    
      return !queue.length
    }
    ```


### Очередь с О(1) сложностью операций

Создайте очередь, в которой буду реализованы операции на добавление элементов в конец очереди, удаление первого элемента и вычисление размера очереди с сложностью алгоритма `О(1)` .

```jsx
class Queue {
    constructor() {
        // todo
    }
    
    enqueue(item) {
        // todo: добавить элемент в конец очереди
    }
  
    dequeue() {
        // todo: удалить первый элемент из очереди
    }
  
    get size() {
        // todo: возвращает размер списка
				// нельзя использовать геттер
    }
}
```

- Дополнительный материал

  [Структуры данных в JavaScript. Пишем свой LinkedList](https://youtu.be/dFwNSyVC_5Y)

- Решение - LinkedList

    ```jsx
    class LinkedList {
      #length = 0
    
      constructor() {
        this.head = null
        this.tail = null
      }
    
      addToTail(value) {
        const node = {
          value,
          next: null
        }
    
        if (this.#length === 0) {
          this.head = node
          this.tail = node
        } else {
          this.tail = node
        }
    
        this.#length++
      }
    
      removeFromHead() {
        if (this.#length === 0) {
          return
        }
    
        const value = this.head.value
    
        this.head = this.head.next
        this.#length--
    
        return value
      }
    
      size() {
        return this.#length
      }
    }
    
    class Queue extends LinkedList {
      constructor() {
        super()
    
        this.enqueue = this.addToTail
        this.dequeue = this.removeFromHead
      }
    
      get size() {
        return super.size()
      }
    }
    ```

- Решение - HashTable

    ```jsx
    class Queue {
      #storage = {}
      #last = 0
      #first = 0
    
      enqueue(item) {
        this.#storage[this.#last] = item
        this.#last++
      }
    
      dequeue() {
        if (this.size === 0) {
          return
        }
    
        const value = this.#storage[this.#first]
        delete this.#storage[this.#first]
        this.#first++
        return value
      }
    
      get size() {
        return this.#last = this.#first
      }
    }
    ```


## JavaScript

### Deep Equal

Напишите функцию, которая будет проверять на “глубокое” равенство 2 входящих параметра

**Inputs**: Any, Any

**Output**: Boolean

```jsx
function deepEqual(a, b) {
  // todo
}

const source = {a: 1, b: {c: 1}}
const test1 = {a: 1, b: {c: 1}}
const test2 = {a: 1, b: {c: 2}}
console.log(deepEqual(source, test1)) // -> true
console.log(deepEqual(source, test2)) // -> false
console.log(deepEqual(NaN, NaN)) // -> true
console.log(deepEqual('test', 'test!')) // -> false
console.log(deepEqual()) // -> true
```

- Решение

    ```jsx
    function deepEqual(a, b) {
      if (Number.isNaN(a) && Number.isNaN(b)) {
        return true
      }
    
      if (typeof a !== typeof b) {
        return false
      }
    
      if (typeof a !== 'object' || a === null || b === null) {
        return a === b
      }
    
      if (Object.keys(a).length !== Object.keys(b).length) {
        return false
      }
    
      for (const key of Object.keys(a)) {
        if (!deepEqual(a[key], b[key])) {
          return false
        }
      }
    
      return true
    }
    ```


### Последовательность Фибоначчи

<aside>
💡 [Последовательность Фибоначчи](https://ru.wikipedia.org/wiki/%D0%A7%D0%B8%D1%81%D0%BB%D0%B0_%D0%A4%D0%B8%D0%B1%D0%BE%D0%BD%D0%B0%D1%87%D1%87%D0%B8)

</aside>

Напишите функцию, которая будет генерировать последовательность Фиббоначи длинны `n`, которую передали как аргумент.

**Input**: Number

**Output**: Number[]

```jsx
function fibonacci(n) {
  // todo
}

console.log(fibonacci(8)) // -> [1, 1, 2, 3, 5, 8, 13, 21]
```

- Решение

    ```jsx
    function fibonacci(n) {
      const sequence = [1, 1]
    
      if (n < 2) {
        return sequence.slice(0, n)
      }
    
      while (sequence.length < n) {
        const last = sequence[sequence.length - 1]
        const prev = sequence[sequence.length - 2]
        sequence.push(last + prev)
      }
    
      return sequence
    }
    ```


### Своя функция bind

<aside>
💡 [Функция Bind](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

</aside>

Реализуйте функцию `bind`.

**Input**: Object, arguments

**Output**: Function

- Дополнительные материалы

  [Урок 15. JavaScript. Все о Spread и Rest](https://youtu.be/SGeQ-U0G7dE)

  [Урок 2. JavaScript. Что такое контекст this. Как работает call, bind, apply](https://youtu.be/UGapN-hrekw)

  [Как создать свой bind (4 способа + call, apply)](https://youtu.be/fJqYa3BuwaU)

- Решение

    ```jsx
    Function.prototype.myBind = function(context, ...args) {
      return (...rest) => {
        return this.call(context, ...args.concat(rest))
      }
    }
    
    function log(...props) {
      console.log(this.name, this.age, ...props)
    }
    
    const obj = {name: 'Vladilen', age: 28}
    
    log.myBind(obj, 1, 2)()
    ```


### Универсальная сумма

Напишите функцию, которая складывает 2 числа. Работать функция должна как показано в примере ниже:

**Input**: Number, Number

**Output**: Number

```jsx
function add() {
  // todo
}

add(20, 22) // -> 42
add(20)(22) // -> 42
add(20)()(22) // -> 42
add(20)()()()(22) // -> 42
add(20)()()()()()()()()()()()(22) // -> 42
add()(20)(22) // -> 42
add()()()()(20)(22) // -> 42
add()(20)()(22) // -> 42
add()()()()()(20)()()()(22) // -> 42
```

- Решение

    ```jsx
    function add(a, b) {
      if (!a) {
        return add
      }
      if (!b) {
        return function calc(c) {
          if (!c) return calc
          return a + c
        }
      }
    
      return a + b
    }
    ```


### GroupBy

<aside>
💡 [Функция GroupBy](https://lodash.com/docs/4.17.15#groupBy)

</aside>

Напишите функцию `groupBy`.

**Input**: Number[] & String[], Function & String

**Output**: Object

```jsx
function groupBy() {
  // todo
}

groupBy([6.1, 4.2, 6.3], Math.floor) // -> { '4': [4.2], '6': [6.1, 6.3] }
groupBy(['one', 'two', 'three'], 'length') // -> { '3': ['one', 'two'], '5': ['three'] }
```

- Решение

    ```jsx
    function groupBy(array, fn) {
      return array.reduce((res, current) => {
        const key = typeof fn === 'function' ? fn(current) : current[fn]
    
        if (!res[key]) {
          res[key] = []
        }
        res[key].push(current)
    
        return res
      }, {})
    }
    ```


## Для тех, кто хочет работать Frontend-разработчиком

К сожалению, в сфере IT есть вещи, которые очень сложно понять или найти самостоятельно информацию по определенным темам. Поэтому очень важно иметь доступ к такой информации или быть знакомым с человеком, который мог бы объяснить.

В рамках исключения, вы можете получить часть записи с одного из открытых уроков нашего курса “**Junior Frontend Developer**” на тему "**Подготовка к собеседованию**". Провел его Senior Frontend-разработчик Владилен Минин. Но для того, чтобы получить его нужно:

- Зарегистрироваться по ссылке - [https://bit.ly/3raq1zY](https://bit.ly/3raq1zY)
- На указанную почту придет письмо с данными для доступа к материалу. В письме будет содержаться логин, пароль и ссылка для входа
- В личном кабинете появится материал

---

Telegram: [https://t.me/result_school_it](https://t.me/result_school_it)
VK: [https://vk.com/result.school](https://vk.com/result.school)
Instagram: [https://www.instagram.com/result.school.it](https://www.instagram.com/result.school.it)