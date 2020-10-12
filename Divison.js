class Division {
    constructor(x, y, height) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, 10, height, options);
        this.height = height;
        this.width = 10;

        World.add(world, this.body);

    }

    display() {
    var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
    }
}