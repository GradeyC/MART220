var x = 0;
var y = 0;
var scale=250;
function setup() {
    createCanvas(1000, 800, WEBGL);
}

function draw() {
    background(120);
    normalMaterial();
    ambientLight(62, 210, 50);
    function CreateMovingBox(width, hight, depth, MovingX, MovingY, shift, scale) {
        push();
        if (shift) {
          translate(MovingX + x, MovingY+y);
        } else{
          translate(MovingX, MovingY+y);
        }
    
        if(scale){
            translate(width+scale,hight+scale,depth+scale);
        }
        else{
            translate(width,hight,depth);
        }

      
        translate(-150, -300);
        rotateX(frameCount * -0.01);
        rotateY(frameCount * 0.02);
        box(width, hight, depth);
        pop();
      
      
      }
    push();
        translate(400, 50);
        rotateX(frameCount * 0.01);
        rotateZ(frameCount * -0.01);
        box(350, 150, 200, 2, 2);
    pop();

   

        
  
    
    push();
    translate(130, -250);
    rotateY(frameCount * 0.015);

    box(50, 30, 5);
    pop();

    push();
    translate(-180, -80);
    rotateX(frameCount * -0.01);
    ellipsoid(100, 50, 150, 10, 10);
    pop();

    push();
    translate(-250, 230);
    rotateY(frameCount * 0.03);
    rotateZ(frameCount * 0.03);
    torus(150, 50, 5, 5);
    pop();

    CreateMovingBox(150, 200, 150, 2, 2,true,true);
 if (keyIsPressed) {
            if (key == 's') { // move the right
                y += 5;
          }   
            } else if (key == 'a') { // move to the left
        
              x -= 5;
        
            }
            else if (key == 'w') { // move the right
              y -= 5;
          }
            else if(key == 'd'){
                x +=5;
            }
            if (keyIsDown(LEFT_ARROW)) { 
                scale -= 100; 
            } 
          
            if (keyIsDown(RIGHT_ARROW)) { 
                scale += 100; 
            } 


}