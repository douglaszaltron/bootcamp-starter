// REST
const usuario = {
    nome: 'Douglas',
    idade: 31,
    empresa: 'Shippack',
}

const { nome, ...resto } = usuario

console.log(nome)
console.log(resto)

const arr = [1, 2, 3, 4]

const [a, b, ...c] = arr

console.log(a)
console.log(b)
console.log(c)

function soma(...params) {
    return params.reduce((total, next) => total + next)
}

function multi(a, b, ...params) {
    return params.reduce((total, next) => (a * b) + next)
}

console.log(soma(1, 2, 3, 4))

console.log(multi(1, 2, 3, 4))

// SPREAD
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, ...arr2]

console.log(arr3)

const usuario1 = {
    nome: 'Douglas',
    idade: 31,
    empresa: 'Shippack',
}

const usuario2 = { ...usuario1, nome: 'Douglas Zaltron' }

console.log(usuario2)
