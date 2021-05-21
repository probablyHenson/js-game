const game = {
    screenWidth: '640px',
    screenHeight: '480px',
    screenColor: 'black'
};

function mainLoop(lastTick) {
    if (!lastTick) lastTick = window.performance.now();
    window.requestAnimationFrame(mainLoop);
    game.updateTime(lastTick);
    game.drawScreen();
}

game.drawScreen = function() {
    game.setScreenColor();
}

game.setScreenColor = function() {
    const { canvas, ctx, screenColor } = this;
    ctx.fillStyle = screenColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

game.setScreenSize = function () {
    const { canvas, screenWidth, screenHeight } = this;
    canvas.setAttribute('width', screenWidth);
    canvas.setAttribute('height', screenHeight);
}

game.start = function() {
    const canvas = document.getElementById('screen');
    const ctx = canvas.getContext('2d');
    Object.assign(this, { canvas, ctx });
    this.setScreenSize();
    mainLoop();
}

game.updateTime = function(lastTick) {
    if (!game.lastTick) game.lastTick = lastTick;
    this.tickDelta = lastTick - game.lastTick;
    this.lastTick = lastTick;
}

game.start();