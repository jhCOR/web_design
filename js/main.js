window.onload = function (){
    var timer = null;

    let pageWidth = availableWidth();
    
    let titleList = document.getElementsByClassName('big-text');
    
    if(pageWidth){
        if(pageWidth<500){
            Array.from(titleList).map( title=>title.style.fontSize = '30px' );
        }
    }
    //화면 크기가 동적으로 변할 떄 글자 크기 변경
    titleList = toArrayIfNot(titleList);
    let titleResizer = resizeText(titleList, '30px');
    timer = windowResizer(titleResizer, timer, function(query){
        
        if(query<500)return true;
    });

};