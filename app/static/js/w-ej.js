var er = (function () {

    var $liAll = $('.w-er1 li');
    var $boxAll = $('.uu');
    var $all = $('.w-er');
    return {
        init() {
            this.event();
        },
        event() {

            $liAll.mouseover(function () {
                $('.w-er2').show();
                console.log($(this).index());
                $boxAll.eq($(this).index()).show().siblings('div').hide();
                $boxAll.mouseover(function () {
                    $(this).show();
                })
                // $all.mouseover(function(){
                //     $boxAll.eq(_this).show();
                // })
            })
            $all.mouseout(function () {
                $boxAll.hide();
            })

        },
    }
}())