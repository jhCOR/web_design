var BRUSH_COLOR = '#000000';

function setBrushColor(event){
    BRUSH_COLOR = event.target.style['background-color']
    ctx.strokeStyle = BRUSH_COLOR
}

function setBrushSize(event){
    console.log(event.target.value);
    ctx.lineWidth = event.target.value;
    
}