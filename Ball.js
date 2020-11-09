class Ball{

    constructor(){

        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2

        }

        this.body = Bodies.circle(300,250,40,options);
        World.add(world,this.body);

    }

    display(){
        ellipseMode(CENTER);
        fill("red");
        ellipse(this.body.position.x,this.body.position.y,40,40);
    }

}