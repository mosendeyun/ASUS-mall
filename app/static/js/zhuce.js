    $(function(){
        $(".c-phone2").blur(function(){
            var str=$(this).val();
            console.log(str);
            var res = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
            if(res.test(str)&&str!==""){
                console.log("格式正确")
                $(".c-yan").show();
                $(".c-phone").css("border-color",'#1b1a1a');
            }else{
                $(".c-yincang").show().delay(1500).hide(0);
            }
        })
        $(".c-yan2").blur(function(){
                var $val=$(this).val();
                if($val!==$(".yan-btn").val()&&$val===""){
                    console.log("错误")
           $(".c-yincang2").text("验证码错误");
           $(".c-yincang").show().delay(1500).hide(0);
                }else{
                    console.log("正确");
                }
        })
        $(".yan-btn").click(function(){
             function ol(){
                 return Math.floor(Math.random()*(9999-1000))+1000;
             }
            $(this).val(ol());
        })
        $(".btn-number").click(function(){ 
            console.log(12)
            function duan(){
                return Math.floor(Math.random()*(99999-10000))+10000;
            }
            $(this).text(duan());
        })
                $(".c-number2").blur(function(){
                    var yan= $(this).val();
                    // console.log($(".btn-number"));
                    // console.log(yan);
                     if($(".btn-number").text()===yan&&$(".btn-number").text()!==""){
                    }else{
                        $(".c-yincang2").text("短信验证码错误");
                   $(".c-yincang").show().delay(1500).hide(0);
                     }
                    })





                    $("input[type='checkbox']").is(':checked')
                    console.log($("input[type='checkbox']").is(':checked'));
                    if($("input[type='checkbox']").is(':checked')){
                        $(".c-login2").click(function(){ 
                        var number=$(".c-phone2").val();
                            $.get("http://localhost:1810/ASUS-mall/server/php/zhuce.php",
                                 {
                                     val: number
                                 } 
                            );
                        })                           
                    }
                   
                        // console.log( $("change"));
    })