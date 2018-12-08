var er = (function () {

    var $liAll = $('.w-er1 li');
    var $boxAll = $('.uu');
    var $all = $('.w-er');
    return {
        init() {
            this.event();
        },
        event() {
            // console.log(boxAll)
            $liAll.mouseover(function () {
                console.log($(this).index());
                $boxAll.eq($(this).index()).show().siblings('div').hide();
            })
            $all.mouseout(function () {
                $boxAll.hide();
            })
        },
    }
}())