var fixed = (function () {
    var min = document.querySelector('.w-fx2');
    var max = document.querySelector('.w-fx3');
    var box = document.querySelector('.w-fx2');
    return {
        init() {
            this.event();
        },
        event() {
            min.onmouseenter = function () {
                min.style.display = 'none';
                max.style.display = 'block';
            }
            max.onmouseout = function () {
                min.style.display = 'block';
                max.style.display = 'none';
            }
        }
    }
}())