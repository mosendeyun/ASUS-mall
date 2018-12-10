// e.preventDefault?e.preventDefault:e.returnValue=false;
// console.log(2313131);
// function (e){
//     e=event||window.event;

// }
var skip=document.querySelector('#body');
console.log(skip);
skip.addEventListener("click", function(e){
    console.log(skip);
    
    var e = e||window.event;
//  event.preventDefault?event.preventDefault:event.returnValue=false;
return false;
// if (e && e.preventDefault) {
//     //阻止默认浏览器动作(W3C) 
//     e.preventDefault();
//     console.log(123123213);
// }
// else {
//     //IE中阻止函数器默认动作的方式 
//     window.event.returnValue = false;
//     return false;
// }
} )
