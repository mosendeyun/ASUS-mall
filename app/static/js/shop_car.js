var shopCar = (function () {
    var cartList = document.querySelector('.cart_list');
    console.log(cartList)
    return {
        init() {
            // this.event();
            this.getData();
        },
        event() {
            var _this = this;
            cartList.oninput = function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                var index = target.parentNode.index;
                if (target.nodeName === 'INPUT') {
                    // 修改本地的数据
                    // 获取当前数据
                    var data = _this.data[index];
                    // 修改对应数据的数量
                    data.count = Number(target.value);
                    // 更新本地数据
                    localStorage.shopList = JSON.stringify(_this.data);
                    // _this.setItem(data);
                    // 修改小计
                    _this.insertData(_this.data);

                }
            }
            cartList.onclick = function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                var pNode = target.parentNode;
                if (target.nodeName == 'BUTTON') {
                    _this.data.splice(pNode.index, 1);
                    console.log(_this.data);
                    pNode.remove();
                    localStorage.shopList = JSON.stringify(_this.data);
                }
            }
        },
        getData() {
            var shopList = localStorage.shopList || '[]';
            shopList = JSON.parse(shopList);
            this.data = shopList;
            this.insertData(shopList)

        },
        insertData(data) {
            cartList.innerHTML = '';         
            data.forEach((item, index) => {
                var $div = document.createElement('div');
                $div.index = index;
                $div.className='cart_item'
                $div.innerHTML = `               
                    <div class="cart_product last">
                        <ul class="clearfix">
                            <li class="cart_input">
                                <div class="checkbox_box checkAll on">
                                    <i class="iconfont icon-gou"></i>
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
                                    <a href="javascript:void(0);" class="btn-decrease">-</a>
                                    <input type="text" name="quantity[73664]" value="1">
                                    <a href="javascript:void(0);" class="btn-increase">+</a>
                                </div>
                                <p class="goods_num_wrap">还可购买11件</p>
                            </li>
                            <li class="cart_discount">￥0</li>
                            <li class="cart_point">7399</li>
                            <li class="cart_subtotal">7399</li>
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
                // cartList.appendChild($div);.appendChild
                console.log(cartList)
                cartList.appendChild($div)
            })
        }
    }

}())
shopCar.init()