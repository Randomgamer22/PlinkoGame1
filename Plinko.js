class Plinko {
    constructor(x, y, radius) {
        var options = {
           isStatic: true 
        }

        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius;

        World.add(world, this.body);
    }

    display() {
        push();
        ellipseMode(CENTER);
        fill("white");
        translate(this.body.position.x, this.body.position.y);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}