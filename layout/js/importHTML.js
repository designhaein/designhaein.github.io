$(document).ready(function () {
    $("#header").load("../layout/nav.html", function () {
    //페이지 별로 다른 메뉴 css 적용도 가능
        console.log('success');
    });
})