// setTimeout(function () {
//     $('#mainpage').addClass('animated slideOutUp');
// }, 3000);

new WOW().init();

// $("#hori > div").click(function(){
//     $(this).removeClass("col-md-2", 1000).addClass("col-md-5", 1000);
//     $(this).siblings().removeClass("col-md-5").addClass("col-md-2");
// })
// $(function () {
//     $("body").mousewheel(function (event, delta) {
//         this.scrollLeft -= (delta * 30);
//         event.preventDefault();
//     });
// })

// var menu = $("#test");
// $(window).scroll(function () {
//     //more then or equals to
//     if ($(window).scrollTop() >= 400) {
//         menu.show(1000);

//         //less then 100px from top
//     } else {
//         menu.hide(1000);

//     }
// });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(document).ready(function () {
    $(this).scrollTop(0);
});