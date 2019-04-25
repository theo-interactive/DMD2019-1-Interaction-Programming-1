/*
Quest 1.
1. button#btn-window-size 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. 윈도우 콘텐츠 영역의 넓이값과 높이값이 아래의 문자열 결과값과 같이 alert 으로 출력되도록 작성합니다.
    -> 문자열 결과 : 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.
*/
var $btnWindowSize = document.querySelector("button#btn-window-size");
// $btnWindowSize.addEventListener("click", function(event) {
// });
$btnWindowSize.addEventListener("click", onClickBtnWindowSize);
function onClickBtnWindowSize(event) {
    //console.log('click');
    var winWidth = window.innerWidth, winHeight = window.innerHeight;
    // alert("윈도우 콘텐츠의 영역 width : " + winWidth + " px, height : " + winHeight + " px 입니다.");
    var result = "윈도우 콘텐츠의 영역 width : " + winWidth + " px, height : " + winHeight + " px 입니다.";
    alert(result);
}

/*
Quest 2.
1. button#btn-check-id 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. id 가 'user_id' 인 요소를 찾고 value 속성의 값의 문자열 개수를 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
    -> 문자열 결과 : input#user_id - value 속성 값의 개수는 ____입니다.
*/
var $btnCheckId = document.querySelector("button#btn-check-id");
$btnCheckId.addEventListener("click", onClickBtnCheckId);
function onClickBtnCheckId(event) {
    event.preventDefault();
    //form 의 자식 요소로 button 이 있을 때 button 을 클릭할 경우, form 전송이 발생한다.
    //기본 기능을 막아주기 위해 클릭 이벤트가 호출되었을 때
    //event.preventDefault();
    //라는 이벤트 메서드(명령어)로 기본 기능을 막아줘야 함.
    var $userId = document.getElementById("user_id");
    var value = $userId.value;
    // console.log(value); //현재 input 에서 입력값이 바뀌면 그 값을 반환.
    // value = $userId.getAttribute("value");
    // console.log(value); //html 로드 된 문서 상에서의 값을 반환.
    //value -> string type.
    //문자열의 개수 .length;
    var result = "input#user_id - value 속성 값의 개수는 " + value.length + "입니다.";
    console.log(result);
}

/*
Quest 3.
1. button#btn-cancel 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
var $btnCancel = document.querySelector("button#btn-cancel");
$btnCancel.addEventListener("click", onClickBtnCancel);
function onClickBtnCancel(event) {
    event.preventDefault();
    window.location.reload(); //새로고침.
}

/*
Quest 4.
1. button#btn-apply 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. '가입하시겠습니까?' 라는 메세지를 포함하고 있는 확인창(confirm) 을 출력합니다.
3. 사용자가 확인을 선택한 경우, 아래의 메시지 결과값을 alert 으로 출력되도록 작성합니다.
    -> 메시지 결과 : 가입을 환영합니다!
*/
var $btnApply = document.querySelector("button#btn-apply");
$btnApply.addEventListener("click", onClickBtnApply);
function onClickBtnApply(event) {
    event.preventDefault();
    var isCheck = confirm("가입하시겠습니까?");
    // if(isCheck === true){
    // }
    if(isCheck){ //true. 사용자가 OK 을 클릭했을 때.
        alert("가입을 환영합니다!");
    }else{ //false. 사용자가 cancel 을 클릭했을 때.
        console.log("가입을 취소했습니다.");
    }
    // if(!isCheck){ //false.
    // }else{ //true.
    // }
}

/*
Quest 5.
1. button#btn-reset 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. '초기화하시려면 100을 입력하세요.' 라는 메세지를 포함하고 있는 prompt 를 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
var $btnReset = document.querySelector("button#btn-reset");
$btnReset.addEventListener("click", onClickBtnReset);
function onClickBtnReset(event) {
    event.preventDefault();
    var number = prompt("초기화하시려면 100을 입력하세요.");
    //prompt(); 는 문자열로 값을 반환한다.
    //문자열 -> 숫자로 바꿔주는 기능.
    // Number("100"); //문자를 숫자로 치환.
    // parseInt("100", 10); //10진수로 치환.
    // String(100);
    if(Number(number) === 100){
        var $userId = document.getElementById("user_id"),
            $userPass = document.getElementById("user_pass");
        $userId.value = "";
        $userPass.value = "";
        // $userId.value = null;
        // $userPass.value = null;
    }
}

/*
Quest 6.
1. button#btn-add-city 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. '도시명을 입력하세요.' 라는 메세지를 포함하고 있는 prompt 를 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
var $btnAddCity = document.querySelector("button#btn-add-city");
$btnAddCity.addEventListener("click", onClickBtnAddCity);
function onClickBtnAddCity(event) {
    var city = prompt("도시명을 입력하세요.");
    if(city !== null && city !== ""){
        var $cityList = document.getElementById("city-list");
        var $newItem = document.createElement("li");
        $newItem.innerText = city;
        //<li>도시명</li>
        $cityList.appendChild($newItem);
    }
}

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
var $btnColor = document.querySelector("button#btn-color");
var count = 0;
$btnColor.addEventListener("click", onClickBtnColor);
function onClickBtnColor(event) {
    event.preventDefault();
    var $sentence = document.getElementsByClassName("sentence");
    for(var i = 0; i < $sentence.length; i++){
        if(count === i){
            $sentence[i].style.color = "black";
        }else{
            $sentence[i].style.color = "red";
        }
    }
    /**************/
    count++;
    if(count >= $sentence.length) count = 0;
    /**************/
}

/*
Quest 8.
1. button#btn-go-top 요소를 클릭했을 때 스크롤이 현재 화면의 최상단으로 이동되도록 이벤트를 할당합니다.
*/
var $btnGoTop = document.querySelector("button#btn-go-top");
$btnGoTop.addEventListener("click", onClickBtnGoTop);
function onClickBtnGoTop(event) {
    event.preventDefault();
    window.scrollTo(0, 0);
}