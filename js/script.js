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
            this.classes = ["col-lg-4", "col-md-3", "col-sm-3", "col-xs-6", "col-xxs-12", "animate-box"]
        };

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
            </article>
			
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

    class Single {
        constructor(id, src, href, alt, tema = 'БЕЗ ТЕМЫ', title, data, text = " ") {
            this.id = id;
            this.src = src;
            this.href = href;
            this.alt = alt;
            this.tema = tema;
            this.title = title;
            this.data = data;
            this.text = text;
            this.parent = document.querySelector("row fh5co-post-entry single-entry");
            this.classes = ["col - lg - 8", "col - lg - offset - 2", "col - md - 8", "col - md - offset - 2", "col - sm - 8", "col - sm - offset - 2", "col - xs - 12", "col - xs - offset - 0",]
        }

            render() {
                let elem = document.createElement('article');
                this.classes.forEach(c => elem.classList.add(c));
                elem.innerHTML = `
                    <figure class="animate-box">
                            <img src=${this.src} alt="Image" class="img-responsive">
                    </figure>
                    <span class="fh5co-meta animate-box"><a href=${this.href}>${this.tema}</a></span>
                    <h2 class="fh5co-article-title animate-box"><a href="single.html">${this.title}</a></h2>
                    <span class="fh5co-meta fh5co-date animate-box">${this.data}</span>
                    <div class="col-lg-12 col-lg-offset-0 col-md-12 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-left content-article">
                    <div class="row">
                        <div class="col-lg-12 cp-r animate-box">
                            <p>${this.text}</p>
                        </div>
                    </div>
                    `;
                this.parent.append(elem);
            }
    };

    new Article(
        "images/les1.jpg",
        "single.html",
        "Image",
        "tema",
        "СТАТЬЯ 1",
        "14.09.2021",
    ).render();

    new Article(
        "images/les2.jpg",
        "single.html",
        "Image",
        "тема",
        "СТАТЬЯ 2",
        "14.09.2021",
    ).render();

    new Article(
        "images/les3.jpg",
        "single.html",
        "Image",
        "тема",
        "СТАТЬЯ 3",
        "14.09.2021",
    ).render();
});