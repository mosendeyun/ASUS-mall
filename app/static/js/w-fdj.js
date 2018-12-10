var fdj = (function () {
    var $boxw = document.querySelector('.header2-1');
    var header = document.querySelector('.header');
	var header2 = document.querySelector('.header2');
    // var liAll = document.querySelectorAll('.uu li');


    var $box = document.querySelector('.h-l');
    var $mark = document.querySelector('.mark');
    var $showbox = document.querySelector('.h-r');
    var img = $showbox.querySelector('img');

    var img2 = document.querySelector('.h-l img');
    return {
        init() {
            this.event();
        },
        event() {
            // console.log(liAll);
            $box.onmouseenter = function () {
                $mark.style.display = "block";
                $showbox.style.display = "block";
            }
            $box.onmouseleave = function () {
                $mark.style.display = "none";
                $showbox.style.display = "none";
            }
            $box.onmousemove = function (e) {

                var e = e || window.event;
                var x = e.clientX, y = e.pageY;
                // console.log(x);
                var left = x - $mark.offsetWidth / 2 - header.offsetLeft;
                // console.log(x, this.offsetLeft);
                var top = y - $mark.offsetHeight / 2 - header2.offsetTop;
                // console.log($boxw.offsetTop);
                var lmax = this.offsetWidth - $mark.offsetWidth;
                var tmax = this.offsetHeight - $mark.offsetHeight;
                left = left > lmax ? lmax : (left < 0 ? 0 : left);
                top = top > tmax ? tmax : (top < 0 ? 0 : top)
                // console.log(left, top);
                $mark.style.left = left + 'px';
                $mark.style.top = top + 'px';
                img.style.left = -2 * left + 'px';
                img.style.top = -2 * top + 'px';

            }
            $('.uu li').click(function () {
                console.log($(this).index());
                console.log(img);
                img.src = `../images/w${$(this).index() + 1}.jpg`;
                img2.src = `../images/w${$(this).index() + 1}.jpg`;
            })
        },
        showImg() {

        }
    }
}())

var shuliang = (function () {
    var jian = document.querySelector('.header6-2-2');
    var jia = document.querySelector('.header6-2-4');
    var zhong = document.querySelector('.header6-2-3');
    var num = 0;
    return {
        init() {
            this.event();
        },
        event() {
            jian.onclick = function () {
                num--;
                if (num <= 0) {
                    num = 0;
                }
                zhong.innerHTML = num;
            }
            jia.onclick = function () {
                num++;
                if (num >= 6) {
                    num = 5;
                    alert("对不起，最多买五台");
                }
                zhong.innerHTML = num;
            }
            zhong.onclick = function () {
                alert(3);
            }
        },
    }
}())

var djs = (function () {
    return {
        init() {
            var h1 = document.querySelector('.header3-3-2');
            //getTimeDif(startTime,endTime),返回一个秒数
            //商品结束时间
            var endTime = new Date("2018/12/28 11:00:00");
            //当前时间
            var now = new Date();
            //两个时间的时间差
            var t = getTimeDif(now, endTime);

            showTime();
            //console.log(t);
            //关键在于如何通过这个秒数获取具体的时间
            //具体的时间：多少 天？多少小时？多少分钟？多少秒
            function showTime() {
                if (t < 0) {
                    h1.innerHTML = "活动时间过期";
                    return;
                }
                var d = parseInt(t / 3600 / 24);//得到多少天；

                var h = parseInt((t / 3600 / 24 - d) * 24);//得到多少小时

                var m = parseInt(((t / 3600 / 24 - d) * 24 - h) * 60);//得到分钟

                var s = parseInt((((t / 3600 / 24 - d) * 24 - h) * 60 - m) * 60);//得到秒数
                //console.log(hour);

                h1.innerHTML = "距离活动时间结束还剩下：" + d + "天" + h + "时" + m + "分钟" + s + "秒"
            };
            //让时间差的秒数，第秒钟减一秒


            setInterval(function () {
                t--;
                if (t < 0) {
                    h1.innerHTML = "活动时间过期";
                    return;
                }
                //显示倒计时时间
                showTime();//h1.innerHTML = "距离活动时间结束还剩下："+d+"天"+h+"时"+m+"分"+s+"秒"
            }, 1000);

        }
    }
}())

var xhj = (function () {
    return {
        init() {
            var img = document.querySelector('.top')
            window.onscroll = function () {
                var t = document.documentElement.scrollTop;
                if (t > 400) {
                    img.style.display = "block";
                    img.onclick = function () {
                        var time = setInterval(fn, 20)
                        function fn() {
                            document.documentElement.scrollTop -= 5
                        }
                        document.onmousedown = function () {
                            clearInterval(time);
                        }
                    }
                }
                else {
                    img.style.display = "none";
                }
            }
        }
    }
}())

var link = (function () {
    var $liAll = $('.center1 li');
    var $boxAll = $('.center2-1');
    return {
        init() {
            this.event();
        },
        event() {
            $liAll.mouseenter(function () {
                console.log($(this).index());
                $boxAll.eq($(this).index()).show().siblings().hide();
            })
        }
    }
}())