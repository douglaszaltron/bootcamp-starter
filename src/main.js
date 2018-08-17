import api from './api'

class App {
  constructor () {
    this.repositories = []

    /* global document */
    this.formEl = document.getElementById('repo-form')
    this.inputEl = document.querySelector('input[name=repository]')
    this.listEl = document.getElementById('repo-list')
    this.registerHandlers()
  }

  registerHandlers () {
    this.formEl.onsubmit = event => this.addRepository(event)
  }

  setLoading (loading = true) {
    if (loading === true) {
      const loadingEl = document.createElement('span')
      loadingEl.appendChild(document.createTextNode('Carregando...'))
      loadingEl.setAttribute('id', 'loading')
      this.formEl.appendChild(loadingEl)
    } else {
      document.getElementById('loading').remove()
    }
  }

  async addRepository (event) {
    event.preventDefault()

    const repoInput = this.inputEl.value

    this.setLoading()

    try {
      const response = await api.get(`/repos/${repoInput}`)

      const {
        name,
        description,
        html_url,
        owner: { avatar_url },
      } = response.data

      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url,
      })

      this.render()
    } catch (error) {
      console.log(`Reason: ${error}`)
    }

    this.setLoading(false)
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
      linkEl.setAttribute('href', repo.html_url)
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
