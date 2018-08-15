// Class simples
class TodoList {
    constructor() {
        this.todos = []
    }

    addTodo() {
        this.todos.push('Novo todo')
        console.log(this.todos)
    }
}

const MinhaLista1 = new TodoList()

// Class extends
class List {
    constructor() {
        this.data = []
    }

    add(data) {
        this.data.push(data)
        console.log(this.data)
    }
}

class TodoList2 extends List {
    constructor() {
        super() // Herança
        this.usuario = 'Douglas'
    }

    mostraUsuario() {
        console.log(this.usuario)
    }
}

const MinhaLista2 = new TodoList2()

MinhaLista2.mostraUsuario()

// Class static
class Matematica {
    static soma(a, b) {
        return a + b
    }
}

console.log(Matematica.soma(1, 2))
