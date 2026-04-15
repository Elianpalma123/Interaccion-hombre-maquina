function setup () {
    createCanvas(800,800);
    frameRate(30);
    colorMode(HSB)
}

function draw (){
    background (0, 220, 15);
    //var x1 = width*Math.sin(frameCount*0.01);
    rect (20 , 20, 40,40);
    rect (30, 40, 20, 20);
    triangle (40,10,10,20,70,20);
}