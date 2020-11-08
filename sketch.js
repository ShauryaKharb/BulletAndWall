var wall;
var bullet;
var speed,weight;
var thickness;
var deform;
var mas="hello";

function setup() {
  createCanvas(1600,400);

  speed=Math.round(random(223,331));
  weight=Math.round(random(30,52));

  thickness=Math.round(random(22,83))

  deform=Math.round((0.5*weight*speed*speed)/(thickness*thickness*thickness));
  console.log(deform);

  bullet=createSprite(100,200,20,2);
  bullet.shapeColor="white";
  bullet.velocityX=speed;

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="white";

//==========================================================================================================//
//                                               END SETUP                                                  //
//==========================================================================================================//

}

function draw() {
  background(0);

 /* if (movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
    movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor="green";

  }else{
  fixedRect.shapeColor="red";
  }
  console.log(movingRect.x-fixedRect.x);
 */


 if (Collided (bullet,wall)){
   bullet.velocityX=0;
   
   console.log(mas);
   if (deform<10){
    wall.shapeColor="green";
   }
  if (deform>10){
    wall.shapeColor="red";
  }
 }

 
  drawSprites();

//==========================================================================================================//
//                                               END DRAW                                                   //
//==========================================================================================================//
}
function Collided (object1,object2){
  if (object2.x-object1.x<(object1.width+object2.width)/2){
    return true;
  }else {
    return false;
  }
}