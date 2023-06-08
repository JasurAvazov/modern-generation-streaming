import * as functions from "./modules/functions.js";
import SmoothScroll from "smoothscroll-for-websites";

SmoothScroll({
    animationTime: 400,
    stepSize: 60,
    keyboardSupport: true,
    arrowScroll: 100,
    touchpadSupport: true,
});

functions.isWebp();