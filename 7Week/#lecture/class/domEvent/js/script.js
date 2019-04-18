console.log('load');
//addEventListener *********
var $btn1 = document.getElementById("btn1");
//console.log($btn1);
var _cuId = 0;
$btn1.addEventListener('click', function(event) {
    console.log(_cuId);
    // console.log("click");
    // console.log(event);
    event.preventDefault();
    //해당 요소가 기본으로가 취하는 이벤트는 제거하겠다.
    //location.reload();
    var $box = document.createElement('div');
    $box.classList.add('box');
    $box.style.display = 'inline-block';
    $box.style.width = 40 + 'px';
    $box.style.height = 20 + 'px';
    $box.style.textAlign = "center";
    $box.style.fontSize = 10 + 'px';
    $box.style.lineHeight = 20 + 'px';
    $box.innerText = "box";
    // if(_cuId === 1){
    if(_cuId % 2 === 1){
        $box.style.backgroundColor = 'red';
        $box.style.color = 'black';
    }else{
        $box.style.backgroundColor = 'black';
        $box.style.color = 'white';
    }
    var $div = document.getElementById('div');
    //$div.insertBefore($box);
    $div.appendChild($box);
    _cuId++;
});
var $btn2 = document.getElementById("btn2");
$btn2.addEventListener('click', onClickBtn2);
var _cuId2 = 0;
function onClickBtn2(evt){
    evt.preventDefault();
    var $newBox = document.createElement('div');
    $newBox.classList.add('box');
    $newBox.innerText = 'box';
    if(_cuId2 % 2 === 1){
        $newBox.classList.add('red');
    }else{
        $newBox.classList.add('black');
    }
    var $div = document.getElementById("div");
    $div.appendChild($newBox);
    _cuId2++;
}