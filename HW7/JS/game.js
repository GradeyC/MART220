var DinoObj;
var IdleResult, RightRunResult;
var LeftRunResult, JumpResult;
var Obstecle;
var background;

function preload() {
  IdleResult = loadStrings('assets/DinoIdle.txt');
  RightRunResult = loadStrings('assets/DinoRight.txt');
  LeftRunResult = loadStrings('assets/DinoLeft.txt');
  JumpResult = loadStrings('assets/DinoJump.txt');
}

function setup() {
  createCanvas(1000, 1000);

  DinoObj = createSprite(250, 250);

  DinoObj.addAnimation('idle', IdleResult[0], IdleResult[IdleResult.length - 1]);
  DinoObj.addAnimation('RunRight', RightRunResult[0], RightRunResult[RightRunResult.length - 1]);
  DinoObj.addAnimation('RunLeft', LeftRunResult[0], LeftRunResult[LeftRunResult.length - 1]);
  DinoObj.addAnimation('Jump', JumpResult[0], JumpResult[JumpResult.length - 1]);
  // we want to use the dot (.) operator instead of the "=" here to call the
  // addImage function
  Obstecle = createSprite(150, 100);
  Obstecle.addImage(loadImage('assets/Pillar.png'));

}

function draw() {
  background(1000, 1000)
  if (keyDown('w')) {
    DinoObj.changeAnimation('Jump');
    DinoObj.velocity.y += .3;
    if (DinoObj.collide(Obstecle)) {
      DinoObj.changeAnimation('idle');
      DinoObj.velocity.y = 0;
    }
  } else if (keyDown('a')) {
    DinoObj.changeAnimation('RunLeft');
    DinoObj.velocity.x -= .3;
    if (DinoObj.collide(Obstecle)) {
      DinoObj.changeAnimation('idle');
      DinoObj.velocity.x = 0;
    }
  } else if (keyDown('s')) {
    DinoObj.changeAnimation('Jump');
    DinoObj.velocity.y -= .3;
    if (DinoObj.collide(Obstecle)) {
      DinoObj.changeAnimation('idle');
      DinoObj.velocity.y = 0;
    }
  } else if (keyDown('d')) {
    DinoObj.changeAnimation('RunRight');
    DinoObj.velocity.x += .3;
    if (DinoObj.collide(Obstecle)) {
      DinoObj.changeAnimation('idle');
      DinoObj.velocity.x = 0;
    }
  } else {

    DinoObj.changeAnimation('idle');
    DinoObj.velocity.x = 0;

  }
  rect(255, 255, 255);
  fill(0, 255, 0);
  text("Exit");
  textSize(50);
  if (DinoObj.x >= 1000 || DinoObj.y == 0 && DinoObj.x == 0 || DinoObj.y < -50) {
    fill(225, 225, 255);
    textSize(100);
    text("You Won!", 150, 350);
  }

  // this is needed to display the images with the play library
  drawSprites();
}