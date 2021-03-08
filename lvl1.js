class Maze{

    constructor(){
        this.wall1=createSprite(displayWidth-200,displayHeight-50,30,200)
        this.wall2=createSprite(displayWidth-150,displayHeight-275,250,30)
        this.wall3=createSprite(displayWidth-150,displayHeight/2-50,30,250)
        this.wall4=createSprite(displayWidth-400,displayHeight/2+260,30,250)
        this.wall5=createSprite(displayWidth/2,displayHeight-150,250,30)
        this.wall6=createSprite(displayWidth/2+100,displayHeight/2-70,400,30)
        this.wall7=createSprite(displayWidth/2+20,displayHeight/2+100,230,30)
        this.wall8=createSprite(displayWidth/2-80,displayHeight/2+10,30,180)
        this.wall9=createSprite(displayWidth/2+80,displayHeight/2-160,30,180)
        this.wall10=createSprite(displayWidth/2+165,displayHeight/2-240,200,30)
        this.wall11=createSprite(displayWidth/2-230,displayHeight/2+190,30,200)
        this.wall12=createSprite(150,100,30,200)
        this.wall13=createSprite(130,displayHeight/2,300,30)
        this.wall14=createSprite(250,displayHeight/2+190,300,30)
        this.wall15=createSprite(displayWidth/2-250,150,30,300)
        this.wallGroup=createGroup();
        this.wallGroup.add(this.wall1);
        this.wallGroup.add(this.wall2);
        this.wallGroup.add(this.wall3);
        this.wallGroup.add(this.wall4);
        this.wallGroup.add(this.wall5);
        this.wallGroup.add(this.wall6);
        this.wallGroup.add(this.wall7);
        this.wallGroup.add(this.wall8);
        this.wallGroup.add(this.wall9);
        this.wallGroup.add(this.wall10);
        this.wallGroup.add(this.wall11);
        this.wallGroup.add(this.wall12);
        this.wallGroup.add(this.wall13);
        this.wallGroup.add(this.wall14);
        this.wallGroup.add(this.wall15);

        
    }
    
    display(){
        if(player.isTouching(this.wall1)){
            player.x=displayWidth-100;
           player.y=displayHeight-100;
          }
    
    drawSprites();
    }
    }