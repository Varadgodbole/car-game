class Form{
    constructor(){
      this. input = createInput ("name")
    this. button = createButton ("play")
this.greeting= createElement ("h3")
    }


    display(){
       
        var title = createElement ("h2")
      title.html("car racing game")
title.position(130,10)
this.input.position(130,160)
this.button.position (250.200)

this.button.mousePressed (()=> {
    player.name = this.input.value()
   this.greeting.html ("hello"+player.name)
  this. greeting.position(130,160)
  this.input.hide ()
  this.button.hide ()
playerCount++ 
player.updateCount (playerCount)
player.update ()

})

    }
 hide (){
this.greeting.hide()
this.input.hide()
this.button.hide()
}
}