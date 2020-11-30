class Game {
    constructor() { }

    getState() {
        var gsref = database.ref('gameState')
        gsref.on('value',function(data){
            gameState = data.val();
        })
    }

    updateState(state) {
        database.ref('/').update({
            gameState:state
        })

    }

    start() {
        if(gameState===0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        
    }

    play(){
        form.hide()
        textSize(32)
text ("gamestart",150,100)
Player.getPlayerInfo()
if (allPlayers){
    var y=130
    for (var play in allPlayers){
        if (play==="player"+player.index)
        fill("red") 
        else 
        fill("black")
        text (allPlayers [play].name+":"+allPlayers[play].distance,200,y)
        y=y+20 

    }
    
}
if (keyDown(UP_ARROW)&&(player.index!==null))
console.log ("keyUp")
player.distance=player.distance+50
player.update ()

    }
}