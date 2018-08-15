const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newArr = arr.map((item, index) => item + index)

console.log(newArr)

const sum = arr.reduce((total, next) => total + next)

console.log(sum)

const filter = arr.filter(item => item % 2 === 0)

console.log(filter)

const find = arr.find(item => item === 1)

console.log(find)
