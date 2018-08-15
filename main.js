const promise = new Promise((resolve, reject) => {
  const FLAG = 5

  if (FLAG === 5) { setTimeout(resolve, 4000, 'Tudo pronto') } else { reject(Error('Algo deu errado!')) }
})

promise.then(response => console.log(response)).catch(reason => console.log(reason))
