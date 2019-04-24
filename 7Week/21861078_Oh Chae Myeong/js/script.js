/*
Quest 1.
1. button#btn-window-size 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. 윈도우 콘텐츠 영역의 넓이값과 높이값이 아래의 문자열 결과값과 같이 alert 으로 출력되도록 작성합니다.
    -> 문자열 결과 : 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.
*/
var winw = window.innerWidth;
var winh = window.innerHeight;
var btnws = document.getElementById("btn-window-size");
btnws.addEventListener('click',function(event){
    alert("윈도우 콘텐츠의 영역 width :"+ winw +"px, height :"+ winh +"px 입니다.")
})

/*
Quest 2.
1. button#btn-check-id 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. id 가 'user_id' 인 요소를 찾고 value 속성의 값의 문자열 개수를 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
    -> 문자열 결과 : input#user_id - value 속성 값의 개수는 ____입니다.
*/
//console.log("1");     확인용
var bci = document.getElementById("btn-check-id");
var $id = document.getElementById("user_id");
//var idlen = $id.value.length;
bci.addEventListener('click',function(event){
    var idlen = $id.value.length;
    console.log("input#user_id - value 속성 값의 개수는"+ idlen +"입니다.");
})
//7개라고 뜨긴 하는데 뜨는 동시에 사라져요... 왜일까요..?
//누르면 새로고침 되는데....


/*
Quest 3.
1. button#btn-cancel 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/

var bca = document.getElementById("btn-cancel");
bca.addEventListener('click',function(event){
    location.reload();
})



/*
Quest 4.
1. button#btn-apply 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. '가입하시겠습니까?' 라는 메세지를 포함하고 있는 확인창(confirm) 을 출력합니다.
3. 사용자가 확인을 선택한 경우, 아래의 메시지 결과값을 alert 으로 출력되도록 작성합니다.
    -> 메시지 결과 : 가입을 환영합니다!
*/

var bapp = document.getElementById("btn-apply");

bapp.addEventListener('click',function(event){

    var check = confirm("가입하시겠습니까?");
    if(check === true){
        alert("가입을 환영합니다!")
    }
    else{
        alert("가입이 취소되었습니다.");
    }
})

/*
Quest 5.
1. button#btn-reset 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. '초기화하시려면 100을 입력하세요.' 라는 메세지를 포함하고 있는 prompt 를 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 
        빈 값으로 초기화 되도록 작성합니다.
*/

/*
var bre = document.getElementById("btn-rese");
var useridpass = document.getElementById("user_id","user_pass");

bre.addEventListener('click',function(event){
    var check2 = prompt("초기화하시려면 100을 입력하세요");
    if(check2 === 100){
        // useridpass.removeAttribute('value');
        alert("value 초기화.");
    }
})
왜안대징...
*/

/*
Quest 6.
1. button#btn-add-city 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. '도시명을 입력하세요.' 라는 메세지를 포함하고 있는 prompt 를 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/

var baci = document.getElementById("btn-add-city");
var city = document.getElementById("city-list");

baci.addEventListener('click', function(event){
    var city2 = prompt("도시명을 입력하세요.");
    var licity =document.createElement("li");
    city.appendChild(licity);
    licity.innerText = city2;
})


/*
Quest 7.
1. button#btn-color 를 클릭할 때 이벤트 리스너를 할당합니다.
2. 이벤트가 호출되면 sentence 라는 클래스 이름을 가진 모든 p 요소의 글자 색 스타일을 'red' 로 변경합니다.
3. 단, 이벤트 호출시 클릭된 횟수를 체크하여 현재 횟수에 위치하는 p 요소만 예외로 글자 색 스타일을 
        'black' 으로 변경합니다.(아래 예시 참고)
4. button#btn-color 가 여러번 클릭되어 마지막 p 요소가 예외처리 된 상황(글자 색 스타일 'black')에서 
        button#btn-color 를 다시 클릭하게 되면 처음 위치한 p 요소부터 예외처리 되도록 작성합니다.

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

var bcol = document.getElementById("btn-color");
var sen = document.getElementById("sentence");
var allsen = document.getElementById("section");
var clickcount=0;

bcol.addEventListener('click', function(event){
    event.preventDefault();
    clickcount++;
    //console.log("2");
    allsen.style.color = 'red'; //스타일에서 오류난다.. 읽을수 없다는데 왜?

  
})
  /*
bcol.addEventListener('click',function(event){
    allsen[0].style,color = "red";

    if(cuId % (sen.length + 1) === 1){
        sen[0].style.color = "black";
        }
    else if(cuId % (sen.length + 1) === 2){
        sen[1].style.color = "black";
        }
    else if(cuId % (sen.length + 1) === 3){
        sen[2].style.color = "black";
        }
    else if(cuId % (sen.length + 1) === 4){
        sen[3].style.color = "black";
        }
    cuId++;
})*/

//안된다..ㅠㅜ


/*
Quest 8.
1. button#btn-go-top 요소를 클릭했을 때 스크롤이 현재 화면의 최상단으로 이동되도록 이벤트를 할당합니다.
*/

var bgt = document.getElementById("btn-go-top");
bgt.addEventListener('click',function(event){
    window.scrollTo(0,0);
})

