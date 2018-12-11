$(function () {
    $(".tab-head .game1-show").eq(1).on("mouseenter", function () {
        console.log(1232131);
        $(".game-body2").show();
        $(".game-body1").hide();
        $(".game-body3").hide();

    })
    $(".tab-head .game1-show").eq(0).on("mouseenter", function () {
        console.log(1232131);
        $(".game-body1").show();
        $(".game-body2").hide();
        $(".game-body3").hide();


    })
    $(".tab-head .game1-show").eq(2).on("mouseenter", function () {
        console.log(1232131);
        $(".game-body1").hide();
        $(".game-body2").hide();
        $(".game-body3").show();

    })
    //2f
    $(".f2 .game2-show").eq(1).on("mouseenter", function () {

        console.log($(".f2 .game2-show"));
        $(".game-body2f2").show();
        $(".game-body2f1").hide();
        $(".game-body2f3").hide();

    })
    $(".f2 .game2-show").eq(0).on("mouseenter", function () {
        console.log(1232131);
        $(".game-body2f1").show();
        $(".game-body2f2").hide();
        $(".game-body2f3").hide();


    })
    $(".f2 .game2-show").eq(2).on("mouseenter", function () {
        console.log(1232131);
        $(".game-body2f1").hide();
        $(".game-body2f2").hide();
        $(".game-body2f3").show();

    })
    //3f

    $(".f3 .game3-show").eq(0).on("mouseenter", function () {
        console.log(1232131);
        $(".game-body3f1").show();
        $(".game-body2f2").hide();
        $(".game-body3f3").hide();

    })
    $(".f3 .game3-show").eq(1).on("mouseenter", function () {
        console.log(1232131);
        $(".game-body3f2").show();
        $(".game-body3f1").hide();
        $(".game-body3f3").hide();


    })
    $(".f3 .game3-show").eq(2).on("mouseenter", function () {
        console.log(1232131);
        $(".game-body3f1").hide();
        $(".game-body3f2").hide();
        $(".game-body3f3").show();

    })
    //4f
    $(".f4 .game4-show").eq(0).on("mouseenter", function () {
        console.log(1232131);
        $(".game-body4f1").show();
        $(".game-body4f2").hide();
        $(".game-body4f3").hide();

    })
    $(".f4 .game4-show").eq(1).on("mouseenter", function () {
        console.log(1232131);
        $(".game-body4f2").show();
        $(".game-body4f1").hide();
        $(".game-body4f3").hide();


    })
    $(".f4 .game4-show").eq(2).on("mouseenter", function () {
        console.log(1232131);
        $(".game-body4f1").hide();
        $(".game-body4f2").hide();
        $(".game-body4f3").show();

    })
    //5f
    $(".f5 .game5-show").eq(0).on("mouseenter", function () {
        console.log(1232131);
        $(".game-body5f1").show();
        $(".game-body5f2").hide();
        $(".game-body5f3").hide();

    })
    $(".f5 .game5-show").eq(1).on("mouseenter", function () {
        console.log(1232131);
        $(".game-body5f2").show();
        $(".game-body5f1").hide();
        $(".game-body5f3").hide();


    })
    $(".f5 .game5-show").eq(2).on("mouseenter", function () {
        console.log(1232131);
        $(".game-body5f1").hide();
        $(".game-body5f2").hide();
        $(".game-body5f3").show();

    })






















    $(".init1").hover(
        function () {
            // $(this)
            // $(".picturn").hide();
            $(".num3").removeClass("goods-item").addClass("init");
            $(this).removeClass("init1").addClass("defrent");
            console.log("进去");
            $(this).css("color", "#00a8ff");

        }, function () {
            $(this).removeClass("defrent").addClass('init1');
            console.log("出来");
        }
    )

    // 2f
    $(".init2").hover(
        function () {
            // $(this)
            // $(".picturn").hide();
            $(".num3").removeClass("goods-item").addClass("init");
            $(this).removeClass("init2").addClass("defrent");
            console.log("进去");
            $(this).css("color", "#00a8ff");

        }, function () {
            $(this).removeClass("defrent").addClass('init2');
            console.log("出来");
        }
    )


    // 3f
    $(".init3").hover(
        function () {
            // $(this)
            // $(".picturn").hide();
            $(".num3").removeClass("goods-item").addClass("init");
            $(this).removeClass("init3").addClass("defrent");
            console.log("进去");
            $(this).css("color", "#00a8ff");

        }, function () {
            $(this).removeClass("defrent").addClass('init3');
            console.log("出来");
        }
    )
    // 4f
    $(".init4").hover(
        function () {
            // $(this)
            // $(".picturn").hide();
            $(".num3").removeClass("goods-item").addClass("init");
            $(this).removeClass("init4").addClass("defrent");
            console.log("进去");
            $(this).css("color", "#00a8ff");

        }, function () {
            $(this).removeClass("defrent").addClass('init4');
            console.log("出来");
        }
    )
    // 5f
    $(".init5").hover(
        function () {
            // $(this)
            // $(".picturn").hide();
            $(".num3").removeClass("goods-item").addClass("init");
            $(this).removeClass("init5").addClass("defrent");
            console.log("进去");
            $(this).css("color", "#00a8ff");

        }, function () {
            $(this).removeClass("defrent").addClass('init5');
            console.log("出来");
        }
    )








    $(".num3").hover(function () {
        $(".num3").removeClass("init").addClass("defrent");
    },
        function () {
            $(".num3").removeClass("defrent").addClass("init");
        }
    )
})