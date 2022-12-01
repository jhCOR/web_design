var pair = [
    {
        target: document.getElementsByClassName('typing')[0],
        content: '여백을 채우기 위한',
        time: 200,
        option: 'char',
    },
    {
        target: document.getElementsByClassName('typing')[1],
        content: '글자 / 사진',
        time: 200,
        option: 'char',
    },
    {
        target: document.getElementsByClassName('typing')[2],
        content: '(세로 길이가 깁니다)',
        time: 200,
        option: 'sentence',
    },
];

function type(element, text) {
    if(element==null){return}
    element.textContent += text;
}

function typing(object, timer) {
    let { target: element, content, time, option } = object;
    let cursor = 0;

    return new Promise((resolve, reject) => {
        timer = setInterval(function () {
            if (cursor >= content.length) {
                clearInterval(timer);
                resolve(true);
            } else {
                if (option == 'sentence') {
                    type(element, content);
                    cursor = content.length;
                } else {
                    type(element, content[cursor++]);
                }
            }
        }, time);
    });
}

async function multiType(pairList) {
    let timer = null;
    for (let i = 0; i < pairList.length; i++) {
        let result = await typing(pairList[i], timer);
    }
}

window.addEventListener('DOMContentLoaded', function () {
    multiType(pair);
});