console.log("load");

//셀렉터 찾기.
var $cursorDot = document.querySelector("#cursor-dot");
var $cursorBG = document.querySelector("#cursor-bg");
var $progress = document.querySelector("#progress");
var $list = document.querySelector("#list");
var $listEl = $list.querySelectorAll("a");

//커서 움직이기.
window.addEventListener("mousemove", onMouseMoveWindow);

function onMouseMoveWindow(e) {
    var posX = e.pageX, posY = e.pageY;
    //현재 커서의 좌표값.
    // $cursorDot.style.top = posY + 'px';
    // $cursorDot.style.left = posX + 'px';
    TweenMax.killTweensOf($cursorDot);
    TweenMax.killTweensOf($cursorBG);
    TweenMax.killTweensOf($progress);
    TweenMax.to($cursorDot, 0.15, {css: {top: posY, left: posX}});
    TweenMax.to($cursorBG, 0.2, {css: {top: posY, left: posX}});
    TweenMax.to($progress, 0.25, {css: {top: posY, left: posX}});
}

for(var i = 0; i < $listEl.length; i++){
    // console.log($listEl[i]);
    $listEl[i].addEventListener('mouseenter', function(){
        // console.log('enter');
        if(!$cursorDot.classList.contains("active")){
            $cursorDot.classList.add("active");
        }
        if(!$cursorBG.classList.contains("active")){
            $cursorBG.classList.add("active");
        }
        if(!$progress.classList.contains("active")){
            $progress.classList.add("active");
        }
    })
    $listEl[i].addEventListener('mouseleave', function(){
        // console.log('leave');
        if($cursorDot.classList.contains("active")){
            $cursorDot.classList.remove("active");
        }
        if($cursorBG.classList.contains("active")){
            $cursorBG.classList.remove("active");
        }
        if($progress.classList.contains("active")){
            $progress.classList.remove("active");
        }
    });
}