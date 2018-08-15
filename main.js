let promise = new Promise((resolve, reject) => {

  /*
  const FLAG = 5

  if (FLAG == 5)
    resolve('Tudo pronto!')
  else
    reject(Error('Algo deu errado!'))
  */

  // setTimeout(() => resolve('Tudo pronto!'), 3000)

  setTimeout(resolve, 4000, 'Tudo pronto')

})

promise.then(response => console.log(response)).catch(reason => console.log(reason))