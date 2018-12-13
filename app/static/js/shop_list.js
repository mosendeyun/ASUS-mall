var shopList = (function () {
    var $box = document.querySelector('.s_box');
    var $box1 = document.querySelector('.s_box1')
    return {
        init() {
          this.a=0
          this.sum=0;
          this.cot=0;
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
                    // console.log(_this.data[father.index])
                    _this.data[father.index].count = count;
                    _this.addCar(_this.data[father.index])       
                }
            }
            $('.collect').click(function () {
                $(this).children().toggleClass("s_col")
            })
            $('.action_more').click(function () {
                $('.s_hidens').toggleClass("hide")
                if ($('.s_hidens').hasClass('hide')) {
                    $('.action_more i').addClass('asus-down')
                } else {
                    $('.action_more i').addClass('asus-xiangshang')
                }
            })
            $('.flip2').click(_ => {
                $(this).toggleClass('active')
                $('.s_box1').show()
                $('.s_box').hide()
            })
            $('.flip1').click(_ => {
                $(this).toggleClass('active')
                $('.s_box').show()
                $('.s_box1').hide()
            })
            $('.cart_add').click(function () {
                $('#s_popbox').show()
                let father =$(this).parent().parent().parent()
                console.log(_this.a)
                $('.s_popup').html(`
                    <p class="dailog_content"><i class="fonst iconfont asus-cuo"></i>加入购物车成功</p>
                    <i class="cuo iconfont asus-cuo"></i>
                    <p class="minicon_caution_info">目前选购商品共<em>${_this.a}</em>种<em>${_this.cot}</em>件。合计 <i class="price">${_this.sum}</i></p>
                    <button class="dailog_button">继续购物</button>
                    <button class="dailog_button_close " style="display: block;"><a href="shop_car.html"> 进入购物车</a></button>
                `)
                $('.dailog_button_close').click(function () {
                    $('#s_popbox').hide()
                })
                $('.dailog_button').click(_ => {
                    $('#s_popbox').hide()
                })
                $('.cuo').click(_=>{
                    $('#s_popbox').hide()
                })
            })
        },
        gatDate() {
            $.get('http://10.36.141.233.:8888/gitup/ASUS-mall/server/php/json.php', (res) => {
                // $.get('static/json/shop.json', (res) => {
                // console.log(res)
                if (res.msg === 200) {
                    this.data = res.data;
                    this.insertDate(res.data)
                } else {
                    alert('信息错误');
                }
            })
        },
        insertDate(data) {
            for (let i = 0; i < data.length; i++) {
                var $dl = document.createElement('dl')
                $dl.className = 'clearfix goods_item ga-product'
                $dl.index = i
                $dl.innerHTML = `
                    <dt class="goods_pic"><img src="static/images/list${i + 1}.jpg" alt=""></dt>
                    <dd class="goods_info"> 
                        <h3 class="goods_name"><a href="w-fangdajing.html">${data[i].name}</a></h3>
                        <p class="price">￥${data[i].price}</p>
                    </dd>
                    <dd class="goods_buy">
                        <a class="btn cart_add" href="javascripta:;"><i class="iconfont icon-gouwucheman"></i>加入购物车</a> 
                    </dd>
                    <dd class="goods_others">
                        <a href="javascript: ;" class="collect"><i class="iconfont icon-xin">收藏</i></a>
                    </dd>
              `
                if (i <= 15) {
                    $box.appendChild($dl)
                } else if (i > 15) {
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
                    shopList[i].count += data.count;
                    break;
                }
            }
            if (i == shopList.length) {
                shopList.push(data);
            }
            this.sum+=shopList[i].price
            this.cot+=shopList[i].count
            this.a=shopList.length
            console.log(shopList)
            localStorage.shopList = JSON.stringify(shopList);
            localStorage.carnum=shopList.length;
        }
    }
}())
shopList.init()