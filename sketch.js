var robotBody;
var robotHand1;
var robotHand2;
var robotLeg1;
var robotLeg2;
var robotHead;
var robotNeck;
var robotShoulder1;
var robotShoulder2;

function setup() {
  createCanvas(400, 400);
  
  robotBody = createSprite(200,195,100,90);
  robotBody.shapeColor = ("black");
  
  robotHead = createSprite(201,70,90,40);
  robotHead.shapeColor = ("black");
  
  robotHand1 = createSprite(138,190,25,80);
  robotHand1.shapeColor = ("black");
  
  robotHand2 = createSprite(262,190,25,80);
  robotHand2.shapeColor = ("black");
  
  robotLeg1 = createSprite(170,265,40,55);
  robotLeg1.shapeColor = ("black");
  
  robotLeg2 = createSprite(230,265,40,55);
  robotLeg2.shapeColor = ("black");
  
  robotNeck = createSprite(200,120,15,60);
  robotNeck.shapeColor = ("black");
  
  robotShoulder1 = createSprite(150,160,50,20);
  robotShoulder1.shapeColor = ("black");
  
  robotShoulder2 = createSprite(250,160,50,20);
  robotShoulder2.shapeColor = ("black");
}

function draw() {
  background("white");
  
  robotBody.x = mouseX;
  robotHead.x = robotBody.x;
  robotHand1.x = robotBody.x - 70;
  robotHand2.x = robotBody.x + 70;
  robotLeg1.x = robotBody.x - 30;
  robotLeg2.x = robotBody.x + 30;
  robotNeck.x = robotBody.x;
  robotShoulder1.x = robotBody.x - 50;
  robotShoulder2.x = robotBody.x + 50;
  
  if(mouseIsPressed) {
    robotNeck.height = 15;
    robotNeck.y = 145;
    robotHead.y = 120;
  }  else {
    robotNeck.height = 60;
    robotNeck.y = 120;
    robotHead.y = 70;
  }
    
  drawSprites();
}