class Usuario {

  get nome (){
    return this._nome
  }

  set nome(nome) {
    this._nome = nome
  }

}

const usuario = new Usuario()
usuario.nome = 'Douglas'
console.log (`Meu nome é ${usuario.nome}`)