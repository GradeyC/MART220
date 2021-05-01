var RGB1 = (150, 14, 156);
var RGB2 = (161, 120, 41);
var BGcolor=(125);

function setup() {
  createCanvas(800, 800);
  background(RGB1 - RGB2);
  frameRate(25);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  fill(BGcolor);
  
  var size1 = (random(50) * random(50)) * .01;//sets random radius for circles 
  var size2 = (random(50) * random(50)) * .01;//sets random radius for circles 
  var size3 = (random(50) * random(50)) * .01;//sets random radius for circles
  var size4 =(random(50) * random(50)) * .01;//sets random radius for circles
  var width1 = random(50, 375);//bounds Circle1
  var height1 = random(50, 375);//bounds Circle1
  var width2 = random(375, 750);//bounds Circle2
  var height2 = random(375, [750]);//bounds Circle2
  var width3 = random(375, 750);//bounds Circle3
  var height3 = random(50, 375);//bounds Circle3
  var width4= random(50, 375);//bounds Circle4
  var height4 = random(375, [750]);//bounds Circle4


  //main art things
    //circle 1 (upper left) winter colors 
      fill(random(50,150), random(100,200), random(130,250));
      circle(width1, height1, size1, size1);

   //circle 2 (bottom right) fall colors 
      fill(random(180,250), random(100,200), random(90,100));
      circle(width2, height2, size2, size2);

    //circle 3 (upper right) spring colors 
      fill(random(130,250), random(150,250), random(50,80));//colors are good no changes needed
      circle(width3, height3, size3, size3);

   //circle 4 (bottom left) summer colors 
      fill(random(100,250), random(100,200), random(100,200));
      circle(width4, height4, size4, size4);

  //resets circles/canvas every 3min
  clearInterval(18000);
  if (frameCount % 2 == 0) {
    BGcolor = 255 - BGcolor;
}

if(keyIsPressed){
  if(key=="a"){
    size1=((random(75) * random(25)) *2);
    size2=((random(25) * random(75)) * .3);
     size3 = (random(25) * random(25)) * .01;//sets random radius for circles
     size4 =(random(75) * random(75)) * .01;//sets random radius for circles
     console.log('size changes')
  }
}
if(keyIsPressed){
  if(key=="d"){
    size1=((random(75) * random(25)) *-2);
    size2=((random(25) * random(75)) * -.3);
     size3 = (random(25) * random(25)) * -.01;//sets random radius for circles
     size4 =(random(75) * random(75)) * -.01;//sets random radius for circles
     console.log('size changes')
  }
}
}