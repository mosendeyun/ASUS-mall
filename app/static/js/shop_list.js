var shopList=(function(){
    // const dl=$('.gallery_grid')
    var $box=document.querySelector('.s_box')
    return {
        init(){
            console.log($box)
            this.gatDate();
            // this.event();
        },
        event(){
            var _this=this;
            $box.onclick=function(e){
                e = e || window.event;
                var target=e.target||e.srcElement;
                if(target.nodeName==='A'&&target.className=='btn cart_add'){
                    let father=target.parentNode.parentNode;
                    let count=father.querySelector('.price').innerHTML;
                   _this.data[father.index].count=count;
                   _this.addCar(_this.data[father.index])
                }
            } 
           
            $('.collect').click(function(){
                $(this).children().toggleClass("s_col")
            })        
        },
        gatDate(){
            $.get('http://localhost:8888/gitup/ASUS-mall/app/static/json/shop.json',(res)=>{
                console.log(res.data)
                if(res.msg===200){
                    this.data=res.data;
                    this.insertDate(res.data)                   
                }else{
                    // alert('信息错误');
                }
            },'json')
        },
        insertDate(data){
            for(let i=0;i<data.length;i++){
                var $dl=document.createElement('dl')
                $dl.className='clearfix goods_item ga-product'
                $dl.index=i
              $dl.innerHTML=`
                    <dt class="goods_pic"><img src="static/images/list${i+1}.jpg" alt=""></dt>
                    <dd class="goods_info"> 
                        <h3 class="goods_name"><a href="javascript: ;">${data[i].name}</a></h3>
                        <p class="price">${data[i].price}</p>
                    </dd>
                    <dd class="goods_buy">
                        <a class="btn cart_add" href="shopCar.html"><i class="iconfont icon-gouwucheman"></i>加入购物车</a> 
                    </dd>
                    <dd class="goods_others">
                        <a href="javascript: ;" class="collect"><i class="iconfont icon-xin">收藏</i></a>
                    </dd>
              `
              $box.appendChild($dl)
          }
          this.event()
        },
        addCar(data){
            var shopList=localStorage.addCar('shopList')||'[]';
            shopList=JSON.parse(shopList);
            for(var i=0;i<shopList.length;i++){
                if(data.id==shopList[i].id){
                    shopList[i].count+=data.count;
                    break;
                }
            }
            if(i==shopList.length){
                shopList.push(data);
            }
            localStorage.shopList=JSON.stringify(shopList);
        }
    }
}())
shopList.init()