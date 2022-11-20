let index = 0;

 function sleep(delay){
     const start = new Date().getTime(); 
     while (new Date().getTime() < start + delay); 
    }

function* generateSequence(list) {
  yield list[0];
  yield list[1];
  return 3;
}

function typeOne(){
    
}
function typing(object, timer) {
    console.log(object.content)
    let element = object.target;
    let content = object.content;
    let cursor = 0;
    return new Promise((resolve, reject) => {
        timer = setInterval(function () {
            console.log(content.length)
            if(cursor>=content.length){
                clearInterval(timer);
                resolve(true);
            }else{
                element.textContent += content[cursor++];
            }
        }, 200);
    });
}



let pairList = [
    {"target": document.getElementsByClassName("typing")[0], "content": "당신이 선택한 꿈을", "time":4000},
    {"target": document.getElementsByClassName("typing")[1], "content": "결과로 만들", "time":3000},
    {"target": document.getElementsByClassName("typing")[2], "content": "서강대학교 2023"}
]

async function multiType(pairList){
    let generator = generateSequence(pairList);
    let timer = null;
    for(let i = 0; i<pairList.length; i++){
        
        let result = await typing(pairList[i], timer)
    }
    
}
multiType(pairList);