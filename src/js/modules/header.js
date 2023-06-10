const burgerOpen = document.querySelector(".burger-open");
const burgerClose = document.querySelectorAll(".burger-close");
const menu = document.querySelector(".header__menu");

export function init() {
	burgerOpen.addEventListener("click", () => {
		if (burgerOpen.classList.contains("active")) {
			burgerOpen.classList.remove("active");
			menu.classList.remove("active");
		} else {
			burgerOpen.classList.add("active");
			menu.classList.add("active");
		}
	});
    burgerClose.forEach(el => {
        el.addEventListener('click', () => {
            burgerOpen.classList.remove("active");
            menu.classList.remove("active");
        })
    })
}
