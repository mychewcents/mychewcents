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

// $('#work_details').on('scroll', function(){
//     if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
//         console.log('Let us move on!');
//     }
// });

var my9to5_top = $('#work_main').offset().top;
var my9to5_bottom = my9to5_top + $('#work_main').height() - $('#my9to5').height();

var writer_top = $('#writer_main').offset().top;
var writer_bottom = writer_top + $('#writer_main').height() - $('#writer').height();

$(window).scroll(function () {
    var currentScroll = $(window).scrollTop();

    if (currentScroll >= my9to5_top) {
        $('#work_main').css({
            position: 'fixed'
        });
    }
    // if (currentScroll >= my9to5_top && currentScroll < my9to5_bottom) {
    //     $('#writer').css({
    //         position: 'static'            
    //     });

    //     $('#my9to5').css({
    //         position: 'fixed',
    //         top: '0',
    //         left: '0'
    //     });
    // } else if (currentScroll >= writer_top && currentScroll < writer_bottom){
    //     $('#my9to5').css({
    //         position: 'static'
    //     });

    //     $('#writer').css({
    //         position: 'fixed',
    //         top: '0',
    //         left: '0'
    //     });
    // } else {
    //     $('#writer').css({
    //         position: 'static'
    //     });

    //     $('#my9to5').css({
    //         position: 'static'
    //     });
    // }

    // } else {
    //     $('#my9to5').css({
    //         position: 'static'
    //     });
    // }
});