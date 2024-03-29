
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

var downFallSpeed = 20

var piecePos = 0

var gameOver = false

var fillLine = 30

var canvas = document.getElementById("can");

var ctx = canvas.getContext("2d");

document.addEventListener("keypress", userInteractions)
document.addEventListener('keyup',keyupHandler)

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

          piecePos = 0
   
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

          piecePos = 1

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

          piecePos = 0
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

          piecePos = 1

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

          piecePos = 2
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

          piecePos = 3

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
    y1 = y1 + downFallSpeed
    y2 = y2 + downFallSpeed
    y3 = y3 + downFallSpeed
    y4 = y4 + downFallSpeed
}


function pieceRotation(){
    clearRect()
    switch(pieceNumber){
        case 0:
           if (piecePos === 0){
              x1 = x2 + 20
              x3 = x2 - 20
              x4 = x2 - 40

              y1 = y2 
              y3 = y2
              y4 = y2

              piecePos = 1
           }else{
              x1 = x2 
              x3 = x2 
              x4 = x2 

              y1 = y2 - 20
              y3 = y2 + 20
              y4 = y2 + 40
             
              piecePos = 0
           }
        break
        case 1:
         
            if (piecePos === 0){
              x1 = x2 + 20
              x3 = x2 - 20
              x4 = x2 - 40

              y1 = y2 
              y3 = y2
              y4 = y2

              piecePos = 1
           }else{
              x1 = x2 
              x3 = x2 
              x4 = x2 

              y1 = y2 - 20
              y3 = y2 + 20
              y4 = y2 + 40
             
              piecePos = 0
           }
       
        break
        case 2:
         switch(piecePos){
           case 0:
              x1 = x2 +20
              y1 = y2 +20
              x3 = x2 -20
              y3 = y2  
              x4 = y2 -20
              y4 = y2 -20

              piecePos = 1
           break
           case 1:
           break
           case 2:
           break
           case 3:
           break
         }
        

    }
    drawRect()
}

function userInteractions(event){
    var code = event.keyCode
    console.log(code)
    if (code  === 38 ){
        
        pieceRotation()
        
    }else if( code === 37){
        clearRect()
        x1 = x1 - 20
        x2 = x2 - 20
        x3 = x3 - 20
        x4 = x4 - 20
        drawRect()
    }else if( code === 39){
        clearRect()
        x1 = x1 + 20
        x2 = x2 + 20
        x3 = x3 + 20
        x4 = x4 + 20
        drawRect()
    }else{
        downFallSpeed+= 1
        console.log(event)
    }
}


function keyupHandler(event){
  if (event.keyCode === 40){
    downFallSpeed-=1
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

