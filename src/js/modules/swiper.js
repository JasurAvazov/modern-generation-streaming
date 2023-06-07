import Swiper, { Navigation, Pagination } from "swiper";

export function init() {
	var swiper = new Swiper(".intro-swiper", {
		modules: [Pagination, Navigation],
		slidesPerView: "auto",
		spaceBetween: 20,
		centeredSlides: true,
		grabCursor: true,
		pagination: {
			el: ".intro-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
}
