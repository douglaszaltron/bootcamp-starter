class App {
  constructor () {
    this.repositories = []

    /* global document */
    this.formEl = document.getElementById('repo-form')
    this.listEl = document.getElementById('repo-list')
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

    this.render()
  }

  render () {
    this.listEl.innerHTML = ''

    this.repositories.forEach((repo) => {
      const imgEl = document.createElement('img')
      imgEl.setAttribute('src', repo.avatar_url)

      const titleEl = document.createElement('strong')
      titleEl.appendChild(document.createTextNode(repo.name))

      const descriptionEl = document.createElement('p')
      descriptionEl.appendChild(document.createTextNode(repo.description))

      const linkEl = document.createElement('a')
      linkEl.setAttribute('target', '_blank')
      linkEl.appendChild(document.createTextNode('Acessar'))

      const listItemEl = document.createElement('li')
      listItemEl.appendChild(imgEl)
      listItemEl.appendChild(titleEl)
      listItemEl.appendChild(descriptionEl)
      listItemEl.appendChild(linkEl)

      this.listEl.appendChild(listItemEl)
    })
  }
}

/* eslint no-unused-vars: 0 */
const app = new App()
