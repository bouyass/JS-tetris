
var x1 = 0
var x2 = 0
var x3 = 0
var x4 = 0

var y1 = 00
var y2 = 20
var y3 = 40
var y4 = 60

const width = 20 
const height = 20

var pieceNumber = 0

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

    

}

function clearRect(){

        ctx.clearRect(x1,y1,width,height)
        ctx.clearRect(x2,y2,width,height)
        ctx.clearRect(x3,y3,width,height)
        ctx.clearRect(x4,y4,width,height)
    

}

pieceNumber()
drawRect()

// this function will provide us the number corresponding to the next piece to draw 
// taking into consideration the position of each piece we will have 19 number

function randomPiece(){
    pieceNumber = Math.floor(Math.random() * 18)
}



setInterval(function(){
    
    if ( y4 < 400){
    clearRect()
    y1 = y1 + 20
    y2 = y2 + 20
    y3 = y3 + 20
    y4 = y4 + 20
    drawRect()
    }
    
},1000)

