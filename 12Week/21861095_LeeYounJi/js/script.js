
var $gallery = document.querySelector("#gallery");
var $view = $gallery.querySelector(".view");
var $viewcontainer= $view.querySelector(".view-container");
var $viewItem = $viewcontainer.querySelectorAll(".view-item");

var $list= $gallery.querySelector(".list");
var $listItem= $list.querySelectorAll("li");

var _$a=[];



var _vwidth=800;
var _max= $viewItem.length;

var _cuId =0;
var _exId = _cuId;
    $viewcontainer.style.width=(_vwidth * _max)+"px";


for(var i=0; i<_max; i++){
    $viewItem[i].style.width=_vwidth+"px";
    var $a=$listItem[i].querySelector("a");
    _$a.push($a);
    $a.addEventListener("click", onclickListItenEl );
    console.log($listItem[i]);
};

function onclickListItenEl(e){
    console.log("click");

    var id= _$a.indexOf(e.currentTarget);
    console.log("click", id);

    var $listItemParent= e.currentTarget.parentElement; 
    if(!$listItemParent.classList.contains("selected")){
        console.log($listItemParent.classList.contains("selected"));
        _cuId= id;
  
        $listItem[_exId].classList.remove("selected");

        $listItem[_cuId].classList.add("selected");
    

       var left=_vwidth * _cuId *-1;

        //anime
         anime({
             targets: $viewcontainer,
             left: left,
             duration:1000,
             easing:"easeInOutQuad"
           });


        _exId=_cuId;
    
        console.log(_cuId+"sf");
    }
}

var $cursorDot = document.querySelector("#cursor-dot");
var $cursorBG = document.querySelector("#cursor-bg");
var $progress = document.querySelector("#progress");
var $list = document.querySelector("#list");
window.addEventListener("mousemove", onMouseMoveWindow);
function onMouseMoveWindow(e){

   var posX=e.pageX, posY=e.pageY;

    
    TweenMax.to($cursorDot, 0.015, {css:{top: posY, left:posX}, ease:Quad.easeInOut});
    TweenMax.to($cursorBG, 0.1, {css:{top: posY, left:posX},  ease:Quad.easeInOut});
    TweenMax.to($progress, 0.15, {css:{top: posY, left:posX},  ease:Quad.easeInOut});
    }


    //교수님 마우스 포인터가 오ㅐ 조금 덜어져서 따라가는 걸까요,,,,
    