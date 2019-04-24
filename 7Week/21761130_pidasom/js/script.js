/*
Quest 1.
1. button#btn-window-size 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. 윈도우 콘텐츠 영역의 넓이값과 높이값이 아래의 문자열 결과값과 같이 alert 으로 출력되도록 작성합니다.
    -> 문자열 결과 : 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.
*/
var winwid = window.innerWidth;
var winhei = window.innerHeight; //각 넓이값 높이값 변수 생성 ! 
// console.log(winwid);

var $btn_winsi = document.getElementById("btn-window-size");
//윈도우 사이즈의 변수를 만들어 id 네임 생성 
$btn_winsi.addEventListener("click", function(event){
//윈도우 사이즈에 대한 이벤트 리스너를 만들고 (클릭하면 함수발동(얼러트가 생기는) !)
    alert("윈도우 콘텐츠의 영역 width : " + winwid + "px," + " height : " + winhei + "px 입니다.");
});
//풀었다.

/*
Quest 2.
1. button#btn-check-id 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. id 가 'user_id' 인 요소를 찾고 value 속성의 값의 문자열 개수를 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
    -> 문자열 결과 : input#user_id - value 속성 값의 개수는 ____입니다.
*/

var $btn_che = document.getElementById("btn-check-id");
$btn_che.addEventListener("click", function(event){
    var value = document.getElementById("user_id");
    console.log("input#user_id - value 속성 값의 개수는" + value + "입니다.");
});
//교수님 모르겠사와요 ^,^ ,....

/*
Quest 3.
1. button#btn-cancel 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
var $btn_can = document.getElementById("btn-cancel");
$btn_can.addEventListener("click", function(event){
    location.reload();
    //reload를 써서 클릭시 새로고침이 되도록 ! 
    //근데 새로고침이 되는건지 아닌지 잘모르겠습니다 ,.. 그냥 반짝 .. ! 
});
//푼 거 같기는 한데 ,.. 모르겠다 

/*
Quest 4.
1. button#btn-apply 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. '가입하시겠습니까?' 라는 메세지를 포함하고 있는 확인창(confirm) 을 출력합니다.
3. 사용자가 확인을 선택한 경우, 아래의 메시지 결과값을 alert 으로 출력되도록 작성합니다.
    -> 메시지 결과 : 가입을 환영합니다!
*/
var $btn_app = document.getElementById("btn-apply");
$btn_app.addEventListener("click", function(event){
    var firm = confirm("'가입하시겠습니까?'");
        //alert("가입을 환영합니다!");
        //그냥 단순히 확인만 누르는 경우라 바로 alert를 써봤지만 취소를 눌려도 환영한다 뜸
        if (firm == true)
        //firm이 트루일 때 얼렅창으로 가입인사! 
        {
            alert("가입을 환영합니다!");
        }
        else
        {
            //취소의 경우 조건이 없어서 공석으로 놔둠
        }
});
//풀었다

/*
Quest 5.
1. button#btn-reset 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. '초기화하시려면 100을 입력하세요.' 라는 메세지를 포함하고 있는 prompt 를 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
var $btn_re = document.getElementById("btn-reset");
$btn_re.addEventListener("click", function(event){
    var reset = prompt("'초기화하시려면 100을 입력하세요.'")
    if (reset === 100)
    {
        var input = document.getElementByClassName("form-input")

    }

});
//정말 어렵군요 ^,^ ,...

/*
Quest 6.
1. button#btn-add-city 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. '도시명을 입력하세요.' 라는 메세지를 포함하고 있는 prompt 를 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// var $btn_adci = document.getElementById("btn-add-city");
// var city = document.getElementById("city-list");

// $btn_adci.addEventListener("click", function(event){
//     var adci = prompt("'도시명을 입력하세요.'");
//     if (adci !== null){
//         var city = document.getElementById("city-list");
//         console.log(city.childNodes);
//     }
//계속 오류가 떠요 ,.. ㅠㅠㅠ

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
var $btn_co = document.getElementById("btn-color");

$btn_app.addEventListener("click", function(event){
    var sentence = document.getElementsByClassName("div");

});
//흑흑 ,... ㅠㅠ 

/*
Quest 8.
1. button#btn-go-top 요소를 클릭했을 때 스크롤이 현재 화면의 최상단으로 이동되도록 이벤트를 할당합니다.
*/
var $btn_go_top = document.getElementById("btn-go-top");
$btn_go_top.addEventListener("click", function(event){
    window.scrollTo(0,0);
    //스크롤의 좌표를 0,0 으로 설정해서 맨위로 고우고우 ! 
});
//풀었다