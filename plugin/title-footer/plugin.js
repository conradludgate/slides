/********************************************************
*                                                       *
* Javascript for the Title-Footer plugin for Reveal.js  *
*                                                       *
* Author: Igor Leturia                                  *
*                                                       *
* License: GPL v3                                       *
* http://www.gnu.org/copyleft/gpl.html        *
*                                                       *
********************************************************/

/* Title-Footer object and properties declaration with default values */

const Plugin = {
	id: 'title-footer',
	init: (deck) => {
		const link = document.createElement("link");
		link.href = "/plugin/title-footer/title-footer.css";
		link.type = "text/css";
		link.rel = "stylesheet";
		document.getElementsByTagName("head")[0].appendChild(link);

		const background = "rgba(0, 0, 0, 0.1)";

		let title_footer = document.createElement('footer');
		title_footer.setAttribute('id', 'title-footer');
		title_footer.hidden = true;

		const title_footer_p = document.createElement('p');
		title_footer.appendChild(title_footer_p);

		const div_class_reveal = document.querySelector('.reveal');
		div_class_reveal.appendChild(title_footer);

		title_footer.classList.add("no-title-footer")

		deck.on( 'slidechanged', event => {
			const title_span = event.currentSlide.querySelector('span.title');
			if (!title_span) {
				// title_footer.style.display = 'none';
				title_footer.classList.add("no-title-footer")
				return;
			}
			title_footer_p.innerText = title_span.innerText;
			title_footer.classList.remove("no-title-footer")
		});
	}
}

export default () => Plugin;
