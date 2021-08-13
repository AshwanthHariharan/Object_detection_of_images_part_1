Bottle = ""

function preload() {

Bottle = loadImage("Bottle.jpg");

}

function setup() {

canvas = createCanvas(640, 420);

canvas.position(500, 250);
    
}

function draw() {

image(Bottle, 0, 0, 640, 420);
    
}
function Back() {

    window.location = "index.html"
    
    }