const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');

function setScreenColor(color) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function setScreenSize(width, height) {
    canvas.setAttribute('width', width);
    canvas.setAttribute('height',  height);
}

setScreenSize('640px', '480px');
setScreenColor('black');