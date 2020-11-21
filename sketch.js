var car,wall
var speed,weight


function setup() {
  createCanvas(1600,400);
 car= createSprite(50, 200, 50, 50);
 wall= createSprite(1300,200,60,height/2);
  wall.shapecolor=color(80,80,80);
  speed=random(40,100);
  weight = random(400,1200);

  
}

function draw() {
  background(255,20,25);  
  car.velocityX= speed;

  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX=0;
    var deformation= (0.5 * weight * speed * speed)/22500;

    if(deformation>180){
      car.shapeColor=color("pink");
    }

    if(deformation<180 && deformation>100){
car.shapeColor=color("yellow");
    }

    if(deformation<100){
      car.shapeColor=color("green");
    }
  }


  drawSprites();
}