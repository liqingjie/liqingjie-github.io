(function () {
    // 首页滚动banner
        var mySwiper = new Swiper('.swiper-container', {
            // autoplay: true,//可选选项，自动滑动
            pagination: {
            el: '.swiper-pagination',
            clickable :true
            },
        })  
        $('.multiple-items').slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '<i class="fa fa-chevron-left slider_prev slider_arrow">Previous</i>',
            nextArrow: '<i class="fa fa-chevron-right slider_next slider_arrow">Next</i>',
        });
        var deviceWidth = document.documentElement.clientWidth;
        function swiper (int) {
            $('.multiple-items').slick('slickSetOption', 'slidesToShow', int, true)
        }
        if(deviceWidth < 750) {
            swiper(1)
        } else if ( deviceWidth > 750 && deviceWidth < 1200) {
            swiper(3)
        } else {
            swiper(6)
        }
        window.addEventListener('resize', function () {
            var deviceWidth = document.documentElement.clientWidth;
            if(deviceWidth < 750) {
                swiper(1)
            } else if ( deviceWidth > 750 && deviceWidth < 1200) {
                swiper(3)
            } else {
                swiper(6)
            }
        })
})()
