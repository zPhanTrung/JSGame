
import {Vector2D} from "./vector2D.js"

var canvas = document.getElementById('canvas')

const keyboard_up={
    up:"true",
    down:"true",
    left:"true",
    right:"true"
}

const keyboard_down={
    up:"false",
    down:"false",
    left:"false",
    right:"false"
}

const mouse_press={
    right:"false",
    left:"false"
}

let mousePos_x 
let mousePos_y

canvas.addEventListener("mousemove", function (event)   {
    mousePos_x = event.clientX
    mousePos_y = event.clientY
}); 

export function getMouseState(){
    return mouse_press
}


export function getMousePos(){
    return new Vector2D(mousePos_x,mousePos_y)
}


let b_isUpdate = false
export function setIsUpdate(bool){
    b_isUpdate=bool
}

canvas.addEventListener("mousedown",function(event){

    var button = event.button
    if(b_isUpdate==true){
        switch(button){
            case 0: mouse_press.left="true"
                break
            case 2: mouse_press.right="true"
                break
            default:
                break    
        }
    }
    
})

canvas.addEventListener("mouseup",function(event){

    var button = event.button
    if(b_isUpdate==true){
        b_isUpdate=false
        switch(button){
            case 0: mouse_press.left="false"
                break
            case 2: mouse_press.right="false"
                break
            default:
                break    
        }
    }
    
})

        