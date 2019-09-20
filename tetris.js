
var x1 = 10
var x2 = 10
var x3 = 10
var x4 = 10

var y1 = 10
var y2 = 30
var y3 = 50
var y4 = 70

const width = 20 
const height = 20

var gameOver = false

var fillLine = 30

var canvas = document.getElementById("can");

var ctx = canvas.getContext("2d");

ctx.fillStyle = 'green';



function drawRect(){

    ctx.fillRect(x1,y1,width,height)
    ctx.fillRect(x2,y2,width,height)
    ctx.fillRect(x3,y3,width,height)
    ctx.fillRect(x4,y4,width,height)
    ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.stroke()
    

}

function clearRect(){

        ctx.clearRect(x1,y1,width,height)
        console.log("y = "+ y)

}

drawRect()




/*setInterval(function(){
    if ( y !== 250){
    clearRect()
    y = y + 20
    drawRect()
    }
    
},1000)*/

