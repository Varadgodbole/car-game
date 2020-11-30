class Player {

    constructor() {
this.index= null
this.distance=0
this.name=null
    }

    getCount() {
       database.ref("playerCount").on ('value',function(lol){
           playerCount=lol.val()
        
       })

       
       
    }

    updateCount(count) {
      database.ref('/').update ({
          playerCount : count 

      })

    }

    update() {
        var playerIndex="players/player"+this.index 
        database.ref(playerIndex).set({
            name:this.name ,
            distance:this.distance
        })
    }
    static getPlayerInfo (){
        database.ref("players").on("value",function(lol){
            allPlayers=lol.val()
        })
    }
}