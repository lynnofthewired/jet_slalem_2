var plat = [];
plat.push(new Image());
plat[0].src = "./plat0.png";
plat.push(new Image());
plat[1].src = "./plat1.png";

const playermaker =  function(){
    const w = 55;
    const h = 27;
    const fl = 20;
    let player = {
        id: 'player',
        width: w,
        height: h,
        rwidth: 32,
        rheight: 16,
        rx: 12,
        ry: 11,
        x: ( WIDTH / 2 ) - (w / 2),
        y: HEIGHT - h - 32,
        speed: 2,
        framelength: fl,
        frameprogress: fl,
        frames: 2,
        frame: 0
    }
    return {
        move(){
            player.x += player.speed * keyx;
            player.y += player.speed * keyy;
        },
        draw(){
            framecount(player);
            ctx.drawImage(plat[player.frame], player.x, player.y);
        },
        collide(id){
            switch(id){
                case 'ball':
                    console.log("HIT BALL");
                    break;
                default:
                    break;
            }
        },
        data: player
    }
}