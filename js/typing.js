var pair = [
    {
        target: document.getElementsByClassName('typing')[0],
        content: '당신이 선택한 꿈을',
        time: 200,
        option: 'char',
    },
    {
        target: document.getElementsByClassName('typing')[1],
        content: '결과로 만들',
        time: 200,
        option: 'char',
    },
    {
        target: document.getElementsByClassName('typing')[2],
        content: '서강대학교 2023',
        time: 200,
        option: 'sentence',
    },
];

function type(element, text) {
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