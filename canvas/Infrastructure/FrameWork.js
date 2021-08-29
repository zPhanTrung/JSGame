


export function getTick(){
    var d = new Date()
    // var milisecond = d.getMilliseconds()
    // var seconnd = d.getSeconds()*1000
    return d.getTime()
}


export function drawRect(x, y, width, height, radius, color,ctx){
    ctx.beginPath()
    ctx.moveTo(x+width/2, y);                
    ctx.arcTo(x+width, y, x+width, y+height/2,radius)
    ctx.arcTo(x+width, y+height, x+width/2, y+height,radius)
    ctx.arcTo(x, y+height, x, y+height/2,radius)
    ctx.arcTo(x, y, x+width, y,radius)
    ctx.fillStyle = color
    ctx.fill()
}

// export function drawRectWithText(rect, text, alig ){
//     //
// }








