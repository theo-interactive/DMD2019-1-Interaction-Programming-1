console.log("load")
var $gallery = document.querySelector('#gallery');
var $view = $gallery.querySelector(".view");
var $viewContainer = $view.querySelector(".view-container");
var $viewItem = $viewContainer.querySelectorAll(".view-item");

var $list = $gallery.querySelector(".list");
var $listItem = $list.querySelectorAll("li"); //list.
var _$a = [];

var _vWidth = 800;
var _max = $viewItem.length;
// cuid : 현재 눌린 요소, exid : 이전에 눌렸던 요소
var _cuId = 0;
var _exId = _cuId


$viewContainer.style.width = (_vWidth * _max) + "px";
for(var i=0; i<_max; i++) {
    $viewItem[i].style.width = _vWidth + 'px';
    var $a = $listItem[i].querySelector("a");
    _$a.push($a);
    $a.addEventListener("click", onClickListItemEl);
    // console.log($listItem[i]);
}
function onClickListItemEl(e){
    e.preventDefault();
    // console.log('click');
    // 현재 자신이 몇번에 속하는지 화인.
    var id = _$a.indexOf(e.currentTarget);
    // parentElement -> 상위 부모 요소를 찾음.
    var $listItemParent = e.currentTarget.parentElement;
    // 현재 클릭된 요소(a)의 부모요소(li)를 찾는다.
    if (!$listItemParent.classList.contains('selected')) {
        _cuId = id; 
        // 부모 요소(li)가 selected라는 클래스를 포함하고 있는지 체크. 조건에서는 포함하지 않을 떄(false)
        $listItem[_exId].classList.remove("selected");
        // 이전에 활성화 된 버튼의 클래스(selected)삭제
        $listItem[_cuId].classList.add("selected");
        //현재 버튼의 클래스(selected)가 활성화 되도록 추가.
        var left = _vWidth * _cuId * -1;
        // anime
        // anime({
        //     targets : $viewContainer,
        //     left : left,
        //     duration : 1000,
        //     easing : "easeInOutQuad"
        // })
        //tween max
        //TweenMax.set();
        //애니메이션 없이 스타일을 변경
        // TweenMax.set($viewContainer, {css : {left : left}});
        TweenMax.to($viewContainer, 1, {css:{left:left}, ease: Quad.easeInOut });
        
        // $viewContainer.style.left = left + 'px';
        _exId = _cuId;
        // 다음 클릭 시 눌렸던 번호를 유지하도록 값을 설정
    }
    console.log($listItemParent);
} 
// console.log('load')

