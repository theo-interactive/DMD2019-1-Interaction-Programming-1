/*
Quest 1.
1. button#btn-window-size 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. 윈도우 콘텐츠 영역의 넓이값과 높이값이 아래의 문자열 결과값과 같이 alert 으로 출력되도록 작성합니다.
    -> 문자열 결과 : 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.
*/

var $btn1 =document.getElementById("btn-window-size");
$btn1.addEventListener("click", function(e){ 

    alert("윈도우"+" "+"콘텐츠의"+" "+"영역"+" "+"width:"+window.innerWidth+"px"+"  "+"height :"+window.innerHeight+"px 입니다");
    
});
/*
Quest 3.
1. button#btn-cancel 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
var $btn2 =document.getElementById("btn-cancel");
$btn2.addEventListener("click", function(e){ 

    location.reload();
    
});

/*
Quest 4.
1. button#btn-apply 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. '가입하시겠습니까?' 라는 메세지를 포함하고 있는 확인창(confirm) 을 출력합니다.
3. 사용자가 확인을 선택한 경우, 아래의 메시지 결과값을 alert 으로 출력되도록 작성합니다.
    -> 메시지 결과 : 가입을 환영합니다!
*/

var $btn3 =document.getElementById("btn-apply");
$btn3.addEventListener("click", function(e){ 

    var cheek=confirm("가입하시겠습니까?");
    if(cheek ===true){
        alert("가입을 환영합니다!");
    }
    
});


/*
Quest 6.
1. button#btn-add-city 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. '도시명을 입력하세요.' 라는 메세지를 포함하고 있는 prompt 를 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/

var $btn4 = document.getElementById('btn-add-city');
var $city_list = document.getElementById('city-list');


$btn4.addEventListener('click', function(event){
    var city = prompt('도시명을 입력하세요');
    var $input_city = document.createElement('li');
    $city_list.appendChild($input_city);
    $input_city.innerText = city;
})

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


/*
Quest 8.
1. button#btn-go-top 요소를 클릭했을 때 스크롤이 현재 화면의 최상단으로 이동되도록 이벤트를 할당합니다.
*/
var $btn5 = document.getElementById("btn-go-top");
$btn5.addEventListener("click", function(event){
    window.scrollTo(0,0);
});

//교수님........7번과 2번은 정말 정말 정말 모르겠습니다ㅜㅜㅜㅜㅜㅜ알단 아는거만 ㅜㄹ어보았습니당.....