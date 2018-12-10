$(function () {

    //手机号码格式  认证
    $(".c-phone2").blur(function () {
        var str = $(this).val();
        console.log(str);
        var res = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
        if (res.test(str) && str !== "") {

            console.log("格式正确")
            //验证码的框显示
            $(".c-yan").show();
                //以下放其他事件函数

                // 点击获取验证码框  出来验证码
                $(".yan-btn").click(function () {
                    var shouji = $(".c-phone2").val();
                    function ol() {
                        return Math.floor(Math.random() * (9999 - 1000)) + 1000;
                    }
                    $(this).val(ol());
                    if (shouji === "") {
                        
                        $(".c-yincang2").text("手机号码有误");
                    }
                })
                
                
                
                
                //隐藏的验证码  验证
                $(".c-yan2").blur(function () {
                    
                    var $val = $(this).val();
                    console.log($(".yan-btn").val())
                    if ($val !== $(".yan-btn").val() ||$val === "") {
                        console.log("错误")
                        $(".yan-btn").val("重新获取");
                        $(".c-yincang2").text("验证码错误");
                        $(".c-yincang").show().delay(800).hide(0);
                    }else{
                        //获取短信的验证码
                        
                        $(".btn-number").click(function () {
                            var shouji = $(".c-phone2").val();
                            function duan() {
                                return Math.floor(Math.random() * (99999 - 10000)) + 10000;
                            }
                            if(shouji===""){
                                $(".c-yincang2").text("手机号码不能为空");
                            }
                            $(this).text(duan());
                        })
                        // 获取短信验证码 结束
                
                
                
                        //看看输入的手机短信验证码 是否一致
                        
                        $(".c-number2").blur(function () {
                            var yan = $(this).val();
                            // console.log($(".btn-number"));
                            // console.log(yan);
                            if ($(".btn-number").text() === yan ) {
                
                
                            // 最后一个条件满足 才  可以去发 阿贾克斯  请求
                                $('#check').prop('checked', true);
                                $(".c-login2").click(function () {
                                    var number = $(".c-phone2").val();
                                    $.get("http://10.36.141.149:1810/ASUS-mall/server/php/zhuce.php",
                                        {
                                            val: number
                                        },
                                        function (data) {
                                           
                                            setTimeout(() => {  
                                                location.href = "http://10.36.141.149:1810/ASUS-mall/app/denglu.html"
                                            }, 1000)
                                        }
                                    )
                                })
                
                
                
                            //  发送阿吉克斯   结束
                            } else {
                                $(".btn-number").html("重新获取");
                                $(".c-yincang2").text("短信验证码错误");
                                $(".c-yincang").show().delay(800).hide(0);
                            }
                        })
                //            手机短信验证码  验证结束
                    }
                })



//否则的继续
        } else{
            $(".c-yincang").show().delay(800).hide(0);
        }
    })






    
    










})