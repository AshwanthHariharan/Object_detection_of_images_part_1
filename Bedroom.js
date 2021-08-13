Bedroom =""

function preload() {

Bedroom = loadImage("Bedroom.jpeg")

}

function setup() {

canvas = createCanvas(640, 420);

canvas.position(500, 250);
    
}

function draw() {

image(Bedroom, 0, 0, 640, 420);

}

function Back() {

window.location = "index.html"

}