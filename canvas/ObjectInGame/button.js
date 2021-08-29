
import {GameObject} from "./gameObject.js"
import * as fw from "../Infrastructure/FrameWork.js"
import * as ih from "../Infrastructure/inputhandle.js"
import {Vector2D} from "../Infrastructure/vector2D.js"

export class Button extends GameObject{
    #height
    #width
    
    constructor(x, y, width, height){
        super()
        this.pos_x = x
        this.pos_y = y
        this.#height = height
        this.#width = width        
    }

    render(ctx){
        
        fw.drawRect(
            this.pos_x,
            this.pos_y,
            this.#width,
            this.#height,
            10, 
            this.getColor(),
            ctx)
    }

    update(){
        const mosueState = ih.getMouseState()
        var mousePos = new Vector2D(ih.getMousePos().getX(),ih.getMousePos().getY())
        var mouse_x = mousePos.getX()
        var mouse_y = mousePos.getY()
        if(mosueState.left=="true"){
                    
            if(this.pos_x <= mouse_x && this.pos_x+this.#width >= mouse_x)
                if(this.pos_y <= mouse_y && this.pos_y+this.#height >= mouse_y){
                    console.log(mouse_x)
                    this.setColor(1,0,0,0.6)
                }
            
        }
        
    }




}