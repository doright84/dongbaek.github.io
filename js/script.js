$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('.head-top').addClass('head-top-on')
            $('.head-menu>li>a').addClass('head-menu-txt-on')
            $('.logo').addClass('logo-on')
        } else {
            $(".head-top").removeClass('head-top-on')
            $('.head-menu>li>a').removeClass('head-menu-txt-on')
            $('.logo').removeClass('logo-on')
        }
    })

    // 헤더
    let head_sw = new Swiper('.head-sw-container', {
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        speed: 800,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });


    // 테마 -하나 클릭시 다른거 사라짐-
    $('.thema-menu li').each(function () {
        $(this).click(function () {
            $(this).addClass('thema-on'); //클릭된 부분을 상단에 정의된 CCS인 selected클래스로 적용
            $(this).siblings().removeClass('thema-on'); //siblings:형제요소들,    removeClass:선택된 클래스의 특성을 없앰
            $('.thema-menu a').removeClass('thema-txt-on');
            $(this).children().addClass('thema-txt-on');
        });
    });

    // 추천 recommend
    let bus_sw = new Swiper('.bus-sw-container', {
        loop: true,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 1000,
        pagination: {
            el: ".bus-pg",
            // 클릭이 가능하도록 처리
            clickable: true,
        },
    });
    let train_sw = new Swiper('.train-sw-container', {
        loop: true,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 1000,
        pagination: {
            el: ".train-pg",
            // 클릭이 가능하도록 처리
            clickable: true,
        },
    });

    let review_sw = new Swiper('.review-sw-container', {
        loop: true,
        slidesPerView: 5,
        slidesPerGroup: 1,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 800,
    });
});