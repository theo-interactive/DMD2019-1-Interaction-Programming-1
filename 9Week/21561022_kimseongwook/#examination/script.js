// 1. js 폴더와 폴더 내부에 script.js 파일 생성하고 index.html 에 script.js 외부 파일을 로드합니다.
//    script.js 에 아래 보기 문구의 경고창을 출력합니다.
alert("Hello, world!");

// 2. 아래 보기의 배열(Array) 객체 값을 할당하는 변수를 생성합니다.
//    'Doctor Strange' 문자열 값을 (1)배열 객체의 마지막 부분에 추가합니다.
//    (1)배열 객체의 뒤에서 두번째 요소 값을 'Captain Marvel' 문자열 값으로 변경합니다.
//    (1)배열 객체의 첫번째 요소를 삭제합니다.
//    (1)배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.

var _heros = ['Iron Man', 'Captain America', 'Hulk', 'Thor', 'Spider-Man'];
_heros.push('Doctor Strange');
console.log(_heros);
_heros.splice(4, 1, 'Captain Marvel');
console.log(_heros);
_heros.shift();
console.log(_heros);
_heros.reverse();
console.log(_heros);

// 3. 입력된 전달인자가 숫자(Number) 타입인 경우 true, 문자(String) 타입인 경우 false 를 반환하는 함수를 작성합니다.
//    결과 변수1을 생성하여 (1)함수의 전달인자로 숫자를 기입하여 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.
//    결과 변수2를 생성하여 (1)함수의 전달인자로 문자를 기입하여 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.
function getStar(_number2){
    if(typeof _number2 === typeof 1){
        return true;       
    }
    else if(typeof _number2 !== typeof 1){
        return false;
    }
}
var getstar1 = getStar(1)
var getstar2 = getStar("문자")

console.log(getstar1);
console.log(getstar2);

// 4. 하나의 객체(Object) 타입 매개변수를 입력받는 함수를 작성합니다.
//    입력된 전달인자 객체 내의 모든 요소 값을 문자열 연산하고 얻은 결과 값을 (1)함수에서 반환합니다.
//    단, 문자열 연산 시 각 요소 값의 사이에는 띄어쓰기(' ')를 추가합니다.
//    아래 보기의 객체 값을 할당하는 변수를 생성하고 (1)함수의 전달인자로 사용합니다. myName 색인 요소 값의 이름은 본인이름으로 변경합니다.
//    결과 변수를 생성하여 (1)함수를 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.
  

// 죄송합니다. 더 공부 하겠습니다.
var _Q4object = function(_object)
{
        object = {
        greeting : '안녕하세요',
         myName : '김성욱입니다.',
         today : '오늘은',
         month : 5,
         separate : '/',
         day : 2,
         is : '입니다.',
         luck : '행운을 빕니다.' }
}


// 5. html 문서의 title을 '학번_이름' 으로 변경합니다.
document.title = "21561022_김성욱";

// 6. button#btn-student-number 클릭할 경우, 자신의 학번이 span#student-number 의 내부에 입력될 수 있도록 함수를 작성합니다.
//    button#btn-student-name 클릭할 경우, 자신의 이름이 span#student-name 의 내부에 입력될 수 있도록 함수를 작성합니다.
//    (1), (2) 각 클릭 리스너 호출 시 요소에 내용 입력이 완료된 후 아래 보기 문구의 경고창을 출력합니다.

var $btnStudentNum = document.querySelector("button#btn-student-number");
$btnStudentNum.addEventListener("click", onClickBtnStudentNum);
function onClickBtnStudentNum(event) {
    event.preventDefault();
    document.querySelector("button#btn-student-number").innerText = "21561022"
    var result = "학번이 입력되었습니다.";
    alert(result);
}

var $btnStudentName = document.querySelector("button#btn-student-name");
$btnStudentName.addEventListener("click", onClickBtnStudentName);
function onClickBtnStudentName(event) {
    event.preventDefault();
    document.querySelector("button#btn-student-name").innerText = "김성욱"
    var result = "이름이 입력되었습니다.";
    alert(result);
}

// 7. button#btn-odd 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
//    사용자가 입력한 수를 기준으로 0부터 해당 숫자까지의 숫자 중 홀수인 숫자를 아래 보기와 같이 문자열 연산하여 결과를 
//    div#odd-result 의 내부에 입력될 수 있도록 작성합니다.

var $btnodd = document.querySelector("button#btn-odd");
$btnodd.addEventListener("click", onClickBtnodd);
function onClickBtnodd(event) {
    event.preventDefault();
    var odd = prompt('숫자를 입력해주세요');
    var result = '';
    for(var i = 0; i <= odd; i++) {
        if(i > 0){
            if(i % 2 === 1){
                if(result !== ''){
                    result += ', ';
                }
                result += i;
            }
        }
    }
    result += '.';
    console.log(result);
    document.querySelector("div#odd-result").innerText = result
}


// 8. button#btn-add-item 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
//    사용자가 입력한 수만큼 새로운 li 요소를 생성하고 ul#list 의 자식 요소로 추가합니다.
//    (2)에 생성되는 li 요소에는 'item' 이라는 클래스 이름를 추가하고 각 요소마다 항목의 번호를 내부 문자열로 입력합니다.
//    (2)에 생성되는 li 요소들이 ul#list 의 자식 요소들로 추가될 때 ul#list 의 이전 내용은 모두 삭제되고나서 추가합니다.


var $btnitem = document.querySelector("button#btn-add-item");
$btnitem.addEventListener("click", onClickBtnitem);
function onClickBtnitem(event) {
    event.preventDefault();
    var _item = prompt('숫자를 입력해주세요');
    if (_item !== null && _item !== ""){ // 이 조건중에 둘다 ture 가 되야함.
        var $item = document.getElementById("list");
        var $newItem = document.createElement("li");
        $newItem.innerText = _item;
        $item.appendChild($newItem);
}
}


// 9. button#btn-color-1 를 클릭할 경우, 'box' 라는 클래스 이름을 가진 모든 div 요소의 배경색 스타일을 'red', 글자색 스타일을 'white' 로 변경합니다.
//    button#btn-color-2 를 클릭한 경우, 'box' 라는 클래스 이름을 가진 div 요소 중 3번째 요소의 배경색 스타일을 'blue', 
//    글자색 스타일을 'black' 으로 변경합니다.
/*  죄송합니다. 더 공부 하겠습니다.

var $btncolor1 = document.querySelector("button#btn-color-1");
$btncolor1.addEventListener("click", onClickBtnColor);
function onClickBtnColor(event) {
    event.preventDefault();
    var $box = document.getElementsByClassName("box");
}
*/

// 10. button#btn-star 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
//     사용자가 입력한 수에 따라 아래 보기와 같이 문자열 연산하여 결과를 pre#star-result 의 내부에 입력될 수 있도록 작성합니다.
/*
var $btnstar = document.querySelector("button#btn-star");
$btnstar.addEventListener("click", onClickBtnColor);
function onClickBtnColor(event) {
    var star = prompt('숫자를 입력해주세요');
    
    for(var i = 0; i < star; i++){
        for(var j = 0; j < star; j++){
            if(star === i) 
            {
                document.querySelector("button#btn-star").innerText = "★"
            }
            else
            {
                document.querySelector("button#btn-star").innerText = "☆"
            }
        }
    }
    if(star >= i) star=0;
}
*/