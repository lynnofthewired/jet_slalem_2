
function draw(time) {
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    player.draw();
    ball.draw()
}

function framecount(s){
    if(s.frameprogress > 0){
        s.frameprogress--;
    } else {
        s.frame++;
        if(s.frame==s.frames){
            s.frame = 0;
        }
        s.frameprogress = s.framelength;
    }
}