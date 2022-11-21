const canvas = document.getElementById('customCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 0.5;

let status = [];
let currentPoint = -1;
let painting = false;
let isMobile = false;
function startPainting(event) {
    painting = true;
}

function stopPainting(event) {
    painting = false;
    if (event.type != 'mouseout' && event.type != 'mouseleave') {
        ++currentPoint;
        status[currentPoint] = ctx.getImageData(0, 0, canvas.width, canvas.height);
    }
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function startTouchPainting(event) {
    painting = true;
    ctx.beginPath();
    let pos = getTouchPosition(event);
    ctx.moveTo(pos.x, pos.y);
}

function stopTouchPainting(event) {
    painting = false;

    if (event.type != 'touchend') {
        console.log('stopTouchPainting', painting);
        ++currentPoint;
        status[currentPoint] = ctx.getImageData(0, 0, canvas.width, canvas.height);
    }
}

function getTouchPosition(event) {
    return {
        x: event.touches[0].pageX - event.target.offsetLeft,
        y: event.touches[0].pageY - event.target.offsetTop + document.documentElement.scrollTop,
    };
}

function onTouchMove(event) {
    if (!painting) {
        ctx.beginPath();
        let pos = getTouchPosition(event);
        ctx.moveTo(pos.x, pos.y);
    } else {
        let pos = getTouchPosition(event);
        console.log(pos.x, pos.y);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
    }
}