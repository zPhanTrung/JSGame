
import "./game.js"
import {Game} from "./game.js"
import "./FrameWork.js"
import * as fw from "./FrameWork.js"
const FPS = 30



let _game = new Game()

_game.init()

function loop(){

    var start = fw.getTick()

    _game.render()
    //_game.inputhandle()
    _game.update()
    
    var end = fw.getTick()
    var time = end - start

    if(time<1000/FPS){
        var timeDelay = 1000/FPS-time
        setTimeout(function(){
            window.requestAnimationFrame(loop)
        },timeDelay)
    }

    
    //
}

loop()