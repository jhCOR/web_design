const canvas = document.getElementById("customCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c"
ctx.lineWidth = 0.5;

let status = [];
let currentPoint = -1;
let painting = false;

function startPainting(event) {
    painting = true;

}

function stopPainting(event) {
    painting = false;
    if(event.type != 'mouseout' && event.type != 'mouseleave'){
        ++currentPoint;
        
        status[currentPoint] = ctx.getImageData(0,0,canvas.width, canvas.height);
    }
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }

}

