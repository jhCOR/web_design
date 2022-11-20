function windowResizer(callback, timer, option) {
    var delay = 300;

    window.addEventListener('resize', function () {
        let pageWidth = availableWidth();
        console.log("reesize", pageWidth)
        clearTimeout(timer);
        console.log('resize');
        if (option(pageWidth)) {
            timer = setTimeout(callback, delay);
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
