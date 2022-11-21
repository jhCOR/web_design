window.onload = function () {
    let buttonList = document.getElementsByClassName("color");
    
   	for(let button of buttonList){
        button.onclick = setBrushColor
    }
    
    let sizeBar = document.getElementById("customRange3");
    let redoButton = document.getElementById('redo');
    let undoButton = document.getElementById('undo');
    let saveButton = document.getElementById('saveButton');
    let resetButton = document.getElementById('reset');
    let downloadButton = document.getElementById('downloadButton');
    
    sizeBar.onchange = setBrushSize
    saveButton.addEventListener("click", makeCanvasToImage);
    resetButton.addEventListener("click", clearCanvas);
    downloadButton.addEventListener("click", makeCanvasToImageDownload);
    undoButton.addEventListener("click", undo);
    redoButton.addEventListener("click", redo);
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    
    canvas.addEventListener("touchstart",startPainting, false);
	canvas.addEventListener("touchmove",onMouseMove, false);
    canvas.addEventListener("touchend",stopPainting, false);
}