import * as functions from "./modules/functions.js";
import * as header from "./modules/header.js";
import * as swiper from "./modules/swiper.js";
import SmoothScroll from "smoothscroll-for-websites";

SmoothScroll({
    animationTime: 400,
    stepSize: 60,
    keyboardSupport: true,
    arrowScroll: 100,
    touchpadSupport: true,
});

functions.isWebp();
header.init();
swiper.init();
