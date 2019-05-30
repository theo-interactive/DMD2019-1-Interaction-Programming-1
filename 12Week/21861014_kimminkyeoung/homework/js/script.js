console.log("load");

var $wrap = document.querySelector("#wrap");
var $gallery = document.querySelector('#gallery');

var $view = $gallery.querySelector(".view");
var $viewContainer = $view.querySelector(".view-container");
var $viewItem = $viewContainer.querySelectorAll(".view-item");

var $list = $gallery.querySelector(".list");
var $listItem = $list.querySelectorAll("li");
var $circle = $list.querySelectorAll(".circle");
var _$a = [];

var _vWidth = 500;
var _max = $viewItem.length;
var _cuId = 0;
var _exId = _cuId;

$viewContainer.style.width = (_vWidth * _max) + 'px';
// view-container 의 가로 width 를 (현재 내가 설정 해 놓은 이미지 가로값) * 이미지갯수 를 한 값으로 만들어준다 
for(var i = 0 ; i < _max; i++){
     $viewItem[i].style.width = _vWidth + 'px';
     // viewitem 의 순서 마다 가로값을 500으로 해준다
     var $a = $listItem[i].querySelector("a");
     // a태그의 순서를 찾아줌
     _$a.push($a);
     // []에 넣어준다
    $a.addEventListener("click", onClickListItemEl);   
}

function onClickListItemEl(e) {
     e.preventDefault();
     var id = _$a.indexOf(e.currentTarget); //indexOf 는 현재 자기가 몇번째 해당되는지
     var $listItemParent = e.currentTarget.parentElement;
     // 현재 클릭된 요소 (a) 의 부모 요소 (li)를 찾는다.
     if(!$listItemParent.classList.contains('selected')){
         // 부모 요소(li) 가 selected 라는 클래스를 포함하고 있는지 체크 - 조건에서는 포함하지 않을 때(false).
         _cuId = id;
         // 현재 클릭된 버튼의 번호를 변경.
         $listItem[_exId].classList.remove("selected");
         // 이전에 활성화된 버튼의 클래스(selected)를 삭제
         $listItem[_cuId].classList.add("selected");
         // 현재 버튼의 클래스(selected)가 활성화되도록 추가.
         var left = _vWidth * _cuId * -1; //옆으로 이동
         // $viewContainer.style.left = left + 'px';

         anime({
          targets:$viewContainer,
          left: left,
          duration:1000,
          easing:"easeInOutQuad"
          });

         _exId = _cuId;
         // 다음 클릭 시 눌렸던 번호를 유지하도록 값을 설정.
     }
 }


 console.log("load");

//셀렉터 찾기


var $cursorDot = document.querySelector("#cursor-dot");
var $cursorBG = document.querySelector("#cursor-bg");
var $progress = document.querySelector("#progress");
var $listEl = $list.querySelectorAll("a");

//커서 움직이기

window.addEventListener("mousemove", onMouseMoveWindow);

function onMouseMoveWindow(e){
    //console.log('move');
    var posX = e.pageX, posY=e.pageY;
    //현재 커서의 좌표값
    //console.log(posX,posY)
    //$cursorDot.style.top = posY+'px';
    //$cursorDot.style.left = posX+'px';
    TweenMax.to($cursorDot, 0.15,{css : {top:posY,left:posX}});
    TweenMax.to($cursorBG, 0.2,{css : {top:posY,left:posX}});
    TweenMax.to($progress, 0.25,{css : {top:posY,left:posX}});
}

for(var i=0; i<$listEl.length;i++){
    $viewItem[i].addEventListener('mouseenter',function(){
        console.log("enter");
        if(!$cursorBG.classList.contains('active')){
            $cursorBG.classList.add('active')
        }
        if(!$progress.classList.contains('active')){
            $progress.classList.add('active')
        }
    })
    
    $viewItem[i].addEventListener('mouseleave',function(){
        console.log('leave');
        if(!$cursorBG.classList.contains('active'))
        {$cursorBG.classList.remove('active')}
        if(!$progress.classList.contains('active')){
        $progress.classList.remove('active')}
    })
}


 



