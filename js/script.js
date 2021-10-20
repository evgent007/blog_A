window.addEventListener('DOMContentLoaded', () => {
  'use strict'

  class Article {
    constructor(id, src, href, alt, tema = 'БЕЗ ТЕМЫ', title, data, text = ' ') {
      this.id = id
      this.src = src
      this.href = href
      this.alt = alt
      this.tema = tema
      this.title = title
      this.data = data
      this.text = text
      this.parent = document.querySelector('.row.fh5co-post-entry')
      this.classes = ['col-lg-4', 'col-md-4', 'col-sm-4', 'col-xs-6', 'col-xxs-12', 'animate-box']
    }

    render() {
      let elem = document.createElement('article')
      this.classes.forEach(c => elem.classList.add(c))
      elem.innerHTML = `
			<figure>
				<a href="#"><img class="img-responsive btn1" id-atr="${this.id}" src=${this.src} alt=${this.alt} ></a>
			</figure>
			<span class="fh4co-meta"><a class="btn1" id-atr="${this.id}" href=${this.href}>${this.tema}</a></span>
			<h2 class="fh5co-article-title"><a class="btn1" id-atr="${this.id}" href=${this.href}>${this.title}</a></h2>
			<span class="fh5co-meta fh5co-date">${this.data}</span>
			`

      this.parent.append(elem)
    }
  }

  const getRes = async url => {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`Нет ответа с${url} status: ${res.status}`)
    }
    return await res.json()
  }

  getRes('db.json').then(dat => {
    dat['article'].forEach(({ id, src, href, alt, tema, title, data, text }) => {
      new Article(id, src, href, alt, tema, title, data, text).render()
    })
  })

  class Single {
    constructor(id, src, href, alt, tema = 'БЕЗ ТЕМЫ', title, data, text = ' ') {
      this.id = id
      this.src = src
      this.href = href
      this.alt = alt
      this.tema = tema
      this.title = title
      this.data = data
      this.text = text
      this.parent = document.querySelector('.row.fh5co-post-entry')
      this.classes = ['col-lg-12', 'col-lg-offset-0', 'col-md-12', 'col-md-offset-0', 'col-sm-12', 'col-sm-offset-0', 'col-xs-12', 'col-xs-offset-0']
    }

    render() {
      // document.querySelector("article").remove();
      let elem = document.createElement('article')
      this.classes.forEach(c => elem.classList.add(c))
      elem.innerHTML = `
            <h2 class="fh5co-article-title animate-box"><a href="index.html">${this.title}</a></h2>
            <figure class="animate-box col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-10 col-sm-offset-1">
                <img src=${this.src} alt="Image" class="img-responsive">
            </figure>
            <div class="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
                <span class="fh7co-meta animate-box">${this.tema}</span>
            </div>
            <div class="col-lg-12 col-lg-offset-0 col-md-12 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-centr content-article">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 cp-r animate-box">
                        <p style = "white-space: pre-line;">${this.text}</p>
                        <span class="fh5co-meta fh5co-date animate-box">${this.data}</span>
                    </div>
                </div>
            </div>
            `

      this.parent.append(elem)
    }
  }

  const p = document.querySelector('#con1')
  p.addEventListener('click', e => {
    if (e.target.classList.contains('btn1')) {
      getRes('db.json').then(dat => {
        const ida = e.target.getAttribute('id-atr')

        dat['article'].forEach(o => {
          document.querySelector('article').remove()

          if (o.id == ida) {
            new Single(o.id, o.src, o.href, o.alt, o.tema, o.title, o.data, o.text).render()
          }
        })
      })
    } else {
    }
  })

  // new Article(
  //     "images/les1.jpg",
  //     "single.html",
  //     "Image",
  //     "tema",
  //     "СТАТЬЯ 1",
  //     "14.09.2021",
  // ).render();

  // new Article(
  //     "images/les2.jpg",
  //     "single.html",
  //     "Image",
  //     "тема",
  //     "СТАТЬЯ 2",
  //     "14.09.2021",
  // ).render();

  // new Article(
  //     "images/les3.jpg",
  //     "single.html",
  //     "Image",
  //     "тема",
  //     "СТАТЬЯ 3",
  //     "14.09.2021",
  // ).render();
})
