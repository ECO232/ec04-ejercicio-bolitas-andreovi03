let posicionesX = []
let posicionesY = []
let channelsR = []
let channelsG = []
let channelsB = []

function setup() {
    createCanvas(800, 400);
    noStroke();
}

function draw(){
    background(220);
    for(let index=0;index<posicionesX.length;index++){
        fill(channelsR[index], channelsG[index], channelsB[index]);
        ellipse(posicionesX[index],posicionesY[index],30,30)
    }
}

function mousePressed(){
    posicionesX.push(mouseX)
    posicionesY.push(mouseY)
    channelsR.push(random(0,255))
    channelsG.push(random(0,255))
    channelsB.push(random(0,255))
}