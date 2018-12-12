var er = (function () {
    return {
        init() {
            this.event()
            var mySwiper = new Swiper('.swiper-container', {
                direction: 'horizontal', // 垂直切换选项
                loop: true, // 循环模式选项
        
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
        
                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
        
                // 如果需要滚动条
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
                autoplay: {
                    delay: 2000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                },
            })
        },
        event() {
            $('.w-er1 li').mouseover(function () {
                $('.w-er2').show();
                console.log($(this).index());
                $('.uu').eq($(this).index()).show().siblings('div').hide();
                $('.uu').mouseover(function () {
                    $(this).show();
                })
            })
            $('.w-er1 li').mouseout(function () {
                $('.uu').hide();
            })
            $('.w-er').mouseout(function () {
                $('.uu').hide();
            })
        }
    }
}())
