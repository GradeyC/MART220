class ParticleEffects {

    constructor() {
      this.x = 1000;
      this.y = 500;
      this.vx = random(-3, 1);
      this.vy = random(-2, 0);
      this.alpha = 255;
    }
  
    finished() {
      return this.alpha < 0;
    }
  
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= 3;
    }
  
    show() {
      noStroke();
      fill(180,100, this.alpha);
      circle(this.x, this.y, 10);
    }
  
  }

