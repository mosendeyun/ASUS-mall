var fdj = (function () {
    var $boxw = document.querySelector('.header2-1');
    var header = document.querySelector('.header');

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
                var x = e.clientX, y = e.clientY;
                // console.log(x);
                var left = x - $mark.offsetWidth / 2 - header.offsetLeft;
                // console.log(x, this.offsetLeft);
                var top = y - $mark.offsetHeight / 2 - this.offsetTop;
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

var link = (function () {
    var $liAll = $('.center1 li');
    return {
        init() {
            this.event();
        },
        event() {
            console.log($liAll);
        }
    }
}())


var fixed = (function () {

}())