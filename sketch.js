const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plinkos = [], ground, particles = [], divisions = [];

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(240, 780, 480, 40);

  for(var i = 0; i <= width; i += 80) {
    var division = new Division(i, 610, 300);
    divisions.push(division);
  }

  for(var i=40; i<=width; i+=50) {
    plinkos.push(new Plinko(i, 75, 20));
  }
  for(var i=15; i<=width; i+=50) {
    plinkos.push(new Plinko(i, 175, 20));
  }
  for(var i=40; i<=width; i+=50) {
    plinkos.push(new Plinko(i, 275, 20));
  }
  for(var i=15; i<=width; i+=50) {
    plinkos.push(new Plinko(i, 375, 20));
  }

  Engine.run(engine);
}

function draw() {
  background(0);  

  for(var i = 0; i < divisions.length; i++) {
    divisions[i].display();;
  }

  for(var i=0; i<plinkos.length; i++) {
    plinkos[i].display();
  }

  if(frameCount % 90 == 0) {
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 20));
  }

  for(var i=0; i<particles.length; i++) {
    particles[i].display();
  }
  ground.display();

  drawSprites();
}