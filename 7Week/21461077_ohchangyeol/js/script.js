/*
Quest 1.
1. button#btn-window-size 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. 윈도우 콘텐츠 영역의 넓이값과 높이값이 아래의 문자열 결과값과 같이 alert 으로 출력되도록 작성합니다.
    -> 문자열 결과 : 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.
*/
var $btn1 = document.getElementById("btn-window-size");
//  console.log($btn1);
$btn1.addEventListener("click", function(){
    var obj = {
        winWidth : window.innerWidth,
        winHeight : window.innerHeight
    }
    alert("윈도우 콘텐츠의 영역 \n" + "Width : " + obj.winWidth + "px,\nHeight : " + obj.winHeight + "px 입니다.");
})
/*
Quest 2.
1. button#btn-check-id 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. id 가 'user_id' 인 요소를 찾고 value 속성의 값의 문자열 개수를 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
    -> 문자열 결과 : input#user_id - value 속성 값의 개수는 ____입니다.
*/
var $btn2 = document.getElementById("btn-check-id");
$btn2.addEventListener("click", function(event){
    event.preventDefault();
    var _user = document.getElementById("user_id");
    //console.log( $user.attributes.length);
    var _langth = _user.attributes.length;
    console.log("input#user_id - value 속성 값의 개수는 "+_langth+" 입니다.");
});

/*
Quest 3.
1. button#btn-cancel 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
var $btn3 = document.getElementById("btn-cancel");
$btn3.addEventListener("click", function(event){
    event.preventDefault();
    location.reload();
});

/*
Quest 4.
1. button#btn-apply 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. '가입하시겠습니까?' 라는 메세지를 포함하고 있는 확인창(confirm) 을 출력합니다.
3. 사용자가 확인을 선택한 경우, 아래의 메시지 결과값을 alert 으로 출력되도록 작성합니다.
    -> 메시지 결과 : 가입을 환영합니다!
*/
var $btn4 = document.getElementById("btn-apply");
$btn4.addEventListener("click", function(event){
    event.preventDefault();
    //console.log( confirm("가입하시겠습니까?"));
    var _confirm = confirm("가입하시겠습니까?");
    if(_confirm === true){
        alert("가입을 환영합니다!");
    }
});


/*
Quest 5.
1. button#btn-reset 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. '초기화하시려면 100을 입력하세요.' 라는 메세지를 포함하고 있는 prompt 를 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
var $btn5 = document.getElementById("btn-reset");
$btn5.addEventListener("click", function(){
    event.preventDefault();
    var _prompt=  prompt("초기화하시려면 100을 입력하세요");
    if(_prompt == "100"){
        var _userId = document.getElementById("user_id");
        var _userPass = document.getElementById("user_pass");
        // console.log( _userId.attributes);
        // console.log( _userPass.attributes);
        console.log( _userId.removeAttribute("value"));
        console.log( _userPass.removeAttribute("value"));
        // console.log( _userId.getAttributeNode('value'));
        // console.log( _userId.getAttribute('value'));
    }
})


/*
Quest 6.
1. button#btn-add-city 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. '도시명을 입력하세요.' 라는 메세지를 포함하고 있는 prompt 를 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/

var $btn6 = document.getElementById('btn-add-city');
$btn6.addEventListener("click",function(){
    var _prompt = prompt("도시명을 입력하세요.");
    // console.log(_prompt);
    var $li = document.createElement("li");
    $li.innerText = _prompt;
    var $ul = document.getElementById('city-list');
    $ul.appendChild($li);
    
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
var $btn7 = document.getElementById('btn-color');
var count = 0;
$btn7.addEventListener("click", function(){
    var $p = document.getElementsByClassName('sentence');
    console.log($p);
    for (var i = 0; i<$p.length; i++){
        $p[i].style.color="red";
    }
    $p[count].style.color='black';
    console.log(count);
    count++;
    if(count === 4){
        count -= 4;
    }
})

/*
Quest 8.
1. button#btn-go-top 요소를 클릭했을 때 스크롤이 현재 화면의 최상단으로 이동되도록 이벤트를 할당합니다.
*/

var $btn8 = document.getElementById('btn-go-top');
$btn8.addEventListener("click", function(){
    window.scrollTo(0,0);
});