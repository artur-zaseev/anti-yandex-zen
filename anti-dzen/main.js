const DZEN_DOM_ELEMENT = ".infinity-zen";
const IS_YANDEX_MAIN_PAGE = window.location.href === "https://yandex.ru/";

if (IS_YANDEX_MAIN_PAGE) {
	document.querySelector(DZEN_DOM_ELEMENT).innerHTML = "";
}