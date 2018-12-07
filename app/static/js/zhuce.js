$(".c-phone2").blur(function(){
    console.log(1321);
    var str=$(this).val();
    console.log(str);
    var res = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
    if(res.test(str)){
        console.log("格式正确")
    }else{
        $(".c-yincang").show();
    }
})