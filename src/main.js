import Circles from "./js/circles.js";

let circles;
window.setup = (event) => {
    circles = new Circles({
        palette: ['#886176', '#9A7197', '#9D96B8', '#AFD2E9'],
        total_points: 10
    });
    createCanvas(windowWidth, windowHeight);
};

window.draw = (event) => {
    circles.draw()
};

window.windowResized = (event) => {
    resizeCanvas(windowWidth, windowHeight);
};

// eventos de mouse

window.mousePressed = (e) => {
    // console.log(e);
};
window.mouseMoved = (e) => {
    // console.log(e);
};

window.mouseReleased = (e) => {
    // console.log(e);
};