window.addEventListener("DOMContentLoaded", () => {

	'use strict';

	// class Article {
	// 	constructor(src, href, alt, tema = "БЕЗ ТЕМЫ", title, data, text = " ") {
	// 		this.src = src;
	// 		this.href = href;
	// 		this.alt = alt;
	// 		this.tema = tema;
	// 		this.title = title;
	// 		this.data = data;
	// 		this.text = text;
	// 		this.parent = document.querySelector(".row.fh5co-post-entry");
	// 		this.classes = ["col-lg-4", "col-md-3", "col-sm-3", "col-xs-6", "col-xxs-12", "animate-box"];
	// 	}

	// 	render() {
	// 		let elem = document.createElement('article');
	// 		this.classes.forEach(c => elem.classList.add(c));
	// 		elem.innerHTML = `
	// 		<figure>
	// 			<a href=${this.href}><img src=${this.src} alt=${this.alt} class="img-responsive"></a>
	// 		</figure>
	// 		<span class="fh4co-meta"><a href=${this.href}>${this.tema}</a></span>
	// 		<h2 class="fh5co-article-title"><a href=${this.href}>${this.title}</a></h2>
	// 		<span class="fh5co-meta fh5co-date">${this.data}</span>
	// 		<div class="clearfix visible-xs-block"></div>
	// 		`;

	// 		this.parent.append(elem);
	// 	}
	// };


	// // npx json-server db.json

	// const getRes = async (url) => {
	// 	const res = await fetch(url);
	// 	if (!res.ok) {
	// 		throw new Error(`Нет ответа с${url} status: ${res.status}`);
	// 	}
	// 	return await res.json();
	// };

	// getRes("http://localhost:3000/article")
	// 	.then(dat => {
	// 		dat.forEach(o => {
	// 			new Article(o.src, o.href, o.alt, o.tema, o.title, o.data).render();
				
	// 		});
	// 	});

	//----------------------------------------------------------------------------------

	// iPad and iPod detection
	var isiPad = function () {
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function () {
		return (
			(navigator.platform.indexOf("<i></i>Phone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
		);
	};




	// Click outside of offcanvass
	var mobileMenuOutsideClick = function () {

		$(document).click(function (e) {
			var container = $("#fh5co-offcanvas, .js-fh5co-close-offcanvas");
			if (!container.is(e.target) && container.has(e.target).length === 0) {

				if ($('#fh5co-offcanvas').hasClass('animated fadeInLeft')) {

					$('#fh5co-offcanvas').addClass('animated fadeOutLeft');
					setTimeout(function () {
						$('#fh5co-offcanvas').css('display', 'none');
						$('#fh5co-offcanvas').removeClass('animated fadeOutLeft fadeInLeft');
					}, 1000);
					$('.js-fh5co-nav-toggle').removeClass('active');

				}


			}
		});

		$('body').on('click', '.js-fh5co-close-offcanvas', function (event) {


			$('#fh5co-offcanvas').addClass('animated fadeOutLeft');
			setTimeout(function () {
				$('#fh5co-offcanvas').css('display', 'none');
				$('#fh5co-offcanvas').removeClass('animated fadeOutLeft fadeInLeft');
			}, 1000);
			$('.js-fh5co-nav-toggle').removeClass('active');

			event.preventDefault();

		});

	};





	// Burger Menu
	var burgerMenu = function () {

		$('body').on('click', '.js-fh5co-nav-toggle', function (event) {

			var $this = $(this);

			$('#fh5co-offcanvas').css('display', 'block');
			setTimeout(function () {
				$('#fh5co-offcanvas').addClass('animated fadeInLeft');
			}, 100);

			// $('body').toggleClass('fh5co-overflow offcanvas-visible');
			$this.toggleClass('active');
			event.preventDefault();

		});

	};

	var scrolledWindow = function () {

		$(window).scroll(function () {

			var header = $('#fh5co-header'),
				scrlTop = $(this).scrollTop();


			$('#fh5co-home .flexslider .fh5co-overlay').css({
				'opacity': (.5) + (scrlTop / 2000)
			});

			if ($('body').hasClass('offcanvas-visible')) {
				$('body').removeClass('offcanvas-visible');
				$('.js-fh5co-nav-toggle').removeClass('active');
			}

		});

		$(window).resize(function () {
			if ($('body').hasClass('offcanvas-visible')) {
				$('body').removeClass('offcanvas-visible');
				$('.js-fh5co-nav-toggle').removeClass('active');
			}
		});

	};




	// Page Nav
	var clickMenu = function () {
		var topVal = ($(window).width() < 769) ? 0 : 58;

		$(window).resize(function () {
			topVal = ($(window).width() < 769) ? 0 : 58;
		});

		if ($(this).attr('href') != "#") {
			$('#fh5co-main-nav a:not([class="external"]), #fh5co-offcanvas a:not([class="external"])').click(function (event) {
				var section = $(this).data('nav-section');


				if ($('div[data-section="' + section + '"]').length) {

					$('html, body').animate({
						scrollTop: $('div[data-section="' + section + '"]').offset().top - topVal
					}, 500);

				}
				event.preventDefault();

			});
		}


	};


	var contentWayPoint = function () {
		var i = 0;
		$('.animate-box').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						}, k * 200, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '85%' });


	};


	// Document on load.
	$(function () {

		mobileMenuOutsideClick();
		burgerMenu();
		// scrolledWindow();

		// Animations
		contentWayPoint();



	});

});