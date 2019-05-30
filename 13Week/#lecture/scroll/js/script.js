var $btnTop = document.querySelector("#btn-top");
var $scroll = document.scrollingElement || document.body || document.documentElement;

$btnTop.addEventListener("click", onClickBtnTop);
function onClickBtnTop(e){
    e.preventDefault();
    console.log("click btn top");
    anime({
        targets : $scroll,
        scrollTop : 0,
        duration : 1000,
        ease : 'easeInOutQuad'
    });
}