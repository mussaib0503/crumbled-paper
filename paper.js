class paper {

   constructor(x,y,w,h) 
   {
var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2,
}
this.x=x;
this.y=y;
this.w=w;
this.h=h;
this.body=Bodies.rectangle(x,y,w,h,options);
this.image=loadImage("paper.png");
World.add(world,this.body);
   }
display(){
this.body.position.x=mouseX;
this.body.position.y=mouseY;


var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			imageMode(CENTER)
			
			fill(225)
			rect(0,0,this.w, this.h);

image(this.image,0,0,this.w,this.h);

			pop()

}


}