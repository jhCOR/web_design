function windowResizer(handlerPair, timer) {
    var delay = 300;
    window.addEventListener('resize', function () {
        clearTimeout(timer);
        let pageWidth = availableWidth();
        for(let i = 0 ; i<handlerPair.length; i++){
            if (handlerPair[i].option(pageWidth)) {
                timer = setTimeout(handlerPair[i].callback, delay);
            }
        }
        return timer;
    });
}

function resizeText(elements, size){
    
    return function(){
        if(typeof size != 'string'){
            throw new Error('variable "size" is not a string');
        }
        elements.map(element=>element.style.fontSize = size);
    }
}

function availableWidth(){
    let windowWidth = window.innerWidth ? window.innerWidth : null;
    let screenWidth = screen.width ? screen.width : null;
    let pageWidth = Math.min(windowWidth, screenWidth);
    //console.log(windowWidth, screenWidth)
    return screenWidth;
}