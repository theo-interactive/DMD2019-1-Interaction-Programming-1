//console.log("load")

// $viewContainer
    // $viewItem



// gallery
// view
// view-container
// view-item
// list
// li
// a

var $gallery = document.querySelector('#gallery');

var $view = $gallery.querySelector(".view");
var $viewContainer = $view.querySelector(".view-container");
var $viewItem = $viewContainer.querySelectorAll(".view-item");

var $list = $gallery.querySelector(".list");
var $listItem = $list.querySelectorAll("li");
var _$a = [];

//console.log($viewContainer)

var _vWidth = 800;
var _max = $viewItem.length; 
var _cuId = 0;
var _exId = 0;

    $viewContainer.style.width = (_vWidth * _max) + 'px';
    for(var i = 0; i <_max; i++) {
        $viewItem[i].style.width = _vWidth + 'px';  

        //$listItem
        var $a = $listItem[i].querySelector("a");
        console.log($listItem[i]);
        _$a.push($a);
        $a.addEventListener("click", onClickListItemEl);
    }

    function onClickListItemEl(e) {
        e.preventDefault();
        console.log("click");
        var id = _$a.indexOf(e.currentTarget) // 여기에 들어오는 전달인자에 자동으로 속해있는 속성? 
        // if(_cuId !== id) {
        //     console.log(">>>");
        //     $listItem[_cuId].classList.remove("selected");
        //     _cuId = id;
        // }      

        var $listItemParent = e.currentTarget.parentElement;
        //var $listItemParent = e.currentTarget.$parentElement; //바로 위의 부모를 찾는 요소parentElement
        if(!$listItemParent.classList.contains("selected")) {
            //부모 요소 li가 selected 라는 클래스를 포함하고 있는지 체크 - 조건에서는 포함하지 않을 때 (false)
            _cuId = id;
            //현재 블락된 버튼의 번호를 변경. 
            $listItem[_exId].classList.remove("selected")
            //이전에 활성화 된 버튼의 클래스 selected를 삭제
            $listItem[_cuId].classList.add("selected");
            //현재 버튼의 클래스 selected가 활성화 되도록 추가

            var left = _vWidth*_cuId*-1
          //  $viewContainer.style.left = left + "px"
             
            // anime({
            //         target : $viewContainer,
            //         left : left,
            //         duration : 1000,
            //         easing : "easeInOutQuad"
            // })
            //TweenMax.
            //TweenMax.Set();
            //에니메이션 없이 스타일을 변경

            //TweenMax.set($viewContainer, { css : {scale : 0.9}});
            TweenMax.to($viewContainer, 0.5, { css : {left : left}, ease: Quad.easeInOut});
            _exId=_cuId
            //다음 클릭시 눌렀던 번호를 유지하도록 값을 설정
        }
    }
   