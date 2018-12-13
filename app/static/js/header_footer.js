var home = (function () {
    return {
        init() {
            this.insert()
            this.searchInp()
            if(document.cookie){
                $('.s_member').show()
                $('.user').html(`${document.cookie.split('=')[1].replace(/\"/g,"")}<i class="iconfont asus-down"></i></a>`)
            }
        },
        insert() {
            $('.s_count').html(localStorage.shopList.split().length + 1)
            $('.s_cart').mouseenter(function () {
                $('.minicart_cont').css({ display: 'block' })
                $('.s_nums').html(`您一共选择了${localStorage.shopList.split().length + 1}件产品`)
            }).mouseleave(function () {
                $('.minicart_cont').css({ display: 'none' })
            })

            $('.s_parent1').hover(function () {
                $('.nav_list').show()
                $('.child_nav_2').hide()
                $('.child_nav_3').hide()
                $('.child_nav_1').show().children().addClass('animated fadeInRight');
            }, function () {
                $('.nav_list').hide()
                $('.child_nav_1').children().removeClass('animated fadeInRight');
            })
            $('.nav_list').hover(function () {
                $('.nav_list').show()
            }, function () {
                $('.nav_list').hide()
            })
            $('.s_parent4').hover(function () {
                $('.hot_show').show()
            }, function () {
                $('.hot_show').hide()
            })
            $('.s_parent2').hover(function () {
                $('.child_nav_1').hide()
                $('.child_nav_3').hide()
                $('.nav_list').show()
                $('.child_nav_2').show().children().addClass('animated fadeInRight');
            }, function () {
                $('.nav_list').hide()
                $('.child_nav_2 li').children().removeClass('animated fadeInRight');
            })
            $('.s_parent3').hover(function () {
                $('.child_nav_2').hide()
                $('.child_nav_1').hide()
                $('.nav_list').show()
                $('.child_nav_3').show().children().addClass('animated fadeInRight');
            }, function () {
                $('.nav_list').hide()
                $('.child_nav_3').children().removeClass('animated fadeInRight');
            })
        },
        searchInp() {
            $('#keyword').on('change',function(){
                var dat={
                    wd:$('#keyword').val()
                };
                if ($('#keyword').val() != '') {  //当输入框的值不为空的时候才能发送请求             
                    $('.searchbar_198 ul').show()
                    $.ajax({
                        type:"get",
                        url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
                        async: true,
                        data: dat,
                        dataType: 'jsonp',       //已经跨域了
                        jsonp: 'cb',               //百度的回调函数
                        success: function (res) {
                            console.log(res.s);
                            for (var i = 0; i < res.s.length; i++) {
                                resLength = res.s.length;
                                lis = $('<li>' + res.s[i] + '</li>');
                                $('.searchbar_198 ul').append(lis);
                                //要实现点击某一条词的时候也能让输入框中出现点击的这条词，所以要在success里面设置
                                $('.searchbar_198 ul li').eq(i).click(function () {
                                    $('#keyword').val($(this).text());
                                    $(this).addClass('current').siblings().removeClass('current')
                                    $(this).parent().hide()
                                })
                            }
                        },
                        error: function (res) {
                            console.log(res)
                        }
                    });
                } else {
                    $('.searchbar_198 ul').html('')    //如果输入框的词都删除了，把获取的数据结果也清空，因为已经获取到数据了，即使阻止再次发送请求也不会把已经获得的数据清除，所以这里直接用了最简单的办法，直接清空数据
                    $('.searchbar_198 ul').hide()
                }
            })
        }
    }
}())
home.init()