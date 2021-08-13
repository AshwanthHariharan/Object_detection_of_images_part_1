Table = "";

function preload() {

Table = loadImage("Table.jpeg");

}

function setup() {

canvas = createCanvas(640, 420);

canvas.position(500, 250);
    
}

function draw() {

image(Table, 0, 0, 640, 420);
    
}

function Back() {

    window.location = "index.html"
    
    }