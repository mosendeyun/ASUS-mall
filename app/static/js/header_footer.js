var home=(function(){
    return{
        init(){
            this.insert()
        },
        event(){

        },
        insert(){
            $('.s_count').html(localStorage.shopList.split().length+1)
            $('.s_cart').mouseenter(function(){
                $('.minicart_cont').css({display:'block'})
                $('.s_nums').html(`您一共选择了${localStorage.shopList.split().length+1}件产品`)
            }).mouseleave(function(){
                $('.minicart_cont').css({display:'none'})
            })
        }
    }
}())
home.init()