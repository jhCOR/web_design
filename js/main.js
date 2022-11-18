window.onload = function (){
    var timer = null;
    //let windowWidth = window.innerWidth ? window.innerWidth : null;
    let windowWidth = screen.width ? screen.width : null;
    let titleList = document.getElementsByClassName('big-text');
    
    if(windowWidth){
        if(windowWidth<500){
            Array.from(titleList).map( title=>title.style.fontSize = '30px' );
        }
    }
    
    //화면 크기가 동적으로 변할 떄 글자 크기 변경
    titleList = toArrayIfNot(titleList);
    let titleResizer = resizeText(titleList, '30px');
    timer = windowResizer(titleResizer, timer);

};