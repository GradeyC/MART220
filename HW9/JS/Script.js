//Variable for Model
let Model;
//variable for textures
let Texture1;
let Texture2;
let Texture3;
let Texture4;
let Texture5;
//variables for simple 3d shapes
let ObjArray=[];
//translation variables
var TranslateX = -20;
var TranslateY = +20;
var TranslateZ = -10;

function preload() {
  Texture1= loadImage('Assets/Bay.jpg');
  Texture2=loadImage('Assets/Field.jpg');
  Texture3=loadImage('Assets/Mirror.png');
  Texture4=loadImage('Assets/Poke_Ball.png');
  Texture5=loadImage('Assets/Space.jpg');
  Texture6=loadImage('Assets/Wall1.jpg');
  Model = loadModel('Assets/Ball.obj', true);
}
function setup() {
  createCanvas(1000, 1000, WEBGL);

  ObjArray.push(new ShapeClass("box",75,125,175,90,62));
  ObjArray.push(new ShapeClass("sphere",150));
  ObjArray.push(new ShapeClass("cone",45,90));
  ObjArray.push(new ShapeClass("torus",80,50,-20));
  ObjArray.push(new ShapeClass("ellipsoid",60,40,90,20));
}

function draw(){

  background(98);
  normalMaterial();


  for (var i = 0; i < ObjArray.length; i++) {
    ObjArray[i].draw(frameCount);
  }

  push();//for my model
  scale(0.7); 
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  translateX(TranslateX);
  translateY(TranslateY);
  translateZ(TranslateZ);
  texture(Texture6);
  model(Model);
  pop();
  
  if (mouseIsPressed) {
    TranslateX = 0;
    TranslateY = 0;
    TranslateZ = 0;
    TranslateX = floor(random(200));;
    TranslateY = floor(random(500));;
    TranslateZ = floor(random(500));;
  }
}











































