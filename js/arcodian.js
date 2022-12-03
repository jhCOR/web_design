$('.que').click(function () {
    $(this).next('.anw').stop().slideToggle(300);
    $(this).toggleClass('on').siblings().removeClass('on');
    $(this).next('.anw').siblings('.anw').slideUp(300); // 1개씩 펼치기
});

function collapse(element) {
    var before = document.getElementsByClassName('active')[0]; // 기존에 활성화된 버튼
    if (before && document.getElementsByClassName('active')[0] != element) {
        before.nextElementSibling.style.maxHeight = null; // 기존에 펼쳐진 내용 접고
        before.classList.remove('active'); // 버튼 비활성화
    }
    element.classList.toggle('active'); // 활성화 여부 toggle

    var content = element.nextElementSibling;
    if (content.style.maxHeight != 0) {
        // 버튼 다음 요소가 펼쳐져 있으면
        content.style.maxHeight = null; // 접기
    } else {
        content.style.maxHeight = content.scrollHeight + 'px'; // 접혀있는 경우 펼치기
    }
}