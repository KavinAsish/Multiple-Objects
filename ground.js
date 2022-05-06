class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:false
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

    display()
{
  push();
  translate(this.body.position.x,this.body.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  
  angle +=0.1;
 
 
  
}
}
