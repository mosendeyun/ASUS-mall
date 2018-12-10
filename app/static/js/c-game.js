$(function(){
    $(".tab-head .game1-show").eq(1).on("mouseenter",function(){
        console.log(1232131);
        $(".game-body2").show();
        $(".game-body1").hide();
        $(".game-body3").hide();
        console.log($(".game-body2"));
    })
    $(".tab-head .game1-show").eq(0).on("mouseenter",function(){
        console.log(1232131);
        $(".game-body1").show();
        $(".game-body2").hide();
        $(".game-body3").hide();
        console.log($(".game-body2"));
//  阴影效果
console.log($(".s1-pic"))

    })
    $(".tab-head .game1-show").eq(2).on("mouseenter",function(){
        console.log(1232131);
        $(".game-body1").hide();
        $(".game-body2").hide();
        $(".game-body3").show();
        console.log($(".game-body2"));
    })

    $(".init").hover(
        function(){
            // $(this)
            // $(".picturn").hide();
            $(".num3").removeClass("goods-item").addClass("init");
            $(this).removeClass("init").addClass("defrent");
            console.log("进去");

    },function(){
        $(this).removeClass("defrent").addClass('init');
            console.log("出来");
    }
    )
    $(".num3").hover(function(){
        $(".num3").removeClass("init").addClass("defrent");
    },
        function(){
            $(".num3").removeClass("defrent").addClass("init");
        }
    )
})