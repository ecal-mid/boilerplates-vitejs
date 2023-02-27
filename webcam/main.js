import 'modern-normalize/modern-normalize.css';
import './style.scss'

import { initWebcam } from './webcam';

async function init() {
    const video = await initWebcam({ selfie: false });
    const webcamCanvas = document.querySelector('#webcamCanvas');
    const ctx = webcamCanvas.getContext('2d');

    function draw() {
        webcamCanvas.width = video.width;
        webcamCanvas.height = video.height;
        ctx.drawImage(video, 0, 0)
        requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);
}

init()