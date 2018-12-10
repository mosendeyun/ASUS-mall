var shopCar = (function () {
    var cartList = document.querySelector('.cart_list');
    console.log(cartList)
    return {
        init() {
            this.getData();
            this.allcheckbox()
        },
        event() {
            var _this = this;
            $('.cart_action').click(function () {
                let pNode = $(this).parent().parent().parent()
                console.log(_this.data);
                _this.data.splice(pNode.index, 1);
                pNode.remove();
                localStorage.shopList = JSON.stringify(_this.data)
            })
            $(".count").blur(function () {
                let index = $(this).parent().parent().parent().parent().parent().index()
                let data = _this.data[index];
                console.log(data.count)
                data.count = $(this).val()
                localStorage.shopList = JSON.stringify(_this.data)
                _this.insertData(_this.data)
            })
            $('.btn_decrease').click(function () {
                var val = $(this).next().val() * 1
                --val
                if (val < 1) {
                    $(this).next().val(1)
                } else {
                    $(this).next().val(val)
                }
                let index = $(this).parent().parent().parent().parent().parent().index()
                let data = _this.data[index];
                data.count = val
                _this.insertData(_this.data)
            })
            $('.btn_increase').click(function () {
                var val = $(this).prev().val() * 1
                ++val
                if (val < 1) {
                    $(this).prev().val(1)
                } else {
                    $(this).prev().val(val)
                }
                let index = $(this).parent().parent().parent().parent().parent().index()
                let data = _this.data[index];
                data.count = val
                _this.insertData(_this.data)
            })





        },
        getData() {
            var shopList = localStorage.shopList || '[]';
            shopList = JSON.parse(shopList);
            this.data = shopList;
            console.log(this.data)
            this.insertData(shopList)

        },
        insertData(data) {
            cartList.innerHTML = '';
            var sum = 0, total = 0;
            data.forEach((item, index) => {
                var $div = document.createElement('div');
                $div.index = index;
                $div.className = 'cart_item'
                $div.innerHTML = `               
                    <div class="cart_product last">
                        <ul class="clearfix">
                            <li class="cart_input">
                                <div class="checkbox_box on">
                                    <i class=""></i>
                                    <input type="checkbox" class="s_sec" name="checkAll">
                                </div>
                            </li>
                            <li class="cart_goods">
                                <div class="p_pic">
                                    <a href="javascript: ;" target="_blank"><img src="static/images/list${index + 1}.jpg"
                                            alt=""></a>
                                </div>
                                <div class="p_title">
                                    <a target="_blank" href="javascript: ;">${data[index].name}<br>
                                        <span class="" style="margin-top:5px;display:block;">
                                            商品颜色:黑色 </span>
                                    </a>
                                </div>
                            </li>
                            <li class="cart_price every_price">￥${data[index].price}</li>
                            <li class="cart_num">
                                <div class="p_quantity">
                                    <a href="javascript:void(0);" class="btn_decrease">-</a>
                                    <input type="text" id="num" class="count" value="${data[index].count}" placeholder="请输入数量">
                                    <a href="javascript:void(0);" class="btn_increase">+</a>
                                </div>
                                <p class="goods_num_wrap">还可购买11件</p>
                            </li>
                            <li class="cart_discount">￥0</li>
                            <li class="cart_point">${data[index].price * data[index].count}</li>
                            <li class="cart_subtotal">${data[index].price * data[index].count}</li>
                            <li class="cart_action">
                                <a class="btn_delete cart_remove" href="javascript:"><i class="iconfont icon-cuo"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div class="product_active">
                        <div class="goods_gift">
                            <div class="p_gift" style="white-space:nowrap;">
                                <b>[赠品]</b>【12.12提前购】华硕外滩公文包/笔记本包/电脑包/黑/420D涤纶 <i>￥169 x <span class="pro-gift">1</span></i>
                            </div>
                            <div class="p_gift" style="white-space:nowrap;">
                                <b>[赠品]</b>【12.12提前购】华硕有线鼠标AE-01 赠品颜色随机商品颜色:黑色 <i>￥99 x <span class="pro-gift">1</span></i>
                            </div>
                        </div>
                    </div>
                `
                cartList.appendChild($div)
                sum += data[index].count;
                total += data[index].price * data[index].count
            })
            console.log(sum)
            $('.allNum').html(data.length)
            $('.chooseNum').html(sum)
            $('.total_price b').html(total)
            this.event()
        },
        allcheckbox() {
            console.log( $("[name=checkAll]"))
            $("#allcheck").click(function () {                
                if ($(this).prop("checked")) {
                    $("[name=checkAll]").prop("checked", true);
                    $(this).prev().addClass('iconfont checkAll asus-gou')
                    $("[name=checkAll]").prev().addClass('iconfont checkAll asus-gou')
                } else {
                    console.log($(this).prop("checked"))
                    $("[name=checkAll]").prop("checked", false);
                    $(this).prev().removeClass('iconfont checkAll asus-gou')
                    $("[name=checkAll]").prev().removeClass('iconfont checkAll asus-gou')
                }
            });
            $("[name=checkAll]").click(function () {
                var bool = true;
                $(this).prev().toggleClass('iconfont checkAll asus-gou')       
                $("[name=checkAll]").each(function () {
                    console.log(11)
                    if (!$(this).prop("checked")) {
                        bool = false;
                    }
                });
                if (bool) {
                    $("#allcheck").prop("checked", true);
                } else {
                    $("#allcheck").prop("checked", false);
                }
            })
        }
    }

}())
shopCar.init()

