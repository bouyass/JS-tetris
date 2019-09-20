
var x = 10
var y = 10

const width = 20 
const height = 20

var gameOver = false

var fillLine = 30

var canvas = document.getElementById("can");

var ctx = canvas.getContext("2d");

ctx.fillStyle = 'green';



function clearRect(){
    ctx.clearRect(x,y,width,height)
}

function drawRect(){

        ctx.fillRect(x,y,width,height)
        console.log("y = "+ y)

}

drawRect()




setInterval(function(){
    if ( y !== 250){
    clearRect()
    y = y + 20
    drawRect()
    }
    
},1000)

