class Paperball {
    constructor(x, y) {
        var options = {
          'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
            
        }
        this.image = loadImage("paper.png");
        this.body = Bodies.rectangle(x,y,50,100, options);
        this.width = 50;
        this.height= 100;
       
        World.add(world, this.body);
      }

      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    
      }
}