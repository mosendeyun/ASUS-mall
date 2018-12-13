$(function () {

    $("#c-num").on("click", function () {


        $(this).css("color", "#00a8ff");
        $("#c-hao").css("color", "#8a8a8a");
        $("form").find("input").val("");
        $("#inp1").hide();
        $("#inp2").hide();
        $("#inp3").show();
        $("#inp4").show();
    })
    $("#c-hao").on("click", function () {
        $("form").find("input").val("");
        $(this).css("color", "#00a8ff");
        $("#c-num").css("color", "#8a8a8a");
        $("#inp1").show();
        $("#inp2").show();
        $("#inp3").hide();
        $("#inp4").hide();
    })

    //失去焦点我也判断以下格式
    $("#inp3 .input1").blur(function () {
        console.log(123);
        var phone = $("#inp3 .input1").val();
        console.log(phone);
        var res = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
        if (res.test(phone) && phone !== "") {
            $(".yanzheng").click(function () {
                console.log("我是验证码");
        
                var phone = $("#inp3 .input1").val();
                console.log(phone);
                var res = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
                if (res.test(phone) && phone !== "") {
                    function ol() {
                        return Math.floor(Math.random() * (9999 - 1000)) + 1000;
                    }
                    console.log("正确马上给你发送验证码");
                    $(this).html(ol());
                   
                } else {
                    $(".hefa").show().delay(1200).hide(0);
                }
            })
        } else {
            $(".hefa").show().delay(600).hide(0);
        }
    })

    $(".input2").on("blur", function () {
        var ma = $(".yanzheng").html();
        console.log(ma)
        var ba = $(".input2").val();
        var shouji = $(".input1").val();
        console.log(ba);
        if (ba === ma && ba !== "") {
            
            
            $(".c-btn").on("click", function () {
                var phone = $(".input1").val();
                var res = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
                if (res.test(phone) && phone !== "") {
                    console.log("正确马上给你发送验证码 恭喜最后一步已经完成");
                    
                    console.log("不为空 可以发送贾克斯请求");
        
                    var phone = $(".input1").val();
                    phone=JSON.stringify(phone);
                    
                    console.log(phone);



                        $.post(
                            "http://10.36.141.228:1810/ASUS-mall/server/php/denglu.php",
                            { "phone_number": phone },
                            function (res) {
                             
                                res=Number(res);
                                console.log(res);
                                if(res){
                                    console.log($("#tiaozhuan"));
                                    $("#tiaozhuan").html("页面即将跳转");
                                        $("#tiaozhuan").show().delay(1500).hide(0);
                                        document.cookie=`username=${phone}`
                                        location.href='index.html'
                                }
                                else{
                                    $("#tiaozhuan").html("先注册再登录");
                                    $("#tiaozhuan").show().delay(1500).hide(0);
                                }
                            }
                        )





                } 
                else { 
                    $(".hefa").show().delay(1200).hide(0);
                    $(".yanzheng").html("重新获取验证码");
                    console.log(12313);
                }
            })


        } 
        else {
            $("#anhao").html("验证码有误");
            
            $(".hefa").show().delay(1200).hide(0);
            $(".yanzheng").html("重新获取验证码");
     
        }
    })

})