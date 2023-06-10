import Swiper from "swiper";

export function init() {
	new Swiper(".process-swiper", {
        slidesPerView: 1,
        spaceBetween: 50,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
        }
    });
}
