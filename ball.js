var shell = [];
shell.push(new Image());
shell[0].src = "./shell0.png";
shell.push(new Image());
shell[1].src = "./shell1.png";
shell.push(new Image());
shell[2].src = "./shell2.png";

const ballmaker =  function(){
    const w = 16;
    const h = 16;
    const fl = 5;
    let ball = {
        id: 'ball',
        width: w,
        height: h,
        rwidth: 16,
        rheight: 16,
        rx: 0,
        ry: 0,
        x: ( WIDTH / 2 ) - (w / 2),
        y: HEIGHT - h - 320,
        vx: 1,
        vy: 1,
        speed: 2,
        framelength: fl,
        frameprogress: fl,
        frames: 3,
        frame: 0
    }
    return {
        move(){
            if(ball.x > WIDTH || ball.x < 0){
                ball.vx = -ball.vx;
            }
            if(ball.y > HEIGHT || ball.y < 0){
                ball.vy = -ball.vy;
            }
            ball.x += ball.speed * ball.vx;
            ball.y += ball.speed * ball.vy;
        },
        draw(){
            framecount(ball);
            ctx.drawImage(shell[ball.frame], ball.x, ball.y);
        },
        collide(id){
            switch(id){
                case 'player':
                    console.log("HIT PLAYER");
                    ball.vy = -ball.vy;
                    break;
                default:
                    break;
            }
        },
        data: ball
    }
}