var DinoObj = [];
var DinoRunRtObj = [];
var DinoRunLfObj = [];
var movement = [];
var animateMovement = [];
var DinoJump=[];
var ResultJump=[];
var RunLftAnimation = [];
var RunRtAnimation =[];
var obstacle=[];
var currentAnimation;
var ResultRight;
var ResultLeft;
var resultIdle;
var Timer = 0;
var DinoInterval;
increaseInterval= +1;
var slow = 0;
function preload() 
{
  resultIdle = loadStrings('assets/DinoIdle.txt');
  ResultRun = loadStrings('assets/DinoJump.txt');
  ResultLeft = loadStrings('assets/DinoLeft.txt');
  ResultRight = loadStrings('assets/DinoRight.txt');
  ResultJump =loadStrings('assets/DinoJump.txt');
  
}

function setup()
{
    createCanvas(700,700);

    for (var i = 0; i < resultIdle.length; i++) 
  {
    DinoObj.push(new imageclass('assets/' + result[i], 0, 0));
    animation[i] = DinoObj[i].getImage();
  }

  for (var i = 0; i <Timer; i++) 
  {
    DinoRunRtObj.push(new imageclass('assets/' + ResultRight[i], 0, 0));
    RunRtAnimation[i] = DinoObj[i].getImage();
    DinoRunLfObj.push(new imageclass('assets/' + ResultLeft[i], 0, 0));
    DinoLeftAnimation[i] = DinoRunLfObj[i].getImage();
    DinoJumpObj.push(new imageclass('assets/' + ResultJump[i],0.0));
    DinoJump[i]= DinoObj[i].getImage();

  }

  GenObj = DinoObj;
  DinoInterval = setInterval(GrowInterval, 50);
  
}


function draw()
{
 if (keyIsPressed) 
 {
   clearInterval(DinoInterval);
   DinoInterval = null;
   index++;
   if (slow > 2) 
   {
     GrowInterval();
     Timer = 0;
   }

   if (key == "d") 
   {
     
     currentAnimation = RunRtAnimation;
     GenObj = DinoObj;
     if (Timer >= currentAnimation.length) 
     {
       Timer = 0;
     }
     GenObj[Timer].setX(GenObj[Timer].getX() + 3);
     for (var i = 0; i < DinoRunRtObj.length; i++)
     {
       DinoRunRtObj[i].setX(GenObj[0].getX());
     }
    DinoRunLfObj = DinoObj;

   } 
   if (key=="w"){
    AnimateW = DinoJump;
    GenObj = DinoObj;

    if (Timer >= AnimateW.length) 
    {
      Timer = 0;
    }
    GenObj[Timer].setX(currentObjects[Timer].getY() + 1);

    for (var i = 0; i < DinoJumpObj.length; i++)
    {
      DinoJumpObj[i].setY(currentObjects[0].getY());
    }
   }
   else if (key == "a") 
   {

     AnimateA = DinoLeftAnimation;
     GenObj = DinoObj;

     if (Timer >= AnimateA.length) 
     {
       Timer = 0;
     }
     GenObj[Timer].setX(currentObjects[Timer].getX() - 3);

     for (var i = 0; i < DinoRunLfObj.length; i++)
     {
       DinoRunLfObj[i].setX(currentObjects[0].getX());
     }
       

     DinoRunLfObj = currentObjects;
   }


 } 
 // this last part just checks for the idle and resets the animations
 else 
 {
   if (GrowInterval == null) 
   {
     GrowInterval = setInterval(GrowTimer, 30);
   }
   currentObjects = DinoObj;
   currentAnimation = resultIdle;
 }

 // display the images regardless of the movement or idle
 image(currentAnimation[Timer], currentObjects[Timer].getX(), currentObjects[Timer].getY());

}

function GrowInterval() 
{
 // increment the index
 counter += 3;
 // if we reach the end of the array, start over
 if (Timer >= DinoObj.length) 
 {
   Timer = 0;
 }
}
