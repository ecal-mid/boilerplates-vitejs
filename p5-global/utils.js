export function delay(millis) {
    return new Promise((resolve) => setTimeout(resolve, millis));
}

export function random(min, max) {
    return Math.random() * (max - min) + min;
}