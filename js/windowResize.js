function windowResizer(callback, timer) {
    var delay = 300;

    window.addEventListener('resize', function () {
        clearTimeout(timer);
        timer = setTimeout(callback, delay);
        return timer
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
