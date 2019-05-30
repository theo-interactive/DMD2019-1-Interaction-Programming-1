console.log("load");

var $gallery = document.querySelector('#gallery');

var $view = $gallery.querySelector(".view");
var $viewContainer = $view.querySelector(".view-container");
var $viewItem = $viewContainer.querySelectorAll(".view-item");

var $list = $gallery.querySelector(".list");
var $listItem = $list.querySelectorAll("li");
var _$a = [];
var _vWidth = window.innerWidth;
var _vHeight = window.innerHeight;

var _max = $viewItem.length;
var _cuId = 0;
var _exId = _cuId;

window.addEventListener('resize', onResize);
function onResize() {
    _vWidth = window.innerWidth;
    _vHeight = window.innerHeight;
    $viewContainer.style.width = (_vWidth * _max) + 'px';
    for(var i = 0; i < _max; i++){
        $viewItem[i].style.width = _vWidth + 'px';
    }
    //리사이즈 할 때, view-container 의 left 좌표 변경.
    var left = _vWidth * _cuId * -1;
    //$viewContainer.style.left = left + 'px';
    TweenMax.killTweensOf($viewContainer); //해당 요소의 TweenMax 애니메이션 정지.
    TweenMax.set($viewContainer, {css: {left: left}});
}
onResize();

var $paddleNav = $gallery.querySelector(".paddle-nav");
var $btnPaddleEl = $paddleNav.querySelectorAll("button");
var $btnPaddlePrev = $paddleNav.querySelector(".prev");
var $btnPaddleNext = $paddleNav.querySelector(".next");
for(var i = 0; i < $btnPaddleEl.length; i++){
    $btnPaddleEl[i].addEventListener("click", onClickPaddleEl);
}
function onClickPaddleEl(e){
    e.preventDefault();
    var $li = e.currentTarget.parentElement;
    if($li.classList.contains('prev')){
        _cuId--;
        if(_cuId < 0) _cuId = 0;
    }else if($li.classList.contains('next')){
        _cuId++;
        if(_cuId >= _max) _cuId = _max - 1;
    }
    slide();
}

for(var i = 0; i < _max; i++){    
    var $a = $listItem[i].querySelector("a");
    _$a.push($a);
    $a.addEventListener("click", onClickListItemEl);
}
function onClickListItemEl(e) {
    e.preventDefault();
    var id = _$a.indexOf(e.currentTarget);
    var $listItemParent = e.currentTarget.parentElement;
    //현재 클릭된 요소(a) 의 부모 요소(li)를 찾는다.
    if(!$listItemParent.classList.contains('selected')){
        //부모 요소(li) 가 selected 라는 클래스를 포함하고 있는지 체크 - 조건에서는 포함하지 않을 때(false).
        _cuId = id;
        //현재 클릭된 버튼의 번호를 변경.
        slide();
    }
}
$btnPaddlePrev.classList.add('disabled');
function slide() {
    if(_cuId === 0){
        $btnPaddlePrev.classList.add('disabled');
        $btnPaddleNext.classList.remove('disabled');
    }else if(_cuId === _max - 1){
        $btnPaddlePrev.classList.remove('disabled');
        $btnPaddleNext.classList.add('disabled');
    }else{
        $btnPaddlePrev.classList.remove('disabled');
        $btnPaddleNext.classList.remove('disabled');
    }
    $listItem[_exId].classList.remove("selected");
    //이전에 활성화된 버튼의 클래스(selected)를 삭제
    $listItem[_cuId].classList.add("selected");
    //현재 버튼의 클래스(selected)가 활성화되도록 추가.
    var left = _vWidth * _cuId * -1;
    //anime.
    /*
    anime({
        targets : $viewContainer,
        left : left,
        duration : 1000,
        easing : "easeInOutQuad"
    });
    */
    //TweenMax.
    //TweenMax.set();
    //애니메이션 없이 스타일을 변경.
    //TweenMax.set($viewContainer, { css: { left: left }});
    //TweenMax.to();
    //애니메이션을 설정.
    TweenMax.to($viewContainer, 1.0, { css: { left: left }, ease: Quad.easeInOut });
    //$viewContainer.style.left = left + 'px';
    _exId = _cuId;
    //다음 클릭시 눌렸던 번호를 유지하도록 값을 설정.
}
