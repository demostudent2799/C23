class Ground{
    constructor(x,y,width,height){

        var ground_options ={
            isStatic: true
        }
    
       this.ground = Bodies.rectangle(x,y,width,height,ground_options);
       this.width=width;
       this.height=height;
        World.add(world,this.ground);
    }

    show(){
var dim=this.ground.position;
rectMode(CENTER);
fill("green");
    rect(dim.x,dim.y,this.width,this.height);

    }
};