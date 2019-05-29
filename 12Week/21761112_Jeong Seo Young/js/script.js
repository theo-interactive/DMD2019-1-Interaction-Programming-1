console.log("load");
var $gallery = document.querySelector("#gallery");
var $view = $gallery.querySelector(".view");
var $viewContainer = $view.querySelector(".view-container");
var $viewItem = $viewContainer.querySelectorAll(".view-item");

var $list = $gallery.querySelector(".list");
var $listItem = $list.querySelectorAll("li"); //-> list.
var _$a = [];

var _vWhidth = 800;
var _max = $viewItem.length;
var _cuId = 0;
var _exId = _cuId;

    $viewContainer.style.width = (_vWhidth * _max) + 'px';
    for(var i = 0; i < _max; i++){
        $viewItem[i].style.width = _vWhidth + 'px';
        var $a = $listItem[i].querySelector("a");
        _$a.push($a);
        $a.addEventListener("click", onClickListItemEl);
    }
    function onClickListItemEl(e){
        e.preventDefault();
        var id= _$a.indexOf(e.currentTarget);
        //console.log('click',id)
        //if(_cuId !== id) {
            //console.log(">>>");
            //$listItem[_cuId].classList.remove("selected");
            //_cuId = id;
        //}
        var $listItemParent = e.currentTarget.parentElement;
        //현재 클릭된 요소(a) 의 부모 요소(li)를 찾는다.
        if($listItemParent.classList.contains('selected'));{
            //부모 요소(li)가 selected 라는 클래스를 포함하고 있는지 체크 - 조건에서는 포함하지 않을 때 (false).
            _cuId = id;
            //현재 클릭된 버튼의 번호를 변경.
            $listItem[_exId].classList.remove("selected");
            //이전에 활성화된 버튼의 클래스 (selected)를 삭제.
            $listItem[_cuId].classList.add("selected");
            //현재 버튼의 클래스가 활성화 되도록 추가.
            var left= _vWhidth * _cuId * -1;

            //$viewContainer.style.left = left + 'px';

            //anime.
            /*
            anime({

          
                targets : $viewContainer,
                left : left,
                duration : 1000,
                easing : 'easeInOutQuad'


            });
            */
            //TweenMax.
            //TweenMax.set();
            //애니메이션 없이 스타일을 변경.
            //TweenMax.set($viewContainer,{css: { left : left}});

            //TweenMax.to();
            //애니메이션을 설정.
            TweenMax.to($viewContainer, 0.5 ,{css: {left : left}, ease : Quad.easeInOut});




            _exId =_cuId;
            //다음 클릭시 눌렀던 번호를 유지하도록 값을 설정.
        }
        //console.log($listItemParent.classList.contains('selected'))
        //console.log($listItemParent);
    }

 




