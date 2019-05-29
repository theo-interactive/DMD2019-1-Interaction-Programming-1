console.log("load");

var $gallery = document.querySelector("#gallery");

var $view = document.querySelector(".view");
var $viewContainer = document.querySelector(".view-container");
var $viewItem = document.querySelectorAll(".view-item");

var $list = document.querySelector(".list");
var $listItem = document.querySelectorAll("li");
var _$a = [];

var _vWidth = 900;
var _vHeight = 660;

var _max = $viewItem.length;
var _cuId = 0;
// 지금 눌린 애를 체크
var _exId = _cuId;
// 눌렸던 애를 체크

$viewContainer.style.width = (_vWidth * _max) + "px";
for(var i=0; i<_max; i++){
    $viewItem[i].style.width = _vWidth + "px";
    // $listItem[i]
    var $a = $listItem[i].querySelector("a");
    _$a.push($a);
    $a.addEventListener("click", function(e){
        e.preventDefault();
        var id = _$a.indexOf(e.currentTarget);
        var $listItemParent = e.currentTarget.parentElement;
        // 현재 클릭된 요소(a)의 부모요소(li)를 찾는다.
        if(!$listItemParent.classList.contains("selected")){
            // 부모 요소(li)가 slected라는 클래스를 포함하고 있는지 체크 - 조건에서는 포함하지 않을 때 false
            _cuId = id;
            $listItem[_exId].classList.remove("selected");
            // 이전에 활성화된 버튼의 클래스 (selected)를 삭제
            $listItem[_cuId].classList.add("selected");
            // 현재 버튼의 클래스(selected)가 활성화되도록 추가
            var left = _vWidth * _cuId * -1;
            // $viewContainer.style.left = left + "px";

            // anime.
            // anime({
            //     targets: $viewContainer,
            //     left: left,
            //     duration: 1000,
            //     easing: "easeInOutQuad"
            // })

            // TweenMax.
            // TweenMax.set(); 애니메이션 없이 스타일 변경
            // TweenMax.set($viewContainer, {css: {left : left}});
            // TweenMax.to(); 애니메이션을 설정
            TweenMax.to($viewContainer, 1.0, {css: {left : left}, ease: Quad.easeInOut});
            _exId = _cuId;
            // 다음 클릭 시 눌렀던 번호를 유지하도록 값을 설정
        }
    })
    // console.log($a);
}
console.log(_$a);