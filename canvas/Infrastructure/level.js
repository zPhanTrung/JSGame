

import {Button} from "../ObjectInGame/button.js"
import {setIsUpdate} from "../Infrastructure/inputhandle.js"

export class Level{
    #ctx
    #buttons = []
    constructor(){

        var button = new Button(100,100,200,100)
        this.#buttons.push(button)
        button = new Button(400,100,200,100)
        this.#buttons.push(button)
        button = new Button(100,300,200,100)
        this.#buttons.push(button)
        button = new Button(400,300,200,100)
        this.#buttons.push(button)
        var canvas = document.getElementById('canvas')
        this.#ctx = canvas.getContext('2d')
    }

    

    update(){
        var size = this.#buttons.length
        for(var i=0;i<size;i++){
            this.#buttons[i].update()
            
        }
        setIsUpdate(true)
    }
    render(){
        this.#ctx.clearRect(0,0,900,800)

        var size = this.#buttons.length
        for(var i=0;i<size;i++){
            this.#buttons[i].render(this.#ctx)
        }
        
    }
}

  