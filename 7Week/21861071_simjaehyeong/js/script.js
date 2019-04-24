//console.log("load");


/*
Quest 1.
1. button#btn-window-size 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. 윈도우 콘텐츠 영역의 넓이값과 높이값이 아래의 문자열 결과값과 같이 alert 으로 출력되도록 작성합니다.
    -> 문자열 결과 : 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.
*/

var $btnwinsize = document.getElementById("btn-window-size");
// console.log($btnwinsize);
$btnwinsize.addEventListener('click', function(event){
    // console.log(event);
    alert("윈도우 콘텐츠의 영역 width : " + window.innerWidth + " px, height : " + window.innerHeight + " px 입니다.");
});
// ex) 윈도우 콘텐츠의 영역 width : 1062 px, height : 722 px 입니다.


/*
Quest 2.
1. button#btn-check-id 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. id 가 'user_id' 인 요소를 찾고 value 속성의 값의 문자열 개수를 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
    -> 문자열 결과 : input#user_id - value 속성 값의 개수는 ____입니다.
*/

var $btncheckid = document.getElementById("btn-check-id");
// console.log($btncheckid);
var $userid = document.getElementById("user_id");
$btncheckid.addEventListener('click', function(event){
    // console.log(event);
    var id_value = $userid.value.length;
    console.log("input#user_id - value 속성 값의 개수는 " + id_value + "입니다."); //클릭 이벤트 순간에 넣은거라 출력도 반짝! 하는 걸까?
});


/*
Quest 3.
1. button#btn-cancel 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/

var $btncancel = document.getElementById("btn-cancel");
//console.log($btncancel);
$btncancel.addEventListener('click', function(event){
    // console.log(event);
    console.log("새로고침");
    //location.reload();
});


/*
Quest 4.
1. button#btn-apply 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. '가입하시겠습니까?' 라는 메세지를 포함하고 있는 확인창(confirm) 을 출력합니다.
3. 사용자가 확인을 선택한 경우, 아래의 메시지 결과값을 alert 으로 출력되도록 작성합니다.
    -> 메시지 결과 : 가입을 환영합니다!
*/

var $btnapply = document.getElementById("btn-apply");
//console.log($btnapply);
$btnapply.addEventListener('click', function(event){
    // console.log(event);
    var apply = confirm('가입하시겠습니까?');
    console.log(apply);
    if(apply == true){
        alert('가입을 환영합니다!');
    }
});


/*
Quest 5.
1. button#btn-reset 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. '초기화하시려면 100을 입력하세요.' 라는 메세지를 포함하고 있는 prompt 를 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/

//input#user_id 와 input#user_pass 불러오는 변수 생성
var userid = document.getElementById("user_id");
var userpw = document.getElementById("user_pass");

var $btnreset = document.getElementById("btn-reset");
//console.log($btnreset);
$btnreset.addEventListener('click', function(event){
    // console.log(event);
    var resetans = prompt('초기화하시려면 100을 입력하세요.');
    console.log(resetans);
    if(resetans == '100'){
        // console.log("d"); //확인
        var id_val = userid.value;
        var pw_val = userid.value;
        //값 삭제하는 코드라고 생각했다..
        userid.removeAttribute(id_val);
        userpw.removeAttribute(pw_val);
    }
});
//넣은 값에 상관없이 초기화돼서..'사용자가 100 정확히 입력' 만족을 못한건가 싶지만 다른 방법은 모르겠다.


/*
Quest 6.
1. button#btn-add-city 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. '도시명을 입력하세요.' 라는 메세지를 포함하고 있는 prompt 를 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/

var $btnaddcity = document.getElementById("btn-add-city");
// console.log($btnaddcity);
var $citylist = document.getElementById("city-list");
// console.log($citylist);
$btnaddcity.addEventListener('click', function(event){
    // console.log(event);
    var city = prompt('도시명을 입력하세요.');
    var addcity = document.createElement("li");
    $citylist.appendChild(addcity);
    addcity.innerText = city;
    console.log(city);
});


/*
Quest 7.
1. button#btn-color 를 클릭할 때 이벤트 리스너를 할당합니다.
2. 이벤트가 호출되면 sentence 라는 클래스 이름을 가진 모든 p 요소의 글자 색 스타일을 'red' 로 변경합니다.
3. 단, 이벤트 호출시 클릭된 횟수를 체크하여 현재 횟수에 위치하는 p 요소만 예외로 글자 색 스타일을 'black' 으로 변경합니다.(아래 예시 참고)
4. button#btn-color 가 여러번 클릭되어 마지막 p 요소가 예외처리 된 상황(글자 색 스타일 'black')에서 button#btn-color 를 다시 클릭하게 되면 처음 위치한 p 요소부터 예외처리 되도록 작성합니다.

    * 예시 - p요소의 전체 개수가 4개일 때, button#btn-color 클릭 횟수에 따른 p 요소 스타일 변경

    횟수 1 : p요소(0) - 'black', p요소(1) - 'red', p요소(2) - 'red', p요소(3) - 'red'
    횟수 2 : p요소(0) - 'red', p요소(1) - 'black', p요소(2) - 'red', p요소(3) - 'red'
    횟수 3 : p요소(0) - 'red', p요소(1) - 'red', p요소(2) - 'black', p요소(3) - 'red'
    횟수 4 : p요소(0) - 'red', p요소(1) - 'red', p요소(2) - 'red', p요소(3) - 'black'
    횟수 5 : p요소(0) - 'black', p요소(1) - 'red', p요소(2) - 'red', p요소(3) - 'red'
    횟수 6 : p요소(0) - 'red', p요소(1) - 'black', p요소(2) - 'red', p요소(3) - 'red'
    ...
    ...

*/

var $btncolor = document.getElementById("btn-color");
var $red = document.getElementsByClassName("section");
var $black = document.getElementsByClassName("sentence");
var num = $black.length;
//console.log(num); //센텐스 클래스 친구들이 몇갠지 출력
//console.log($red);
var _cuId = 0;
$btncolor.addEventListener('click', function(event){
    // console.log(event);
    console.log(_cuId); //클릭 수 
    
    $red[0].style.color = "red"; //전체 빨강으로 변한다!

    if(_cuId % (num + 1) == 1){
        $black[0].style.color='black';
    }else if(_cuId % (num + 1) == 2){
        $black[1].style.color='black';
    }else if(_cuId % (num + 1) == 3){
        $black[2].style.color='black';
    }else if(_cuId % (num + 1) == 4){
        $black[3].style.color='black';
    }
    _cuId ++;
});
//횟수 5부터는 x!..


/*
Quest 8.
1. button#btn-go-top 요소를 클릭했을 때 스크롤이 
현재 화면의 최상단으로 이동되도록 이벤트를 할당합니다.*/
var x = window.pageXOffset;
var y = window.pageYOffset;

var $btngotop = document.getElementById("btn-go-top");
// console.log($btngotop);
$btngotop.addEventListener('click', function(event){
    // console.log(event);
    //최상단은 (0,0)으로!
    window.scrollTo(0,0);
    console.log(x, y);
});