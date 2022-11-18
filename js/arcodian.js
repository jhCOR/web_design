$(".que").click(function() {
   $(this).next(".anw").stop().slideToggle(300);
  $(this).toggleClass('on').siblings().removeClass('on');
  $(this).next(".anw").siblings(".anw").slideUp(300); // 1개씩 펼치기
});

// window.onload = function () {
//     let button = document.getElementById('que');

//     button.addEventListener('click', function () {
//         $(this).next('.anw').stop().slideToggle(300);
//         $(this).toggleClass('on').siblings().removeClass('on');
//         $(this).next('.anw').siblings('.anw').slideUp(300); // 1개씩 펼치기
//     });
// };