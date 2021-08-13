var AC = "";

function preload() {

AC = loadImage("AC.jpg");    

}

function setup() {

canvas = createCanvas(640, 420);

canvas.position(500, 250);
    
}

function draw() {

image(AC, 0, 0, 640, 420);
    
}

function Back() {

window.location = "index.html"

}