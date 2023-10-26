$(function () {
    window.addEventListener("wheel", function (e) {
        e.preventDefault();
    }, { passive: false });

    var $html = $("html");

    var page = 1;

    var lastPage = $("section").length;

    $html.animate({ scrollTop: 0 }, 10);


    $(window).on("wheel", function (e) {

        if ($html.is(":animated")) return;

        if (e.originalEvent.deltaY > 0) {
            if (page == lastPage) return;

            page++;
        } else if (e.originalEvent.deltaY < 0) {
            if (page == 1) return;

            page--;
        }
        var posTop = (page - 1) * $(window).height();

        $html.animate({ scrollTop: posTop });

    });

    //cont_01 스크립트 시작



    let menu = $('.cont_01 .inner nav .menu');
    let menuIcon = $('.cont_01 .inner nav .menu .up a:last-child img');
    let iconList = ['img/cont_01_shopping.png', 'img/cont_02_shopping.png', 'img/cont_03_shopping.png', 'img/cont_04_shopping.png', 'img/cont_05_shopping.png', 'img/cont_06_shopping.png', 'img/cont_07_shopping.png', 'img/cont_08_shopping.png']
    let menuTop = $('.cont_01 .inner nav .menu').offset().top;

    let cont02Top = $('.cont_02').offset().top;
    let cont03Top = $('.cont_03').offset().top;
    let cont04Top = $('.cont_04').offset().top;
    let cont05Top = $('.cont_05').offset().top;
    let cont06Top = $('.cont_06').offset().top;
    let cont07Top = $('.cont_07').offset().top;
    let cont08Top = $('.cont_08').offset().top;

    $(window).scroll(function () {

        if ($(window).scrollTop() == 0) {
            menu.removeClass('on')
            menuIcon.attr('src', iconList[0])
        }
        else if ($(window).scrollTop() == cont02Top) {
            menu.removeClass('on1')
            menu.addClass('on')
            menuIcon.attr('src', iconList[1])
        }
        else if ($(window).scrollTop() == cont03Top) {
            menu.removeClass('on2')
            menu.removeClass('on')
            menu.addClass('on1')
            menuIcon.attr('src', iconList[2])
        }
        else if ($(window).scrollTop() == cont04Top) {
            menu.removeClass('on3')
            menu.removeClass('on1')
            menu.addClass('on2')
            menuIcon.attr('src', iconList[3])
        }
        else if ($(window).scrollTop() == cont05Top) {
            menu.removeClass('on4')
            menu.removeClass('on2')
            menu.addClass('on3')
            menuIcon.attr('src', iconList[4])
        }
        else if ($(window).scrollTop() == cont06Top) {
            menu.removeClass('on5')
            menu.removeClass('on3')
            menu.addClass('on4')
            menuIcon.attr('src', iconList[5])
        }
        else if ($(window).scrollTop() == cont07Top) {
            menu.removeClass('on6')
            menu.removeClass('on4')
            menu.addClass('on5')
            menuIcon.attr('src', iconList[6])
        }
        else if ($(window).scrollTop() == cont08Top) {
            menu.removeClass('on5')
            menu.addClass('on6')
            menuIcon.attr('src', iconList[7])
        }
    })


    $('.cont_01 .inner .bg').fadeOut()
    $('.cont_01 .inner video').click(function () {
        $('.cont_01 .inner .bg').fadeIn()
    });
    $('.cont_01 .inner .bg .close').click(function () {
        $('.cont_01 .inner .bg').fadeOut()
    })

    $('.cont_02 .inner .bg').fadeOut()
    $('.cont_02 .inner video').click(function () {
        $('.cont_02 .inner .bg').fadeIn()
    });
    $('.cont_02 .inner .bg .close').click(function () {
        $('.cont_02 .inner .bg').fadeOut()
    })

    $('.cont_03 .inner video').click(function () {
        $('.cont_03 .inner .bg').fadeIn()
    });
    $('.cont_03 .inner .bg .close').click(function () {
        $('.cont_03 .inner .bg').fadeOut()
    })

    $('.cont_04 .inner video').click(function () {
        $('.cont_04 .inner .bg').fadeIn()
    });
    $('.cont_04 .inner .bg .close').click(function () {
        $('.cont_04 .inner .bg').fadeOut()
    })
    $('.cont_05 .inner video').click(function () {
        $('.cont_05 .inner .bg').fadeIn()
    });
    $('.cont_05 .inner .bg .close').click(function () {
        $('.cont_05 .inner .bg').fadeOut()
    })

    $('.cont_06 .inner video').click(function () {
        $('.cont_06 .inner .bg').fadeIn()
    });
    $('.cont_06 .inner .bg .close').click(function () {
        $('.cont_06 .inner .bg').fadeOut()
    })

    $('.cont_07 .inner video').click(function () {
        $('.cont_07 .inner .bg').fadeIn()
    });
    $('.cont_07 .inner .bg .close').click(function () {
        $('.cont_07 .inner .bg').fadeOut()
    })


    //cont_02 스크립트 시작
    var swiper = new Swiper(".mySwiper02", {
        effect: "cards",
        grabCursor: true,
    });
    let list = $('.cont_02 .inner .bg .list h4');
    let item = $('.cont_02 .inner .bg .arti .item_box');
    let bigImg = $('.cont_02 .inner .bg .big_img img');
    let itemOn = $('.cont_02 .inner .bg .arti .item_box.on');

    imgList = ['img/giftforher.png', 'img/giftbabymain.png', 'img/gifthomemain.png', 'img/personalization.png']




    item.css({
        'display': 'none'
    })

    itemOn.css({
        'display': 'block'
    })
    list.click(function () {

        i = $(this).index();

        bigImg.attr('src', imgList[i])


        list.removeClass('on')
        $(this).addClass('on')

        item.css({
            'display': 'none'
        })
        item.eq(i).css({
            'display': 'block'
        })

    })





    //cont_04 스크립트 시작

    var mySwiper = new Swiper(".swiper-container", {
        direction: "vertical",
        loop: true,
        pagination: ".swiper-pagination",
        grabCursor: true,
        speed: 1000,
        paginationClickable: true,
        parallax: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: "slide",
        mousewheelControl: 1
    });

    //cont_05 스크립트 시작

    let womenList = $('.cont_05 .inner .bg .arti .list h4');
    let womenItem = $('.cont_05 .inner .bg .arti .item_box .inner');

    womenList.click(function () {

        womenList.removeClass('on')
        $(this).addClass('on')

        womenItem.removeClass('on')
        womenItem.eq($(this).index()).addClass('on')
    })


    //cont_06 스크립트 시작

    let accList = $('.cont_06 .inner .bg .arti .cont .right .inner .list');
    let accImg = $('.cont_06 .inner .bg .arti .cont .left .item_box');

    accList.click(function () {

        accImg.removeClass('on')
        accImg.eq($(this).index()).addClass('on')
    });

    //cont_07 스크립트 시작
    let artListBg = $('.cont_07 .inner .bg .arti .list')
    let artList = $('.cont_07 .inner .bg .arti .list .inner h4')
    let artImgList = ['img/artHighlight.png', 'img/artTravel.jpg', 'img/artHome.jpg', 'img/artBook.jpg', 'img/artSports.jpg', 'img/artWatch.jpg']
    let artBgImg = $('.cont_07 .inner .bg .arti img')
    let artInfo = $('.cont_07 .inner .bg .arti >a')



    artList.click(function () {

        i = $(this).index();
        artList.css({
            'color': 'rgba(255, 255, 255, 1)',
            'right': '0px',
        })
        $(this).css({
            'color': 'rgba(230, 128, 64, 1)',
            'right': '-10px',
        })

        artBgImg.attr('src', artImgList[i])
    })




    artListBg.mouseleave(function () {
        artInfo.css({
            'opacity': '1'
        })
    })
    artListBg.mouseenter(function () {
        artInfo.css({
            'opacity': '0'
        })
    })

    //footer 스크립트 시작

    let footerInfo = $('.footer .inner .up .item a');
    let lang = $('.footer .inner .down .item .lang');
    let langBox = $('.footer .inner .down .item .lang .lang_box');

    footerInfo.mouseenter(function () {
        $(this).stop().animate({
            'opacity': '1',
            'font-weight': '900'
        })
    })
    footerInfo.mouseleave(function () {
        $(this).stop().animate({
            'opacity': '0.7',
            'font-weight': '400'
        })
    })
    lang.click(function () {
        langBox.slideToggle(600)
    })


    let cont01Top = $('.cont_01').offset().top;
    let TopBtn = $('.footer > .up');

    $(window).scroll(function () {

        if ($(window).scrollTop() >= cont02Top) {
            TopBtn.css({
                'opacity': '1'
            })
            TopBtn.fadeIn(600)
        }
        else if ($(window).scrollTop() == cont01Top) {
            TopBtn.fadeOut(600)
        }
    })

    TopBtn.click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 1500)
    })


    //2차메뉴 스크립스 시작
    let menuBar = $('.cont_01 .inner nav .menu .down a');
    let depth01 = $('.cont_01 .inner nav .depth_01');
    let depth02 = $('.cont_01 .inner nav .depth_01 >ul > .depth_02 li');
    let depth01Close = $('.cont_01 .inner nav .depth_01 .close');
    let menuList = $('.cont_01 > .inner > nav > .menu > .down a');

    menuBar.click(function () {
        depth01.animate({
            'left': '0'
        }, 1000)
    })
    depth01Close.click(function () {
        depth01.animate({
            'left': '5000px'
        }, 1000)
    })

    depth02.mouseenter(function () {
        $(this).css({
            'color': 'rgba(73, 45, 33, 1)',
            'left': '10px'
        })
    })
    depth02.mouseleave(function () {
        $(this).css({
            'color': 'rgba(73, 45, 33, 0.2)',
            'left': '0px'
        })
    })


    menuList.mouseenter(function () {
        $(this).css({
            'bottom': '10px',
        })
    });
    menuList.mouseleave(function () {
        $(this).css({
            'bottom': '0px'
        })
    });
});
