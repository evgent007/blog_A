window.addEventListener("DOMContentLoaded", () => {

    'use strict';

    class Article {
        constructor(src, href, alt, tema = 'БЕЗ ТЕМЫ', title, data, text = " ") {
            this.src = src;
            this.href = href;
            this.alt = alt;
            this.tema = tema;
            this.title = title;
            this.data = data;
            this.text = text;
            this.parent = document.querySelector(".row.fh5co-post-entry");
            this.classes = ["col-lg-4", "col-md-3", "col-sm-3", "col-xs-6", "col-xxs-12", "animate-box"];
        }

        render() {
            let elem = document.createElement('article');
            this.classes.forEach(c => elem.classList.add(c));
            elem.innerHTML = `
			<figure>
				<a href=${this.href}><img src=${this.src} alt=${this.alt} class="img-responsive"></a>
			</figure>
			<span class="fh4co-meta"><a href=${this.href}>${this.tema}</a></span>
			<h2 class="fh5co-article-title"><a href=${this.href}>${this.title}</a></h2>
			<span class="fh5co-meta fh5co-date">${this.data}</span>
			<div class="clearfix visible-xs-block"></div>
			`;

            this.parent.append(elem);
        }
    };


    const getRes = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Нет ответа с${url} status: ${res.status}`);
        }
        return await res.json();
    };

    getRes("db.json")
        .then(dat => {
            dat["article"].forEach(({ src, href, alt, tema, title, data, text }) => {
                new Article(src, href, alt, tema, title, data, text).render();
            });
        });
});