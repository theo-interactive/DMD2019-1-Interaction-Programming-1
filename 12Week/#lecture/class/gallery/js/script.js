console.log("load");

var $gallery = document.querySelector('#gallery');

var $view = $gallery.querySelector(".view");
var $viewContainer = $view.querySelector(".view-container");
var $viewItem = $viewContainer.querySelectorAll(".view-item");

var $list = $gallery.querySelector(".list");
var $listItem = $list.querySelectorAll("li");
var _$a = [];

var _vWidth = 800;
var _max = $viewItem.length;
var _cuId = 0;

$viewContainer.style.width = (_vWidth * _max) + 'px';
for(var i = 0; i < _max; i++){
    $viewItem[i].style.width = _vWidth + 'px';
    var $a = $listItem[i].querySelector("a");
    _$a.push($a);
    $a.addEventListener("click", onClickListItemEl);
}
function onClickListItemEl(e) {
    e.preventDefault();
    var id = _$a.indexOf(e.currentTarget);
    console.log('click', id);
}