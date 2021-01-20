function setup()
{
    createCanvas(700, 700);
}

function draw()
{
    background(223, 204, 182);


    //border
    fill(129, 77, 16);
    rect(0,670,700,30);//bottom
    rect(0,0,30,700);//right side
    rect(670,0,30,700);//left side
    rect(0,0,700,30); //top


    //counter 
    fill(64, 102, 138);//color for counter
    rect(30,550,490,30);//counter top front
        
        //cabinets (under counter)
        fill(185, 145, 85)//color for cabinets
        rect(30,580,490,90);//cabinets base
        fill(185, 145, 105);//fill for cabinet door 
        rect(50, 590, 150,80);//cabinet door right
        rect(300,590, 150,80);//cabinet door left

    //upper cupboards
    fill(185, 145, 85);//color for cabinets
    rect(30,70,190,290);//cabinets base
    fill(185, 145, 105);//fill for cabinet door 
    rect(50, 90, 150,250);//cabinet door right
    fill(195,145,105);//knob color
    circle(70,310,15);//knob for cupboard door 

    //window
    fill(200,200,200)//window color
    rect(290,200,20,200);//window frame left
    rect(490,200,20,200);//window frame right
    rect(290,400,220,20);//window frame bottom
    rect(290,180,220,20);//window frame top
    rect(290,300,220,10);//window frame center horz
        //outside
        fill(79, 150, 233);
        rect(310,200,180,100);//outside color top
        rect(310,310,180,90);

    //fridge
    fill(0,0,0);
    rect(525,150, 145,200);//fridge top 
    rect(525,370, 145,300);//fridge bottom
    fill(50,50,50);//middle area color
    rect(525,345,145,25);//fridge middle divide

    //food
        //cereal box
        fill(130,40,120);
        rect(190,500,50,60);
        //apple
        fill(52, 197, 39);
        ellipse(120,550,30,35);

   //signature
   fill(225,225,255);
   textSize(20);
   text('A Calm Kitchen', 10,25);
   textSize(30);
   text('Gradey Cashin', 495,695); 
}