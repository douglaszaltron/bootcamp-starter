const usuario = {
    nome: 'Douglas',
    idade: '31',
    endereco: {
      cidade: 'Rio verde',
      estado: 'GO',
    },
  }
  
  const { nome, idade, endereco: { cidade } } = usuario
  
  console.log(nome)
  console.log(idade)
  console.log(cidade)
  
  function mostraNome ({ nome, idade }) {
    console.log(nome, idade)
  }
  
  mostraNome(usuario)
  