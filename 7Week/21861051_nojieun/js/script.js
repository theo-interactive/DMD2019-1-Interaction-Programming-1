/*
Quest 1.
1. button#btn-window-size 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. 윈도우 콘텐츠 영역의 넓이값과 높이값이 아래의 문자열 결과값과 같이 alert 으로 출력되도록 작성합니다.
    -> 문자열 결과 : 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.
*/
var wiw = window.innerWidth;
var wih = window.innerHeight;
var $btn_WS = document.getElementById("btn-window-size"); // id 객체 한 개 반환.
// console.log($btn_WS); // 윈도우 사이즈 출력하기. 정상작동 확인.
$btn_WS.addEventListener("click", function(event){
    alert("윈도우 콘텐츠의 영역 width : " + wiw + "px, height : " + wih + "px 입니다.");
})



/*
Quest 2.
1. button#btn-check-id 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. id 가 'user_id' 인 요소를 찾고 value 속성의 값의 문자열 개수를 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
    -> 문자열 결과 : input#user_id - value 속성 값의 개수는 ____입니다.
*/


// var $btn_CID = document.getElementById("user_id");
// // console.log($btn_CID); // 아이디 입력. 정상작동 확인.
// $btn_CID.addEventListener("click", function(event){
//     console.log("input#user_id - value 속성 값의 개수는" + "입니다.");
// })
// ... 모르겠습니다..!



/*
Quest 3.
1. button#btn-cancel 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
var $btn_cancel = document.getElementById("btn-cancel"); // 취소 버튼 아이디 찾기.
// console.log($btn_cancel); // 취소. 정상작동 확인.
$btn_cancel.addEventListener("click", function(event){
    location.reload();
})

/*
Quest 4.
1. button#btn-apply 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. '가입하시겠습니까?' 라는 메세지를 포함하고 있는 확인창(confirm) 을 출력합니다.
3. 사용자가 확인을 선택한 경우, 아래의 메시지 결과값을 alert 으로 출력되도록 작성합니다.
    -> 메시지 결과 : 가입을 환영합니다!
*/

var $btn_apply = document.getElementById("btn-apply");
// console.log($btn_apply); // 가입. 정상작동 확인.
$btn_apply.addEventListener("click", function(event){
    var check = confirm("가입하시겠습니까?");
    if(check === true){
        alert("가입을 환영합니다!");
    }
    else{
        alert("가입해주세요 - -");
    }
})

/*
Quest 5.
1. button#btn-reset 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. '초기화하시려면 100을 입력하세요.' 라는 메세지를 포함하고 있는 prompt 를 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// var $btn_reset = document.getElementById("btn-reset");
// // console.log($btn_reset); // 초기화. 정상작동 확인.
// $btn_reset.addEventListener("click", function(event){
//     var check = prompt("초기화하시려면 100을 입력하세요.");
//     if(check === 100){
//         console.log("백");
//     }
// })
// 이것도 모르겠습니다! 역시 안 배운 건 어렵습니다,,

/*
Quest 6.
1. button#btn-add-city 요소를 클릭했을 때 이벤트 리스너를 할당합니다.
2. '도시명을 입력하세요.' 라는 메세지를 포함하고 있는 prompt 를 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
var $btn_city = document.getElementById("btn-add-city");
// console.log($btn_city); // 도시 추가하기. 정상작동 확인.
var $City = document.getElementById("city-list");
// console.log($NewCity); // cirt-list. 정상작동 확인.
$btn_city.addEventListener("click", function(event){
    var city = prompt("도시명을 입력하세요."); // 사용자가 정한 도시명 = city
    var $NewCity = document.createElement("li"); // $NewCity라는 새로운 엘리먼트의 값은 li로 설정.
    $City.appendChild($NewCity); // 원래 city-list 였던 $City에 $NewCity를 추가.
    $NewCity.innerText = city; // $NewCity에는 사용자가 정한 도시명인 city를 넣어줌.

    console.log(city); // console창에서 사용자가 적은 도시명 보기에 하기
    
    

})
var $box = document.createElement("div");
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
var $btn_Color = document.getElementById("btn-color");
// console.log($btn_Color); // 스타일 바꾸기. 정상작동 확인
var $Sen = document.getElementsByClassName("sentence");
// console.log($Sen); // HTMLCollection4개. 정상작동 확인.
var $AllSen = document.getElementsByClassName("section");
var _cuId = 0;
// console.log($AllSen); // sentence를 담고 있는 class 명 선언하여 처음에 클릭 시 빨간색으로 바꿔준다.
$btn_Color.addEventListener("click", function(event){
    // console.log($Sen.length); // 4개 출력 확인.
    $AllSen[0].style.color = "red"; // 처음 클릭 시 모두 빨간색으로 바꿔준다. 
    // cuId가 0일 때는 모두 빨간색..
    // cuId가 1일 때는 Sen[0]이 검정
    if(_cuId % ($Sen.length+1) === 1){ // 횟수가 5만큼, 배열보다 하나 많게 계속 반복.
        $Sen[0].style.color = "black";
        // console.log(_cuId); // 1출력
    }
    else if(_cuId % ($Sen.length+1) === 2){
        $Sen[1].style.color = "black";
        // console.log(_cuId); // 2 출력
    }
    else if(_cuId % ($Sen.length+1) === 3){
        $Sen[2].style.color = "black";
        // console.log(_cuId); // 3 출력
    }
    else if(_cuId % ($Sen.length+1) === 4){
        $Sen[3].style.color = "black";
        // console.log(_cuId); // 4 출력
    }
    _cuId++; // 클릭 횟수 증가
    // console.log(_cuId); // 클릭 횟수 증가 확인.
    // 한줄씩 검정색이 생기는데 한번 생긴거는 지워지지 않는다... 조금 더 연구를 해봐야겠다...!
})

/*
Quest 8.
1. button#btn-go-top 요소를 클릭했을 때 스크롤이 현재 화면의 최상단으로 이동되도록 이벤트를 할당합니다.
*/
var $btn_GT = document.getElementById("btn-go-top");
// console.log($btnGT); // 맨 위로 가기. 정상 작동 확인.
$btn_GT.addEventListener("click", function(event){
    // console.log(window.pageYOffset); // 305였다가
    window.scrollTo(0,0);
    // console.log(window.pageYOffset); // 0으로 바뀜.
})


// 질문있습니다! quest7 번에서 sentence를 담고 있는 class를 빨간색으로 하는 거 말고 sentence 자체를 빨간색으로 바꾸고 싶은데 $Sen[0] / $Sen[1] ... 등으로 하나씩 하는 방법 밖에 없나요? 배열 전체를 선택하는 방법이 궁금합니다~!
// 지금 제출하고 금일 11시 전에 안됐던 부분 수정하도록 하겠습니다!

// rh : 전체 전체를 선택하려면 반복문을 써야합니다.
/*
for(var i = 0; i < sentence배열의 개수; i++){
    sentence[i] -> 반복문이 loop 되면서 각 요소들을 찾게 됩니다.
    조건문 없이 sentence[i].style.color = "red"; 반복문 전체가 loop 되고 escape 가 되면 전체가 빨간색이 됩니다.
    단, 위의 반복문이 loop 될 때 조건문을 사용해서 개별적으로 i === ?(현재 예외로 적용하고 싶은 번호) 가 성립한다면 sentence[?] 는 예외적으로 .style.color = "black" 으로 적용이 가능하겠죠.
    그럼 ?(현재 예외로 적용하고 싶은 번호) 를 전역변수에 값을 생성하여 클릭할 때마다 ++(증가)되면 한번씩 예외적용하고 싶은 요소만 찾아낼 수 있습니다.
}
*/