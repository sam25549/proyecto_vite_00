
import Preloader from "./preloader.js";
import Line from "./js/crayon/line.js";

let lines = [];
let _line;

const redoBtn = document.getElementById('redo-btn');
const undoBtn = document.getElementById('erase-btn');

window.setup = (event) => {
    createCanvas(windowWidth, windowHeight);
}

window.mousePressed = (event => {
    _line = new Line({
        stroke: color (random(255), random(255), random(255)),
        strokeWeight: random(1, 10)
    });
    lines.push(_line);
})

window.mouseDragged = (event) => {
    if (mouseIsPressed) {
        const p = createVector(event.x, event.y);
        _line.addPoint(p);
    }
}

window.draw = (event) => {
    background(0);
    lines.forEach((line) => {
        line.draw();
    });
}

window.Resized = (event => {
    resizeCanvas(windowWidth, windowHeight);
})
