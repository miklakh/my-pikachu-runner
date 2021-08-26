var pikachu,charizard,greninja,lucario,teamrocket,landscape;
var pikachupngImage,pikachubackImage,teamrocket3Image,teamrocket2Image;
var charizard2Image,charizard1pngImage,lucario1Image,greninja1Image,landscapeImage;
var charizard2Group,charizard1Group,lucario1Group,greninja1Group,teamrocket3Group;
var invisibleblock,invisibleblockGroup;
var score = 0;
var GameState = PLAY;


function preload(){
landscape = loadImage("landscape[pngpikachu.png");  
pikachu = loadImage("pikachuback2.png","pikachupng.png");
lucario = loadImage("lucario1.jpg");
greninja = loadImage("greninja1.png");
charizard = loadImage("charizard1,png","charizard2.png");
teamrocket = loadImage("teamrocket2.png","teamrocket3.png");
 }

function setup() {
createCanvas(windowWidth, windowHeight);

lanscape = createSprite(300,300);
landscape.addImage("landscape",landscapeImage)
landscape.velocityY = 2;
  
pikachu = createSprite(50,height-70,20,50);
  
pikachu.addAnimation("running",pikachu_back2.png);
pikachu.addAnimation("run",pikachu_png.png);
pikachu.setCollider('circle',0,0,350)
pikachu.scale = 0.08;

lucario1Group = new Group();
greninja1Group = new Group();
charizard2Group = new Group();
teamrocket3Group = new Group();
invisibleblockGroup = new Group(); 
  
}

function draw() {
background(0);
if (gameState === "play") {
    if(keyDown("left_arrow")){
     pikachu.x = pikachu.x +3;    
    } 
}
 
if(keyDown("right_arrow")){
  pikachu.x = pikachu.x - 3;
  
}

pikachu.velocityY = pikachu.velocityY + 0.8

if(landscape.y > 400){
    tower.y = 300
} 
 
//to add troubles;
if(lucario1Group.isTouching(pikachu)){
    pikachu.velocity = 0;  
} 
if(charizard2Group.isTouching(pikachu)){
    pikachu.velocityY = 0;
}
if(greninja1Group.isTouching(pikachu)){
    pikachu.velocityY = 0;
}
if(teamrocket3Group.isTouching(pikachu)){
    pikachu.velocityY = 0;
}
if(invisibleblockGroup.iisTouching(pikachu)){
    pikachu.velocityY = 0;
}

drawSprites();
}

function spawnPokemon(); {
if(frameCount % 60 === 0) {
var charizard = createSprite(90,-50);
var lucario = createSprite(100,80);
var greninja = createSprite(100,89);
var teamrocket = createSprite(180,90);
var invisibleblock = createSprite(200,15);
invisibleblock.width = charizard.width;
invisibleblock.height = 2;
 
//for charizard...

charizard.x = Math.round(random(120,400));
invisibleblock.x = charizard.x;

charizard.addImage(charizard2Image,charizard2Image);

charizard.velocityY = 1;
invisibleblock.velocityY = 1;

//for greninja...

greninja.x = math.round(random(110,390));
invisibleblock.x = greninja.x;

greninja.addImage(greninja1Image);

greninja.velocityY = 2;
invisibleblock.velocityY = 2;

//for team rocket...

teamrocket.x = Math.round(random(110,390));
invisibleblock.x = teamrocket.x;

teamrocket.addImage(teamrocket2Image,teamrocket3Image);

teamrocket.velocityY = 2;
invisibleblock.velocityY = 2;

//for lucario..

lucario.x = Math.round(random(110,390));
invisibleblock.x = lucario.x;

lucario.addImage(lucario1Image);

lucario.velocityY = 2;
invisibleblock.velocityY = 2;

//assign lifetime to all the variables...
charizard.lifetime = 800;
greninja.lifetime = 800;
lucario.lifetime = 800;
teamrocket.lifetime = 800;
invisibleblock.lifetime = 800;

}   
}

