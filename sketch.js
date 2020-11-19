var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
 fixedRect= createSprite(200, 200, 50, 80);
 fixedRect.shapeColor="blue"
 movingRect= createSprite(400, 200, 80, 30);
 movingRect.velocityX=-3
 fixedRect.velocityX=3
    movingRect.shapeColor = "blue"
    gameObject1 = createSprite(100, 100, 50, 50);
    gameObject1.shapeColor = "blue"
  
    gameObject2 = createSprite(200, 100, 50, 50);
    gameObject2.shapeColor = "blue"
    gameObject3 = createSprite(300, 100, 50, 50);
    gameObject3.shapeColor = "blue"
    gameObject4 = createSprite(400, 100, 80, 50);
    gameObject4.shapeColor = "blue"
 
}

function draw() {
  background(0);
  //movingRect.x=World.mouseX
    //movingRect.y = World.mouseY
    if (isTouching(gameObject1,movingRect)) {
        gameObject1.shapeColor = "green"
        movingRect.shapeColor = "green"
    }
    else {
        gameObject1.shapeColor = "blue"
        movingRect.shapeColor = "blue"
    }
    
    bounceOff(movingRect,fixedRect)
  drawSprites();
}

