
var x1 = 300
var x2 = 300
var x3 = 300
var x4 = 300

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



// this function will provide us the number corresponding to the next piece to draw 
// taking into consideration the position of each piece we will have 19 number

function randomPiece(){
    pieceNumber = Math.floor(Math.random() * 18)
    console.log("la prochaine pièce "+ pieceNumber)
}


function drawFirstRect(){

    switch(pieceNumber){
        case 0:
          x1 = 300
          x2 = 300
          x3 = 300
          x4 = 300

          y1 = 00
          y2 = 20
          y3 = 40
          y4 = 60

          ctx.fillStyle = 'green';
        break
        case 1:
          x1 = 280
          x2 = 300
          x3 = 320
          x4 = 340

          y1 = 00
          y2 = 00
          y3 = 00
          y4 = 00

          ctx.fillStyle = 'green';
        break
        case 2:
          x1 = 300
          x2 = 300
          x3 = 300
          x4 = 280

          y1 = 00
          y2 = 20
          y3 = 40
          y4 = 40

          ctx.fillStyle = 'red';
        break
        case 3:
          x1 = 280
          x2 = 280
          x3 = 300
          x4 = 320

          y1 = 00
          y2 = 20
          y3 = 20
          y4 = 20

          ctx.fillStyle = 'red';
        break
        case 4:
          x1 = 320
          x2 = 300
          x3 = 300
          x4 = 300

          y1 = 00
          y2 = 00
          y3 = 20
          y4 = 40

          ctx.fillStyle = 'red';
        break
        case 5:
          x1 = 280
          x2 = 300
          x3 = 320
          x4 = 320

          y1 = 00
          y2 = 00
          y3 = 00
          y4 = 20

          ctx.fillStyle = 'red';
        break
        case 6:
          x1 = 300
          x2 = 300
          x3 = 300
          x4 = 320

          y1 = 00
          y2 = 20
          y3 = 40
          y4 = 40

          ctx.fillStyle = 'yellow';
        break
        case 7:
          x1 = 320
          x2 = 300
          x3 = 280
          x4 = 280

          y1 = 00
          y2 = 00
          y3 = 00
          y4 = 20

          ctx.fillStyle = 'yellow';
        break
        case 8:
          x1 = 280
          x2 = 300
          x3 = 300
          x4 = 300

          y1 = 00
          y2 = 00
          y3 = 20
          y4 = 40

          ctx.fillStyle = 'yellow';
        break
        case 9:
          x1 = 320
          x2 = 320
          x3 = 300
          x4 = 280

          y1 = 00
          y2 = 20
          y3 = 20
          y4 = 20

          ctx.fillStyle = 'yellow';
        break
        case 10:
          x1 = 280
          x2 = 300
          x3 = 280
          x4 = 300

          y1 = 00
          y2 = 00
          y3 = 20
          y4 = 20

          ctx.fillStyle = 'pink';
        break
        case 11:
          x1 = 320
          x2 = 300
          x3 = 300
          x4 = 280

          y1 = 00
          y2 = 00
          y3 = 20
          y4 = 20

          ctx.fillStyle = 'blue';
        break
        case 12:
          x1 = 300
          x2 = 300
          x3 = 320
          x4 = 320

          y1 = 00
          y2 = 20
          y3 = 20
          y4 = 40

          ctx.fillStyle = 'blue';
        break
        case 13:
          x1 = 280
          x2 = 300
          x3 = 300
          x4 = 320

          y1 = 00
          y2 = 00
          y3 = 20
          y4 = 20

          ctx.fillStyle = 'blue';
        break
        case 14:
          x1 = 320
          x2 = 320
          x3 = 300
          x4 = 280

          y1 = 00
          y2 = 20
          y3 = 20
          y4 = 20

          ctx.fillStyle = 'blue';
        break
        case 15:
          x1 = 280
          x2 = 300
          x3 = 320
          x4 = 300

          y1 = 00
          y2 = 00
          y3 = 00
          y4 = 20

          ctx.fillStyle = 'orange';
        break
        case 16:
          x1 = 300
          x2 = 300
          x3 = 300
          x4 = 280

          y1 = 00
          y2 = 20
          y3 = 40
          y4 = 20

          ctx.fillStyle = 'orange';
        break
        case 17:
          x1 = 280
          x2 = 300
          x3 = 320
          x4 = 300

          y1 = 20
          y2 = 20
          y3 = 20
          y4 = 00

          ctx.fillStyle = 'orange';
        break
        case 18:
          x1 = 300
          x2 = 300
          x3 = 300
          x4 = 320

          y1 = 00
          y2 = 20
          y3 = 40
          y4 = 20

          ctx.fillStyle = 'orange';
        break
    
        
    }

    ctx.fillRect(x1,y1,width,height)
    ctx.fillRect(x2,y2,width,height)
    ctx.fillRect(x3,y3,width,height)
    ctx.fillRect(x4,y4,width,height)

    

}

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


function pieceDownfall(){
    

    switch(pieceNumber){

        case 0:
        console.log("piece "+ pieceNumber +" m "+ y4)
          y1 = y1 + 20
          y2 = y2 + 20
          y3 = y3 + 20
          y4 = y4 + 20

        break
        case 1:
        console.log("piece "+ pieceNumber +" m "+ y4)
          y1 = y1 + 20
          y2 = y2 + 20
          y3 = y3 + 20
          y4 = y4 + 20
          console.log("piece "+ pieceNumber +" m "+ y4)
        break
        case 2:
        console.log("piece "+ pieceNumber +" m "+ y4)
          y1 = y1 + 20
          y2 = y2 + 20
          y3 = y3 + 20
          y4 = y4 + 20

        break
        case 3:
        console.log("piece "+ pieceNumber +" m "+ y4)
          y1 = y1 + 20
          y2 = y2 + 20
          y3 = y3 + 20
          y4 = y4 + 20

        break
        case 4:
        console.log("piece "+ pieceNumber +" m "+ y4)
          y1 = y1 + 20
          y2 = y2 + 20
          y3 = y3 + 20
          y4 = y4 + 20

        break
        case 5:
        console.log("piece "+ pieceNumber +" m "+ y4)
          y1 = y1 + 20
          y2 = y2 + 20
          y3 = y3 + 20
          y4 = y4 + 20

        break
        case 6:
        console.log("piece "+ pieceNumber +" m "+ y4)
          y1 = y1 + 20
          y2 = y2 + 20
          y3 = y3 + 20
          y4 = y4 + 20

        break
        case 7:
        console.log("piece "+ pieceNumber +" m "+ y4)
          y1 = y1 + 20
          y2 = y2 + 20
          y3 = y3 + 20
          y4 = y4 + 20

        break
        case 8:
        console.log("piece "+ pieceNumber +" m "+ y4)
          y1 = y1 + 20
          y2 = y2 + 20
          y3 = y3 + 20
          y4 = y4 + 20

        break
        case 9:
        console.log("piece "+ pieceNumber +" m "+ y4)
          y1 = y1 + 20
          y2 = y2 + 20
          y3 = y3 + 20
          y4 = y4 + 20

        break
        case 10:
        console.log("piece "+ pieceNumber +" m "+ y4)
          y1 = y1 + 20
          y2 = y2 + 20
          y3 = y3 + 20
          y4 = y4 + 20
          console.log("piece "+ pieceNumber +" m "+ y4)
        break
        case 11:
        console.log("piece "+ pieceNumber +" m "+ y4)
          y1 = y1 + 20
          y2 = y2 + 20
          y3 = y3 + 20
          y4 = y4 + 20
          
        break
        case 12:
        console.log("piece "+ pieceNumber +" m "+ y4)
          y1 = y1 + 20
          y2 = y2 + 20
          y3 = y3 + 20
          y4 = y4 + 20

        break
        case 13:
        console.log("piece "+ pieceNumber +" m "+ y4)
          y1 = y1 + 20
          y2 = y2 + 20
          y3 = y3 + 20
          y4 = y4 + 20

        break
        case 14:
        console.log("piece "+ pieceNumber +" m "+ y4)
          y1 = y1 + 20
          y2 = y2 + 20
          y3 = y3 + 20
          y4 = y4 + 20

        break
        case 15:
        console.log("piece "+ pieceNumber +" m "+ y4)
          y1 = y1 + 20
          y2 = y2 + 20
          y3 = y3 + 20
          y4 = y4 + 20

        break
        case 16:
        console.log("piece "+ pieceNumber +" m "+ y4)
          y1 = y1 + 20
          y2 = y2 + 20
          y3 = y3 + 20
          y4 = y4 + 20

        break
        case 17:
        console.log("piece "+ pieceNumber +" m "+ y4)
          y1 = y1 + 20
          y2 = y2 + 20
          y3 = y3 + 20
          y4 = y4 + 20

        break
        case 18:
        console.log("piece "+ pieceNumber +" m "+ y4)
          y1 = y1 + 20
          y2 = y2 + 20
          y3 = y3 + 20
          y4 = y4 + 20

        break
    }
}


randomPiece()
drawFirstRect()

setInterval(function(){
    
    if ( y4 < 400){
    clearRect()
    pieceDownfall()
    drawRect()
    }
    
},1000)

