
import "../Infrastructure/FrameWork.js"
//import * as fw from "../Infrastructure/FrameWork.js"




export class GameObject{
    #pos_x
    #pos_y
    #color
    constructor()
    {
        this.#pos_x = 100;
        this.#pos_y = 100;
        this.#color = 'rgba(0,0,0,0.3)'
    }

    update(){
        
    }

    render(){
        
    }

    setColor(r,g,b,a) {
        this.#color = `rgba(${r},${g},${b},${a})`
    }

    getColor(){
        return this.#color
    }
    

    
}