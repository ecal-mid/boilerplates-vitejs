import 'modern-normalize/modern-normalize.css';
import './style.scss'

import 'p5'
import Ball from './Ball';

const balls = []

window.setup = () => {
    createCanvas(0, 0)
    windowResized()

    for (let i = 0; i < 100; i++) {
        balls.push(new Ball())
    }
}

window.draw = () => {
    background('black')

    balls.forEach(ball => ball.update())
}

window.windowResized = () => {
    resizeCanvas(windowWidth, windowHeight)
}

window.mousePressed = () => {
    balls.push(new Ball({ x: mouseX, y: mouseY }))
}