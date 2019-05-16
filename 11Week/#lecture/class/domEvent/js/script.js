console.log('load');

//클릭된 상태를 체크하기 위한 변수. Boolean - true | false
var _isChange = false;
var _isDblChange = false;
var $mouse = document.getElementById("mouse");
$mouse.addEventListener('click', function(e) {
    e.preventDefault();
    if(!_isChange){
        _isChange = true;
        // $mouse.classList.add('mouse1');
        // $mouse.style.textTransform = "uppercase";
        // $mouse.style.color = "blue";
    }else{
        _isChange = false;
        // $mouse.classList.remove('mouse1');
        // $mouse.style.textTransform = "lowercase";
        // $mouse.style.color = "red";
    }
});
//mouseover : 요소 영역에 마우스 커서가 들어갈 때.
$mouse.addEventListener('mouseover', function(e){
    e.preventDefault();
    $mouse.classList.add('mouse1');
});
//mouseover : 요소 영역에 마우스 커서가 나갈 때.
$mouse.addEventListener('mouseout', function(e){
    e.preventDefault();
    $mouse.classList.remove('mouse1');
});
$mouse.addEventListener('dblclick', function(e){
    e.preventDefault();
    if(!_isDblChange){
        _isDblChange = true;
        $mouse.classList.add('mouse2');
    }else{
        _isDblChange = false;
        $mouse.classList.remove('mouse2');
    }
});
$mouse.addEventListener('mouseenter', function(e) {
    console.log('mouse enter');
});
$mouse.addEventListener('mouseleave', function(e) {
    console.log('mouse leave');
    $mouse.classList.remove('mouse3');
});
var _isDrag = false;
$mouse.addEventListener('mousedown', function(e) {
    e.preventDefault();
    console.log('mouse down');
    //마우스를 누를 때.
    _isDrag = true;
});
$mouse.addEventListener('mousemove', function(e) {
    if(!_isDrag) return true;
    //===
    // if(_isDrag === false){
    //     return true;
    // }
    //_isDrag 의 값이 false 일 경우, 뒤의 코드는 실행되지 않는다.
    if(_isDrag){
        console.log('mouse move');
    }
    //div#mouse 에 .mouse3 가 있는지 체크.
    // if(!$mouse.classList.contains('mouse3')){
    //     $mouse.classList.add('mouse3');
    // }
});
$mouse.addEventListener('mouseup', function(e) {
    e.preventDefault();
    console.log('mouse up');
    _isDrag = false;
    //마우스를 뗄 때.
});

//브라우저의 사이즈 조절이 될 때 이벤트.
window.addEventListener('resize', function(e) {
    console.log('resize window');
});
var $selectBrowsers = document.querySelector('#select-browsers');
//브라우저가 스크롤 될 때 이벤트.
window.addEventListener('scroll', function(e) {
    // console.log('scrolling');
    var scrollTop = window.scrollY;
    if(scrollTop >= $selectBrowsers.offsetTop - 200){
        console.log('>>>');
        if(!$selectBrowsers.classList.contains('active')){
            $selectBrowsers.classList.add('active');
        }
        // $selectBrowsers.style.backgroundColor = 'black';
    }else{
        console.log('<<<');
        if($selectBrowsers.classList.contains('active')){
            $selectBrowsers.classList.remove('active');
        }
        // $selectBrowsers.style.backgroundColor = 'white';
    }
    // console.log(scrollTop);
    // console.log($selectBrowsers.offsetTop);
});