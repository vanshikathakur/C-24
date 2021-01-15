const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    ground = new Ground(600,height,2000,20);
    pig1 = new Pig(810,350,40,40);
    pig2 = new Pig(810,220,40,40);
    logs1 = new Logs(810,260,300,PI/2);
    logs2 = new Logs(810,180,300,PI/2);
    logs3 = new Logs(760,120,150,PI/7);
    logs4 = new Logs(870,120,150,-PI/7);
    bird= new Bird(200,200,45,45);
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(logs.body.angle);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    logs1.display();
    logs2.display();
    logs3.display();
    logs4.display();
    bird.display();
}