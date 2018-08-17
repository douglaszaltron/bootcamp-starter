class App {
  constructor () {
    this.repositories = []

    /* global document */
    this.formEl = document.getElementById('repo-form')
    this.registerHandlers()
  }

  registerHandlers () {
    this.formEl.onsubmit = event => this.addRepository(event)
  }

  addRepository (event) {
    event.preventDefault()

    this.repositories.push({
      name: 'Adonis Framework',
      description: 'NodeJs Web Application Framework. Makes it easy for you to write webapps with less code.',
      avatar_url: 'https://avatars2.githubusercontent.com/u/13810373?s=200&v=4',
      html_url: 'https://github.com/adonisjs/adonis-framework',
    })

    console.log(this.repositories)
  }
}

/* eslint no-unused-vars: 0 */
const app = new App()
