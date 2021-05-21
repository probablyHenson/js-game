const game = { };

function mainLoop(lastTick) {
    if (!lastTick) lastTick = window.performance.now();
    window.requestAnimationFrame(mainLoop);
    game.setScreenColor('black');
    game.updateTime(lastTick);
}

game.setScreenColor = function(color) {
    const { canvas, ctx } = this;
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

game.setScreenSize = function (width, height) {
    const { canvas } = this;
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);    
}

game.start = function() {
    const canvas = document.getElementById('screen');
    const ctx = canvas.getContext('2d');
    Object.assign(this, { canvas, ctx });
    this.setScreenSize('640px', '480px');
    mainLoop();
}

game.updateTime = function(lastTick) {
    if (!game.lastTick) game.lastTick = lastTick;
    this.tickDelta = lastTick - game.lastTick;
    this.lastTick = lastTick;
}

game.start();