window.addEventListener("DOMContentLoaded", (e) => {
	const scrollerWrapper = document.querySelectorAll(".scroller-wrapper");
	if (!scrollerWrapper) return;

	scrollerWrapper.forEach((e) => {
		const scroller = e.querySelector(".scroller");
		const slides = scroller.querySelectorAll(".slide");
		const dotsContainer = e.querySelector(".dots-container");
		let isScrolling;

		function initializeDots() {
			if (slides.length < 2) return (dotsContainer.style.display = "none");

			return slides.forEach((slide, i) => {
				let dot = document.createElement("div");
				dot.classList.add("dot");
				if (isVisible(slide)) {
					dot.classList.add("selected");
				}
				dotsContainer.appendChild(dot);
			});
		}

		function updateDots() {
			const dots = document.querySelectorAll(".dot");
			dots.forEach((dot, i) => {
				dot.classList.remove("selected");
			});

			slides.forEach((slide, i) => {
				if (slide.classList.contains("visible")) {
					dotsContainer.children[i].classList.add("selected");
				}
			});
		}

		function isVisible(el) {
			const frame = scroller.getBoundingClientRect();
			const rect = el.getBoundingClientRect();
			return (
				rect.left > frame.left - frame.width / 2 &&
				rect.right <= frame.right + frame.width / 2
			);
		}

		scroller.onscroll = (e) => {
			window.clearTimeout(isScrolling);
			const dots = document.querySelectorAll(".dot");
			isScrolling = setTimeout(() => {
				slides.forEach((slide, i) => {
					if (isVisible(slide)) {
						slide.classList.add("visible");
						dotsContainer.children[i].classList.add("selected");
					} else {
						slide.classList.remove("visible");
						dotsContainer.children[i].classList.remove("selected");
					}
				});
			}, 0);
		};
		initializeDots();
	});
});
