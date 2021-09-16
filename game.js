const canvas=document.createElement('canvas');
canvas.setAttribute("width",WIDTH);
canvas.setAttribute("height",HEIGHT);
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

let player = playermaker(); // player.js
let ball = ballmaker(); // ball.js

function gameLoop(time) {
    input()  // input.js
    update()
    draw() // render.js
    window.requestAnimationFrame(gameLoop);
}

gameLoop();

function update(time) {
    player.move()
    ball.move()
    collide(player, ball)
}

function collide(objA, objB){
    let topA = objA.data.y + objA.data.ry,
        leftA = objA.data.x + objA.data.rx,
        rightA = objA.data.x + objA.data.rx + objA.data.rwidth,
        bottomA = objA.data.y + objA.data.ry + objA.data.rheight;
    let topB = objB.data.y + objB.data.ry,
        leftB = objB.data.x + objB.data.rx,
        rightB = objB.data.x + objB.data.rx + objB.data.rwidth,
        bottomB = objB.data.y + objB.data.ry + objB.data.rheight;
    if(rangeIntersect(topA, bottomA, topB, bottomB) &&
        rangeIntersect(leftA, rightA, leftB, rightB)){
            objA.collide(objB.data.id);
            objB.collide(objA.data.id);
        }
}

function rangeIntersect(min0, max0, min1, max1){
    return Math.max(min0,max0) >= Math.min(min1, max1) &&
        Math.min(min0, max0) <= Math.max(min1, max1);
}

