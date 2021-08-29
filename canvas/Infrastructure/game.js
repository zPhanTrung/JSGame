
import {Level} from "./level.js"

export class Game{
    #level

    constructor(){
        this.#level = new Level()
    }
    
    init(){
        
    }

    update(){
        this.#level.update()
    }

    render(){
        this.#level.render()
    }

    inputhandle(){
        
    }

}













                    

        

        
