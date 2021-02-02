//colors
var Red1,Blue1,Green1;//64, 102, 138 (for counter top)
var Red2,Blue2,Green2;//185, 145, 85 (for Background to cabinets)
var Red3,Blue3,Green3;//185, 145, 105(for Cabinet doors)
var Red4,Blue4,Green4;//
var Red5,Blue5,Green5;//
var Red6,Blue6,Green6;//
var Red7,Blue7,Green7;//
var Red8,Blue8,Green8;//
var Red9,Blue9,Green9;//
var Red10,Blue10,Green10;//
var Red11,Blue11,Green11;//
//Group1(counter) vars (complete)
var CounterTopX=30, CounterTopY=550, CounterHight=490, CounterWidth=30;//all vars for counter top in group 1
var CabBaseX=30, CabBaseY=580, CabBaseHight=490; CabBaseWidth=90;//all doors for cabinet base
var RtCabDoorX=50, LfCabDoorX=300, CabDoorY=590, CabDoorHight=150, CabDoorWidth=80;//all for cabinet doors||Rt= right door||Lf=Left door, every other value is same for the both
//Group2(upper cupboards) vars (Complete)
var CupBaseX=30,CupBaseY=70,CupBaseHight=190,CupBaseWidth=290;//background for upper cupboard
var RtCupDoorX=50, RtCupDoorY=90, RtCupDoorHight=150, RtCupDoorWidth=250;//all for cupboard door
var KnobX=70, KnobY=310, KnobCirc=15;//all for knob 
//Group3(Window/outside) vars (Complete)
var FrameLeftX=290, FrameLeftY=200, FrameLeftHight=20, FrameLeftWidth=200;//left frame for window
var FrameRightX=490, FrameRightY=200, FrameRightHight=20, FrameRightWidth=200;//Right frame for window
var FrameTopX=290, FrameTopY=180, FrameTopHight=220, FrameTopWidth=20;//top frame for window
var FrameBotX=290, FrameBotY=400, FrameBotHight=220, FrameBotWidth=20;//Bottom Frame for window
var FrameCenterX=290, FrameCenterY=300, FrameCenterHight=220, FrameCenterWidth=10;//Middle section for window
var OutTopX=310, OutTopY=200, OutTopHight=180, OutTopWidth=100;//outside background top
var OutBotX=310, OutBotY=310, OutBotHight=180, OutBotWidth=90;//outside background bottom
//Group4(fridge) vars (Complete)
var FrgTopX=525, FrgTopY= 150, FrgTopHight= 145, FrgTopWidth= 200;
var FrgBotX=525, FrgBotY= 370, FrgBotHight= 145, FrgBotWidth= 300;
var FrgGapX=525, FrgGapY= 345, FrgGapHight= 145, FrgGapWidth= 25;
//Group5(Food) vars (Complete)
var BoxX=190, BoxY=500, BoxHight=50, BoxWidth=60; 
var AppleX=120, AppleY=550, AppleHight=30, AppleWidth=35;
//other vars
var counter=0;
var Timer=0;
var Coyote;
var CoyoteX=200,CoyoteY=200,CoyoteSpd=10;
var Mountain;
var MountainX=500, MountainY=500, MountainSpd=10;
var Teton;
var TetonX=350, TetonY=350, TetonSpd=1;
var TitleFont;

function preload(){
    Coyote=loadImage("./Assets/WinterCoyote.jpg");
    Mountain=loadImage('./Assets/WinterRange.jpg');
    Teton=loadImage('./Assets/WinterTeton.jpg');
    TitleFont=loadFont('./Assets/Liquid.ttf');
}

function setup()
{
    createCanvas(700, 700);
    Red1 = random(255); 
    Red2 = random(255);
    Red3 = random(255);
    Red4 = random(255);
    Red5 = random(255);
    Red6 = random(255);
    Red7 = random(255);
    Red8 = random(255);
    Red9 = random(255);
    Red10 = random(255);
    Red11 = random(255);
    Blue1 = random(255);
    Blue2 = random(255);
    Blue3 = random(255);
    Blue4 = random(255);
    Blue5 = random(255);
    Blue6 = random(255);
    Blue7 = random(255);
    Blue8 = random(255);
    Blue9 = random(255);
    Blue10 = random(255);
    Blue11 = random(255);
    Green1 = random(255);
    Green2 = random(255);
    Green3 = random(255);
    Green4 = random(255);
    Green5 = random(255);
    Green6 = random(255);
    Green7 = random(255);
    Green8 = random(255);
    Green9 = random(255);
    Green10 = random(255);
    Green11 = random(255);
    
}

function draw()
{
    //leave background,border and signature alone
    background(223, 204, 182);
    //border (leave alone)
    fill(129, 77, 16);
    rect(0,670,700,30);//bottom
    rect(0,0,30,700);//right side
    rect(670,0,30,700);//left side
    rect(0,0,700,30); //top

    //signature(Change font, and add timer display)
     fill(225,225,255);
     textFont(TitleFont);
     textSize(20);
     text('A Calm Kitchen', 10,25);
     textSize(30);
     text('Gradey Cashin', 495,695); 

    //Images
    image(Coyote,CoyoteX,CoyoteY);
    image(Mountain,MountainX,MountainY);
    image(Teton,TetonX,TetonY);

    //Change Coyote Movement
     CoyoteY += CoyoteSpd;
     if(CoyoteY>=600 || CoyoteY <=0)
     {
        CoyoteSpd*=-1;
     }
    //Change Mountain Movement
     MountainX += MountainSpd;
     if(MountainX>=600 || CoyoteY <=0)
     {
        MountainSpd*=-1;
     }
    //Change Teton Movement
     TetonY += TetonSpd;
     if(TetonY>=600 || TetonY <=0)
     {
        TetonSpd*=-1;
     }

     if (counter >= 10) {
        text("0:" + counter, 700 / 2, 700 / 2);
      }
      if (counter < 10) {
        text('0:0' + counter, 700 / 2, 700 / 2);
      }
//-------------------------------------------------
    //counter (Group1)
    fill(Red1,Blue1,Green1);//color for counter
    rect(CounterTopX,CounterTopY,CounterHight,CounterWidth);//counter top front
        //cabinets (under counter)
        fill(Red2,Green2,Blue2);//color for cabinets
        rect(CabBaseX,CabBaseY,CabBaseHight,CabBaseWidth);//cabinets base
        fill(Red3,Green3,Blue3);//fill for cabinet door
        rect(RtCabDoorX,CabDoorY,CabDoorHight,CabDoorWidth);//cabinet door right
        rect(LfCabDoorX,CabDoorY,CabDoorHight,CabDoorWidth);//cabinet door left
    //upper cupboards(group2)
    fill(Red4,Green4,Blue4);//color for cabinets
    rect(CupBaseX,CupBaseY,CupBaseHight,CupBaseWidth);//cabinets base
    fill(Red5,Green5,Blue5);//fill for cabinet door
    rect(RtCupDoorX, RtCupDoorY, RtCupDoorHight, RtCupDoorWidth);//cabinet door right
    fill(Red5,Green5,Blue5);//knob color
    circle(KnobX,KnobY,KnobCirc);//knob for cupboard door
    //window(group3)++
    fill(Red6,Blue6,Green6);//window color
    rect(FrameLeftX,FrameLeftY,FrameLeftHight,FrameLeftWidth);//window frame left
    rect(FrameRightX, FrameRightY, FrameRightHight, FrameRightWidth);//window frame right
    rect(FrameTopX, FrameTopY, FrameTopHight, FrameTopWidth);//window frame Top
    rect(FrameBotX, FrameBotY, FrameBotHight, FrameBotWidth);//window frame Bottom
    rect(FrameCenterX, FrameCenterY, FrameCenterHight, FrameCenterWidth);//window frame center horz
        //outside
        fill(Red7,Blue7,Green7);
        rect(OutTopX, OutTopY, OutTopHight, OutTopWidth);//outside color top
        rect(OutBotX, OutBotY, OutBotHight, OutBotWidth);//outside color bottom
    //fridge(group4)
    fill(Red8,Blue8,Green8);
    rect(FrgTopX,FrgTopY,FrgTopHight,FrgTopWidth);//fridge top 
    rect(FrgBotX,FrgBotY,FrgBotHight,FrgBotWidth);//fridge bottom
    fill(Red9,Blue9,Green9);//middle area color
    rect(FrgGapX,FrgGapY,FrgGapHight,FrgGapWidth);//fridge middle divide
    //food(group5)
        //cereal box
        fill(Red10,Blue10,Green10);
        rect(BoxX, BoxY, BoxHight, BoxWidth);
        //apple
        fill(Red11,Blue11,Green11);
        ellipse(AppleX, AppleY, AppleHight, AppleWidth);
    
        counter++;   
if(counter > 1000){
    CounterTopX = random(50,150); 
    CounterTopY = random(100,350); 
    CounterHight = random(100,350);
    CounterWidth =random(50,150);
    CabBaseX = random(50,150);
    CabBaseY = random(100,350); 
    CabBaseHight = random(100,400);
    CabBaseWidth = random(50,150);
    RtCabDoorX = random(50,150);
    LfCabDoorX = random(100,400);
    CabDoorY = random(100,350);
    CabDoorHight = random(100,400);
    CabDoorWidth = random(50,150);
    CupBaseX = random(50,150);
    CupBaseY = random(50,150);
    CupBaseHight = random(100,400);
    CupBaseWidth = random(100,400);
    RtCupDoorX = random(50,150); 
    RtCupDoorY = random(50,150); 
    RtCupDoorHight = random(100,400); 
    RtCupDoorWidth = random(100,400);
    KnobX = random(50,150);  
    KnobY = random(100,350);
    KnobCirc = random(50,150);
    FrameLeftX = random(100,400);   
    FrameLeftY = random(100,400); 
    FrameLeftHight = random(50,150);
    FrameLeftWidth = random(100,400);
    FrameRightX = random(100,400);
    FrameRightY = random(100,400);
    FrameRightHight = random(50,150); 
    FrameRightWidth = random(100,400);
    FrameTopX = random(100,400);
    FrameTopY = random(100,400);
    FrameTopHight = random(100,350);
    FrameTopWidth = random(50,150);
    FrameBotX = random(100,400);
    FrameBotY = random(100,400);
    FrameBotHight = random(100,400);
    FrameBotWidth = random(50,150);
    FrameCenterX = random(100,400);
    FrameCenterY = random(100,400);
    FrameCenterHight = random(100,400); 
    FrameCenterWidth = random(50,150);
    OutTopX = random(100,400);
    OutTopY = random(100,400);
    OutTopHight = random(100,400);
    OutTopWidth = random(100,400);
    OutBotX = random(10,400);
    OutBotY = random(100,400);
    OutBotHight = random(100,400);
    OutBotWidth = random(50,150);
    FrgTopX = random(100,400);
    FrgTopY = random(100,400);
    FrgTopHight = random(100,400); 
    FrgTopWidth = random(100,400);
    FrgBotX = random(100,350);
    FrgBotY = random(100,350);
    FrgBotHight = random(100,350);
    FrgBotWidth = random(100,350);
    FrgGapX = random(100,350);
    FrgGapY = random(100,350);
    FrgGapHight = random(100,350);
    FrgGapWidth = random(50,150);
    BoxX = random(100,350);
    BoxY = random(100,350);
    BoxHight = random(50,150);
    BoxWidth = random(50,150);
    AppleX = random(100,350);
    AppleY = random(100,350);
    AppleHight = random(50,150);
    AppleWidth = random(50,150);
    Red1 = random(255); 
    Red2 = random(255);
    Red3 = random(255);
    Red4 = random(255);
    Red5 = random(255);
    Red6 = random(255);
    Red7 = random(255);
    Red8 = random(255);
    Red9 = random(255);
    Red10 = random(255);
    Red11 = random(255);
    Blue1 = random(255);
    Blue2 = random(255);
    Blue3 = random(255);
    Blue4 = random(255);
    Blue5 = random(255);
    Blue6 = random(255);
    Blue7 = random(255);
    Blue8 = random(255);
    Blue9 = random(255);
    Blue10 = random(255);
    Blue11 = random(255);
    Green1 = random(255);
    Green2 = random(255);
    Green3 = random(255);
    Green4 = random(255);
    Green5 = random(255);
    Green6 = random(255);
    Green7 = random(255);
    Green8 = random(255);
    Green9 = random(255);
    Green10 = random(255);
    Green11 = random(255);
    counter = 0;
    }
    
    while(counter == 500){
        Red1 = random(255); 
        Red2 = random(255);
        Red3 = random(255);
        Red4 = random(255);
        Red5 = random(255);
        Red6 = random(255);
        Red7 = random(255);
        Red8 = random(255);
        Red9 = random(255);
        Red10 = random(255);
        Red11 = random(255);
        Blue1 = random(255);
        Blue2 = random(255);
        Blue3 = random(255);
        Blue4 = random(255);
        Blue5 = random(255);
        Blue6 = random(255);
        Blue7 = random(255);
        Blue8 = random(255);
        Blue9 = random(255);
        Blue10 = random(255);
        Blue11 = random(255);
        Green1 = random(255);
        Green2 = random(255);
        Green3 = random(255);
        Green4 = random(255);
        Green5 = random(255);
        Green6 = random(255);
        Green7 = random(255);
        Green8 = random(255);
        Green9 = random(255);
        Green10 = random(255);
        Green11 = random(255);
    }
}

