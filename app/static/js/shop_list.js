var shopList = (function () {
    var $box = document.querySelector('.s_box');
    var $box1=document.querySelector('.s_box1') 
    return {
        init() {
            console.log($box)
            this.gatDate();
        },
        event() {
            var _this = this;
            $box.onclick = function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.nodeName === 'A' && target.className == 'btn cart_add') {
                    let father = target.parentNode.parentNode;
                    let count = 1;

                    console.log(count)
                    _this.data[father.index].count = count;
                    _this.addCar(_this.data[father.index])
                }
            }
            $('.collect').click(function () {
                $(this).children().toggleClass("s_col")
            })
            $('.action_more').click(function () {
                $('.s_hidens').toggleClass("hide")
                if($('.s_hidens').hasClass('hide')){
                    $('.action_more i').addClass('asus-down')
                }else{
                    $('.action_more i').addClass('asus-xiangshang')
                }
            })
            $('.flip2').click(_=>{
                $(this).toggleClass('active')
                $('.s_box1').show()
                $('.s_box').hide()
            })
            $('.flip1').click(_=>{
                $(this).toggleClass('active')
                $('.s_box').show()
                $('.s_box1').hide()
            })
        },
        gatDate() {
            $.get('static/json/shop.json', (res) => {
                console.log(res.data)
                if (res.msg === 200) {
                    this.data = res.data;
                    this.insertDate(res.data)
                } else {
                    alert('信息错误');
                }
            }, 'json')
        },
        insertDate(data) {
            for (let i = 0; i < data.length; i++) {
                var $dl = document.createElement('dl')
                $dl.className = 'clearfix goods_item ga-product'
                $dl.index = i
                $dl.innerHTML = `
                    <dt class="goods_pic"><img src="static/images/list${i + 1}.jpg" alt=""></dt>
                    <dd class="goods_info"> 
                        <h3 class="goods_name"><a href="javascript: ;">${data[i].name}</a></h3>
                        <p class="price">￥${data[i].price}</p>
                    </dd>
                    <dd class="goods_buy">
                        <a class="btn cart_add" href="javascripta:;"><i class="iconfont icon-gouwucheman"></i>加入购物车</a> 
                    </dd>
                    <dd class="goods_others">
                        <a href="javascript: ;" class="collect"><i class="iconfont icon-xin">收藏</i></a>
                    </dd>
              `
                if (i <=15) {
                    $box.appendChild($dl)
                }else if(i>15){
                    $box1.appendChild($dl)
                }
            }
            this.event()
        },
        addCar(data) {
            var shopList = localStorage.getItem('shopList') || '[]';
            console.log(shopList)
            shopList = JSON.parse(shopList);
            for (var i = 0; i < shopList.length; i++) {
                if (data.id == shopList[i].id) {
                    shopList[i].count +=data.count;
                    break;
                }
            }
            if (i == shopList.length) {
                shopList.push(data);
            }
            localStorage.shopList = JSON.stringify(shopList);
        }
    }
}())
shopList.init()