console.log("load");

/*

gallery

view
view-container
view-item

list
li
a

*/

var $gallery = document.querySelector('#gallery');

var $view = $gallery.querySelector(".view");
var $viewContainer = $view.querySelector(".view-container");
var $viewItem = $viewContainer.querySelectorAll(".view-item");

var $list = $gallery.querySelector(".list");
var $listItem = $list.querySelectorAll("li"); //-> list.
var _$a = [];

var _vWidth = 800;
var _max = $viewItem.length;
var _cuId = 0;
var _exId = _cuId;

$viewContainer.style.width = (_vWidth * _max) + 'px';
for(var i = 0; i < _max; i++){
    $viewItem[i].style.width = _vWidth + 'px';
    //$listItem[i]
    var $a = $listItem[i].querySelector("a");
    _$a.push($a);
    $a.addEventListener("click", onClickListItemEl);
    //console.log($a);
}
function onClickListItemEl(e) {
    e.preventDefault();
    var id = _$a.indexOf(e.currentTarget);
    //indexOf 는 현재 자기가 몇번째 해당되는지
    // if(_cuid!== id){
    //     console.log(">>>");
    //     $listItem[_cuid].classList.remove("selected");
    //     _cuid = id;
    // } 

    var $listItemParent = e.currentTarget.parentElement;
    //현재 클릭된 요소(a)의 부모를 찾는다.
    if(!$listItemParent.classList.contains('selected')){
    //부모 요소(li)가 selected 라는 클래스를 포함하고 있는지 체크 - 조건에서는 포함하지 않을 때 (false)
    _cuId = id;
    //현재 클릭된 버튼의 번호를 변경
    $listItem[_exId].classList.remove("selected");
    //이전에 활성화 된 버튼의 클래스(selected)를 삭제
    $listItem[_cuId].classList.add("selected");
    //현재 버튼의 클래스(selected)가 활성화되도록 추가
    var left = _vWidth * _cuId * -1;

    //anime
    /*
    anime({
        targets : $viewContainer,
        left : left,
        duration : 1000,
        easing : "easeInOutQuad"

    })
    */

    //TweenMax
    //TweenMax.set();
    //애니메이션 없이 스타일을 변경
    //TweenMax.set($viewContainer,{css:{left:left}})
    //TweenMax.to();
    //애니메이션을 설정
    TweenMax.to($viewContainer, 0.5, { css : {left:left}, ease : Quad.easeInOut});


    //$viewContainer.style.left = left + "px";
    _exId = _cuId;
    //다음 클릭식 눌렀던 번호를 유지하도록 값을 설정
    }

}