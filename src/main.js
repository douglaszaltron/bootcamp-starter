const aguarda = () => new Promise((resolve) => {
  setTimeout(() => { resolve('OK') }, 2000)
})

const executa = async () => {
  console.log(await aguarda())
}

executa()
