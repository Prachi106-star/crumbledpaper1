class Paper{
constructor(){
    var options = {
        isStatic : false ,
        restitution : 0.3 ,
        friction : 0.5 ,
        density : 1.2 
    }
     this.body = Bodies.circle(200,200,50, options);
     
     World.add(world, this.body);
    
}
display(){
    fill("red");
    ellipse(200,200,50,50);
     }
}