export default class Ball {
    constructor(options) {

        const defaults = {
            x: random(0, width),
            y: random(0, height),
            diameter: random(20, 60),
            color: color(random(255), random(255), random(255)),
        }

        Object.assign(this, defaults, options);
    }

    update() {
        push()
        fill(this.color)
        circle(this.x, this.y, this.diameter)
        pop()
    }
}