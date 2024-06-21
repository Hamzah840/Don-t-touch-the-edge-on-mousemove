const box = document.querySelector('.box');

const width = window.innerWidth;
const height = window.innerHeight;

window.addEventListener('mousemove', e => {
    const X = e.clientX;
    const Y = e.clientY;

    const centerX = width/2;
    const centerY = height/2;

    const dx = Math.abs(centerX - X);
    const dy = Math.abs(centerY - Y);

    const Xspeed = Math.max(0, (width - dx) / width);
    const Yspeed = Math.max(0, (height - dy) / height);

    const newX = X + (centerX - X) * Xspeed;
    const newY = Y + (centerY - Y) * Yspeed;

    box.style.left = `${newX}px`;
    box.style.top = `${newY}px`;
})