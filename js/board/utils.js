function makeCanvasToImage(){
    let canvas = document.getElementById('customCanvas');
    let image = canvas.toDataURL()
    transformToFile(image)
}

function transformToFile(dataURL){
    var blobBin = atob(dataURL.split(',')[1]);
    var array = [];
    for(var i = 0; i < blobBin.length; i++) {
        array.push(blobBin.charCodeAt(i));
    }
    var blob=new Blob([new Uint8Array(array)], {type: 'image/png'});
    let date = new Date()
    var file = new File([blob], "image_"+date.getTime()+".png");
    console.log(date.getTime())
    var formdata = new FormData();
    
    formdata.append("photo", file);

    $.ajax({
       url: "https://pythonservertest-hqjza.run.goorm.io/pythonserverTest/drawBoard/saveImage",
       type: "POST",
       data: formdata,
       processData: false,
       contentType: false,
    }).done(function(respond){
      alert("저장하였습니다.");
    });
}

function makeCanvasToImageDownload(){
    
    let canvas = document.getElementById('customCanvas');
    var link = document.createElement('a');
    let date = new Date()
    link.download = 'img-'+date+'.png';
    link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    link.click();
}

function clearCanvas(){
    ctx.fillStyle = "white";
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillRect(0,0,canvas.width, canvas.height);

    restore_array=[];
    index =-1;
}

function undo(){
    --currentPoint; 
    console.log(currentPoint)
    if(currentPoint>=0){
        ctx.putImageData(status[currentPoint],0,0);  
    }else{
        clearCanvas()
    }
    
}

function redo(){
    ++currentPoint; 
    console.log(currentPoint)
    ctx.putImageData(status[currentPoint],0,0); 
    
}