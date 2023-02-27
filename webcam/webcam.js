export async function initWebcam({ selfie = false } = {}) {
    const video = document.createElement('video');
    video.autoplay = true;
    video.setAttribute('playsinline', '');

    // get prortrait or landscape stream
    const constraints = {
        audio: false,
        video: {
            width: { ideal: 4096 },
            height: { ideal: 2160 },
            facingMode: selfie ? 'user' : 'environment',
        },
    }

    // get stream
    const stream = await navigator.mediaDevices.getUserMedia(constraints)
    video.srcObject = stream;
    video.play()

    await new Promise((resolve) => {
        video.oncanplay = () => {
            video.width = video.videoWidth;
            video.height = video.videoHeight;
            resolve();
        }
    })

    return video;
}