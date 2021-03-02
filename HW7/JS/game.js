var DinoObj;
var IdleResult, RightRunResult;
var LeftRunResult, JumpResult; AttackResult;
var Obstecle;
var health = 100;
const Particles = [];
var background;

function preload() {
  IdleResult = loadStrings('assets/DinoIdle.txt');
  RightRunResult = loadStrings('assets/DinoRight.txt');
  LeftRunResult = loadStrings('assets/DinoLeft.txt');
  JumpResult = loadStrings('assets/DinoJump.txt');
  AttackResult = loadStrings('assets/DinoDead.txt')//I don't have an attack animation however for the time being I was going to repurpose the death animation to be a psudo slide like attack.


}

function setup() {
  createCanvas(1000, 1000);
  DinoObj = createSprite(250, 250);
  DinoObj.addAnimation('idle', IdleResult[0], IdleResult[IdleResult.length - 1]);
  DinoObj.addAnimation('RunRight', RightRunResult[0], RightRunResult[RightRunResult.length - 1]);
  DinoObj.addAnimation('RunLeft', LeftRunResult[0], LeftRunResult[LeftRunResult.length - 1]);
  DinoObj.addAnimation('Jump', JumpResult[0], JumpResult[JumpResult.length - 1]);
  DinoObj.addAnimation('Attack', AttackResult[0], AttackResult[AttackResult.length - 1]);
  Obstecle = createSprite(150, 100);
  Obstecle = addImage(loadImage('assets/Pillar.png'));

}

function draw() {
  background(1000, 1000)
  if (keyDown('w')) {
    DinoObj.changeAnimation('Jump');
    DinoObj.velocity.y += .3;
    if (Obstecle != null) {
      if (DinoObj.collide(Obstecle)) {
        DinoObj.changeAnimation('idle');
        DinoObj.velocity.y = 0;
      }
    }
  }
  if (keyDown('a')) {
    DinoObj.changeAnimation('RunLeft');
    DinoObj.velocity.x -= .3;
    if (Obstecle != null) {
      if (DinoObj.collide(Obstecle)) {
        DinoObj.changeAnimation('idle');
        DinoObj.velocity.x = 0;
      }
    }
  }
  else if (keyDown('r')) {
    DinoObj.changeAnimation('Attack');
    DinoObj.velocity.x = .5;
  }
  else {
    DinoObj.changeAnimation('idle');
    DinoObj.velocity.x = 0;
    DinoObj.velocity.y = 0;
  }
  if (rock != null) {
    if (dist(DinoObj.position.x, DinoObj.position.y, Obstecle.position.x, Obstecle.position.y) < 750) {
      createParticles(Obstecle.position.x, Obstecle.position.y);
      health -= 1;
      if (health <= 0) {
        Obstecle.remove();
        Obstecle = null;
      }

    }
    if (keyDown('s')) {
      DinoObj.changeAnimation('Jump');
      DinoObj.velocity.y -= .3;
      if (Obstecle != null) {
        if (DinoObj.collide(Obstecle)) {
          DinoObj.changeAnimation('idle');
          DinoObj.velocity.y = 0;
        }
      }
    }
  }
  if (keyDown('d')) {
    DinoObj.changeAnimation('RunRight');
    DinoObj.velocity.x += .3;
    if (Obstecle != null) {
      if (DinoObj.collide(Obstecle)) {
        DinoObj.changeAnimation('idle');
        DinoObj.velocity.x = 0;
      }
    }
  }
  if (Obstecle.health >= 100) {
    fill(225, 225, 255);
    textSize(100);
    text("You Won!", 150, 350);
  }
  drawSprites();
}


function addParticles(x, y) {
  for (let i = 0; i < 10; i++) {
    let visuals = new Particle(x, y);
    Particles.push(visuals);
  }
  for (let i = Particles.length - 1; i >= 0; i--) {
    Particles[i].update();
    Particles[i].show();
    if (particles[i].finished()) {
      Particles.splice(i, 3);
    }
  }
}