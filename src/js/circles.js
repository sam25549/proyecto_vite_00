import Point from "./componentes/point.js";

export default class Circles {
    constructor(args = {}) {
       this.total_points = args.total_points || 10;
       this.palette = args.palette || ['#886176', '#9A7197', '#9D96B8', '#AFD2E9'];
        this.points = [];
        this.bg = this.palette[Math.floor(Math.random() * this.palette.length)];
        for (let i = 1; i <= this.total_points; i++) {
            const randomColor = this.palette[Math.floor(Math.random() * this.palette.length)];
            const point = new Point({
                stroke: 0,
                fill: randomColor,
                size: 300 - (i * 20),
                friction: i * 0.1,
                alpha:150
            })
            this.points.push(point);
        }
    }

    draw() {
        background(this.bg);
        for (let i = 0; i < this.points.length; i++) {
            blendMode(HARD_LIGHT);
            this.points[i].draw();
        }
    }
}
