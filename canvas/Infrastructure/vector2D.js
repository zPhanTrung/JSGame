

export class Vector2D {
    #x
    #y
    constructor(x,y){
        this.#x = x
        this.#y = y
    }

    setX(x){
        this.#x = x
    }
    setX(y){
        this.#y = y
    }
    getX(){
        return this.#x
    }
    getY(){
        return this.#y
    }
    

    add(vector){
        this.#x += vector.getX()
        this.#y += vector.getY()
    }

    sub(vector){
        this.#x -= vector.getX()
        this.#y -= vector.getY()
    }
    mul(number){
        this.#x *= number
        this.#y *= number
    }
    div(number){
        this.#x /= number
        this.#y /= number
    }
}


