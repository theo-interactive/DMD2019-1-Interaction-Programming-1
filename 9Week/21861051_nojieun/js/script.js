/*
문제 1.
js 폴더와 폴더 내부에 script.js 파일 생성하고 index.html 에 script.js 외부 파일을 로드합니다.
script.js 에 아래 보기 문구의 경고창을 출력합니다.
*/
alert("Hello, world!");

/*
문제 2.
아래 보기의 배열(Array) 객체 값을 할당하는 변수를 생성합니다.
'Doctor Strange' 문자열 값을 (1)배열 객체의 마지막 부분에 추가합니다.
(1)배열 객체의 뒤에서 두번째 요소 값을 'Captain Marvel' 문자열 값으로 변경합니다.
(1)배열 객체의 첫번째 요소를 삭제합니다.
(1)배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.
*/
var array = ['Iron Man', 'Captain America', 'Hulk', 'Thor', 'Spider-Man'];
// console.log(array);
array.push("Doctor Strange");
// console.log(array);
array.splice(array.length-2,1,"Captain Marvel");
// console.log(array);
array.shift();
// console.log(array);
array.reverse();
console.log(array);

/*
문제 3.
입력된 전달인자가 숫자(Number) 타입인 경우 true, 문자(String) 타입인 경우 false 를 반환하는 함수를 작성합니다.
결과 변수1을 생성하여 (1)함수의 전달인자로 숫자를 기입하여 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.
결과 변수2를 생성하여 (1)함수의 전달인자로 문자를 기입하여 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.
*/
var check = function(i){
    if(typeof i === "number"){
        console.log("true");
    }
    else if(typeof i === "string"){
        console.log("false");
    }
}
var check1 = check(5);
var check2 = check("text");

/*
문제 4.
하나의 객체(Object) 타입 매개변수를 입력받는 함수를 작성합니다.
입력된 전달인자 객체 내의 모든 요소 값을 문자열 연산하고 얻은 결과 값을 (1)함수에서 반환합니다.
단, 문자열 연산 시 각 요소 값의 사이에는 띄어쓰기(' ')를 추가합니다.
아래 보기의 객체 값을 할당하는 변수를 생성하고 (1)함수의 전달인자로 사용합니다. myName 색인 요소 값의 이름은 본인이름으로 변경합니다.
결과 변수를 생성하여 (1)함수를 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.
*/
var object = {};
var result = "";
object = new Object();
var _object = function(obj){
obj = {
    greeting : '안녕하세요',
    myName : '노지은입니다.',
    today : '오늘은',
    month : 5,
    separate : '/',
    day : 2,
    is : '입니다.',
    luck : '행운을 빕니다.'
}

for(var i = 0; i<obj.length; i++){
    result += i;
} return result;
}
var object1 = _object(result);
console.log(object1);

/*
문제 5.
html 문서의 title을 '학번_이름' 으로 변경합니다.
*/
document.title = "21861051_노지은";

/*
문제 6.
button#btn-student-number 클릭할 경우, 자신의 학번이 span#student-number 의 내부에 입력될 수 있도록 함수를 작성합니다.
button#btn-student-name 클릭할 경우, 자신의 이름이 span#student-name 의 내부에 입력될 수 있도록 함수를 작성합니다.
(1), (2) 각 클릭 리스너 호출 시 요소에 내용 입력이 완료된 후 아래 보기 문구의 경고창을 출력합니다.
*/
var $btn_StudentNumber = document.querySelector("button#btn-student-number");
$btn_StudentNumber.addEventListener("click", function(event){
    event.preventDefault();
    var $StudentNumber = document.querySelector("span#student-number");
    $StudentNumber.innerText ="21861051";
    alert("학번이 입력되었습니다.");
})
var $btn_StudentName = document.querySelector("button#btn-student-name");
$btn_StudentName.addEventListener("click", function(event){
    event.preventDefault();
    var $StudentName = document.querySelector("span#student-name");
    $StudentName.innerText = "노지은";
    alert("이름이 입력되었습니다.");
})

/*
문제 7.
button#btn-odd 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
사용자가 입력한 수를 기준으로 0부터 해당 숫자까지의 숫자 중 홀수인 숫자를 아래 보기와 같이 문자열 연산하여 결과를 div#odd-result 의 내부에 입력될 수 있도록 작성합니다.
*/
var $btn_Odd = document.querySelector("button#btn-odd");
$btn_Odd.addEventListener("click", function(event){
    event.preventDefault();
    var holsu = prompt("숫자를 입력해주세요.");
    var result = "";
    for(var i = 0; i<= holsu; i++){
    if(i>0){
        if(i%2 === 1){
            if(result !== ""){
                result += ", ";
            }
            result += i;
        }
        else{
        }
        if(i === Number(holsu)){
            result += ".";
        }
    }
}
    console.log(result);
})

/*
문제 8.
button#btn-add-item 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
사용자가 입력한 수만큼 새로운 li 요소를 생성하고 ul#list 의 자식 요소로 추가합니다.
(2)에 생성되는 li 요소에는 'item' 이라는 클래스 이름를 추가하고 각 요소마다 항목의 번호를 내부 문자열로 입력합니다.
(2)에 생성되는 li 요소들이 ul#list 의 자식 요소들로 추가될 때 ul#list 의 이전 내용은 모두 삭제되고나서 추가합니다.
*/
var $btn_AddItem = document.querySelector("button#btn-add-item");
$btn_AddItem.addEventListener("click", function(event){
    event.preventDefault();
    var num = prompt("숫자를 입력해주세요.");
    var $ulList = document.querySelector("ul#list");
    for(var i = 0; i < num; i++){
        var $NewNum = document.createElement("li");
        $ulList.appendChild($NewNum);
        $NewNum.classList.add("item");
        $NewNum.innerText = i+1;
    }
    // if(!$NewNum){$ulList.innerHTML = ""};

})

// for(var i = 0; i <= num; i++){
//     var $list = document.querySelector("ul#list");
//     var $NewNum = document.createElement("li");
//     $list.appendChild($NewNum);
//     list[i].classList.add("item");
// }
/*
문제 9.
button#btn-color-1 를 클릭할 경우, 'box' 라는 클래스 이름을 가진 모든 div 요소의 배경색 스타일을 'red', 글자색 스타일을 'white' 로 변경합니다.
button#btn-color-2 를 클릭한 경우, 'box' 라는 클래스 이름을 가진 div 요소 중 3번째 요소의 배경색 스타일을 'blue', 글자색 스타일을 'black' 으로 변경합니다.
*/
var $btn_Color1 = document.querySelector("button#btn-color-1");
$btn_Color1.addEventListener("click", function(event){
    event.preventDefault();
    var $box = document.getElementsByClassName("box");
    for(var i = 0; i<=$box.length; i++){
        $box[i].style.backgroundColor = "red";
        $box[i].style.color = "white";
    }
})
var $btn_Color2 = document.querySelector("button#btn-color-2");
$btn_Color2.addEventListener("click", function(event){
    event.preventDefault();
    var $box = document.getElementsByClassName("box");
    for(var i = 0; i<=$box.length; i++){
        $box[2].style.backgroundColor = "blue";
        $box[2].style.color = "black";
    }
})
/*
문제 10.
button#btn-star 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
사용자가 입력한 수에 따라 아래 보기와 같이 문자열 연산하여 결과를 pre#star-result 의 내부에 입력될 수 있도록 작성합니다.
*/
var $btn_Star = document.querySelector("button#btn-star");
$btn_Star.addEventListener("click", function(event){
    event.preventDefault();
    var userNum = prompt("숫자를 입력해주세요.");
    var $starResult = document.querySelector("pre#star-result");
    var result = "";
    for(var i = 0; i< userNum; i++){
        for(var j = 0; j<userNum; j++){
            if(i>=j){
                result += "★";
            }
            else{
                result += "☆";
            }
        }
        result += "\n";
    }

    // console.log(result);
    $starResult.innerText = result;
})