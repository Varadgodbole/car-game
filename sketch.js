var canvas;
var gameState = 0;
var playerCount = 0;
var database;
var allPlayers;

var form,player,game;

function setup(){
  canvas = createCanvas(400,400);

database=firebase.database ()
game=new Game ()
game.getState ()
game.start ()


}

function draw(){

  background("lightblue");
if(playerCount===4){
  game.updateState(1)
}
if(gameState===1){
  game.play ()
}
  text(mouseX+","+mouseY,mouseX,mouseY)
}