FruitBasket = "";

function preload() {

FruitBasket = loadImage("Fruit_Basket.jpeg");

}

function setup() {

canvas = createCanvas(640, 420);

canvas.position(500, 250);
    
}

function draw() {

image(FruitBasket, 0, 0, 640, 420);
    
}

function Back() {

    window.location = "index.html"
    
    }