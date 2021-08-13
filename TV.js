Tv = "";

function preload() {

Tv = loadImage("TV.jpeg");

}

function setup() {

canvas = createCanvas(640, 420);

canvas.position(500, 250);
    
}

function draw() {

image(Tv, 0, 0, 640, 420);
    
}

function Back() {

    window.location = "index.html"
    
    }