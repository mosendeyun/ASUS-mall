var fdj = (function () {
    var $box = document.querySelector('.h-l');
    var $mark = document.querySelector('.mark');
    var $showbox = document.querySelector('.h-r');
    var img = $showbox.querySelector('img');
    return {
        init() {
            this.event();
        },
        event() {
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
                var left = x - $mark.offsetWidth / 2 - this.offsetLeft;
                var top = y - $mark.offsetHeight / 2 - this.offsetTop;
                var lmax = this.offsetWidth - $mark.offsetWidth;
                var tmax = this.offsetHeight - $mark.offsetHeight;
                left = left > lmax ? lmax : (left < 0 ? 0 : left);
                top = top > tmax ? tmax : (top < 0 ? 0 : top)
                console.log(left, top);
                $mark.style.left = left + 'px';
                $mark.style.top = top + 'px';
                img.style.left = -2 * x + 'px';
                img.style.top = -2 * y + 'px';

            }
        },
        showImg() {

        }
    }
}())