const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  line1 = createSprite(240, 795, 480, 10);
  line2 = createSprite(475, 50, 10, 1490);
  line2 = createSprite(5, 50, 10, 1490);3
  line1 = createSprite(240, 5, 480, 10);
  ground = new Ground(240,780,480,20);

//Division
for (var k = 0; k<=width; k = k+80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

for (var k = 0; k<=width; k = k+80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

//Plinkos
for (var j = 40; j <= width; j = j+50) {
  plinkos.push(new Plinko(j, 75));
}
for (var j = 15; j <= width-10; j = j+50) {
  plinkos.push(new Plinko(j, 175));
}
for (var j = 40; j <= width; j = j+50) {
  plinkos.push(new Plinko(j, 275));
}
for (var j = 15; j <= width-10; j = j+50) {
  plinkos.push(new Plinko(j, 375));
}
  
}



function draw() {
  background(0);
  Engine.update(engine);
  //background(255,255,255);  

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }

  for(var x = 0; x<divisions.length; x++){
     divisions[x].display();
  }

  for(var x = 0; x<plinkos.length; x++){
    plinkos[x].display();
 }

 for(var x = 0; x<particles.length; x++){
  particles[x].display();
}

  ground.display();
  drawSprites();
}