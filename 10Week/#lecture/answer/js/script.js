<<<<<<< HEAD
=======
console.log("script load");
>>>>>>> 46fe1858cc6c5f490e454348d99044d0891a46db

/*
Quest 1.
1. js 폴더와 폴더 내부에 script.js 파일 생성하고 index.html 에 script.js 외부 파일을 로드합니다.
2. script.js 에 아래 보기 문구의 경고창을 출력합니다.

~~~~
* 경고창 문구.
Hello, world!
~~~~
*/
<<<<<<< HEAD
// console.log("Hello. world!");
=======
//alert("Hello, world!");
>>>>>>> 46fe1858cc6c5f490e454348d99044d0891a46db

/*
Quest 2.
1. 아래 보기의 배열(Array) 객체 값을 할당하는 변수를 생성합니다.
2. 'Doctor Strange' 문자열 값을 (1)배열 객체의 마지막 부분에 추가합니다.
3. (1)배열 객체의 뒤에서 두번째 요소 값을 'Captain Marvel' 문자열 값으로 변경합니다.
4. (1)배열 객체의 첫번째 요소를 삭제합니다.
5. (1)배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.

~~~~
* 배열 객체 값.
array = ['Iron Man', 'Captain America', 'Hulk', 'Thor', 'Spider-Man'];
~~~~
*/
<<<<<<< HEAD
=======
var _heros = ['Iron Man', 'Captain America', 'Hulk', 'Thor', 'Spider-Man'];
_heros.push("Doctor Strange");
// _heros.unshift("배열 요소 값");
// _heros.splice(4, 1, "Captain Marvel");
_heros.splice(_heros.length - 2, 1, "Captain Marvel");
_heros.shift(); //첫번째 요소를 삭제.
// _heros.pop(); //마지막 요소를 삭제.
_heros.reverse(); //배열을 순서를 반대로.
// _heros.sort(); //배열 순서 정렬(알파벳...)
console.log(_heros);
>>>>>>> 46fe1858cc6c5f490e454348d99044d0891a46db

/*
Quest 3.
1. 입력된 전달인자가 숫자(Number) 타입인 경우 true, 문자(String) 타입인 경우 false 를 반환하는 함수를 작성합니다.
2. 결과 변수1을 생성하여 (1)함수의 전달인자로 숫자를 기입하여 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.
3. 결과 변수2를 생성하여 (1)함수의 전달인자로 문자를 기입하여 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.

~~~~
* 함수 반환 결과.
func(5) : true
func('text') : false
~~~~
*/
<<<<<<< HEAD
=======
function checkType(type) {
    if(typeof type === 'number'){
        return true;
    }
    if(typeof type === 'string'){
        return false;
    }
    if(typeof type === 'object' || typeof type === 'boolean' || typeof type === 'undefined'){
        return null;
    }
}
var type1 = checkType(5); //number.
// console.log(type1);
var type2 = checkType('text'); //string.
// console.log(type2);
var type3 = checkType({}); //object.
var type4 = checkType([]); //object.
var type5 = checkType(true); //boolean.
var type6 = checkType(); //undefined.
console.log(type1, type2, type3, type4, type5, type6);
>>>>>>> 46fe1858cc6c5f490e454348d99044d0891a46db

/*
Quest 4.
1. 하나의 객체(Object) 타입 매개변수를 입력받는 함수를 작성합니다.
2. 입력된 전달인자 객체 내의 모든 요소 값을 문자열 연산하고 얻은 결과 값을 (1)함수에서 반환합니다.
3. 단, 문자열 연산 시 각 요소 값의 사이에는 띄어쓰기(' ')를 추가합니다.
4. 아래 보기의 객체 값을 할당하는 변수를 생성하고 (1)함수의 전달인자로 사용합니다. myName 색인 요소 값의 이름은 본인이름으로 변경합니다.
5. 결과 변수를 생성하여 (1)함수를 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.

~~~~
* 객체 값.
object = {
    greeting : '안녕하세요',
    myName : '김용원(본인이름으로 변경)입니다.',
    today : '오늘은',
    month : 5,
    separate : '/',
    day : 2,
    is : '입니다.',
    luck : '행운을 빕니다.'
}

* 함수 반환 결과.
func(object) : 안녕하세요 김용원입니다. 오늘은 5 / 2 입니다. 행운을 빕니다.
~~~~
*/
function greeting(_object){
    //object - loop.
    var result = '';
    //for 반복문을 이용한 object 값 구하기.
    var keys = Object.keys(_object); //object 의 key 배열. ["greeting", "myName", "today", ... "luck"];
    for(var i = 0; i < keys.length; i++){
        console.log(keys[i], _object[keys[i]]);
        if(result !== '') result += ' ';
        result += _object[keys[i]];
    }
    //for ... in 반복문을 이용한 object 값 구하기.
    for(var key in _object){
        if(result !== '') result += ' ';
        // result += _object[key]; //result = result + _object[key];
        //console.log(key, _object[key]);
    }
    return result;
}
var _message = {
    greeting : '안녕하세요',
    myName : '김용원입니다.',
    today : '오늘은',
    month : 5,
    separate : '/',
    day : 2,
    is : '입니다.',
    luck : '행운을 빕니다.'
}
var greetingMessage = greeting(_message);
console.log(greetingMessage);
// greeting({
//     greeting : '안녕하세요',
//     myName : '김용원입니다.',
//     today : '오늘은',
//     month : 5,
//     separate : '/',
//     day : 2,
//     is : '입니다.',
//     luck : '행운을 빕니다.'
// });

/*
Quest 5.
1. html 문서의 title을 '학번_이름' 으로 변경합니다.
*/
document.title = "20190000_김용원";

/*
Quest 6.
1. button#btn-student-number 클릭할 경우, 자신의 학번이 span#student-number 의 내부에 입력될 수 있도록 함수를 작성합니다.
2. button#btn-student-name 클릭할 경우, 자신의 이름이 span#student-name 의 내부에 입력될 수 있도록 함수를 작성합니다.
3. (1), (2) 각 클릭 리스너 호출 시 요소에 내용 입력이 완료된 후 아래 보기 문구의 경고창을 출력합니다.

~~~~
* 리스너 호출 경고창 문구.
(1) : 학번이 입력되었습니다.
(2) : 이름이 입력되었습니다.
~~~~
*/
var $btnStudentNumber = document.getElementById("btn-student-number");
var $btnStudentName = document.querySelector("button#btn-student-name");
$btnStudentNumber.addEventListener('click', function(event) {
    event.preventDefault();
    var $spanStudentNumber = document.getElementById("student-number");
    $spanStudentNumber.innerText = "20190000";
    alert("학번이 입력되었습니다.");
});
$btnStudentName.addEventListener('click', onClickBtnStudentName);
function onClickBtnStudentName(event) {
    event.preventDefault();
    var $spanStudentName = document.querySelector("span#student-name");
    $spanStudentName.innerText = "김용원";
    alert("이름이 입력되었습니다.");
}

/*
Quest 7.
1. button#btn-odd 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
2. 사용자가 입력한 수를 기준으로 0부터 해당 숫자까지의 숫자 중 홀수인 숫자를 아래 보기와 같이 문자열 연산하여 결과를 div#odd-result 의 내부에 입력될 수 있도록 작성합니다.

~~~~
* 문자열 결과.
(1)의 숫자가 10일 경우 : 1, 3, 5, 7, 9.
(1)의 숫자가 5일 경우 : 1, 3, 5.
~~~~
*/
var $btnOdd = document.getElementById("btn-odd");
$btnOdd.addEventListener('click', onClickBtnOdd);
function onClickBtnOdd(evt) {
    evt.preventDefault();
    var number = prompt("숫자를 입력해주세요.");
    var result = '';
    if(number !== null && number !== '' && !isNaN(Number(number))){
        //OK 를 눌렀고, 문자열이 기입되었을 때 & 숫자만 체크.
        number = Number(number);
        for(var i = 0; i <= number; i++){
            if(i % 2 === 1){
                if(result !== '') result += ', ';
                result += i;
            }
            // if(i === number) result += '.';
        }
        result += '.';
    }
    var $divOddResult = document.querySelector("div#odd-result");
    $divOddResult.innerText = result;
}

/*
Quest 8.
1. button#btn-add-item 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
2. 사용자가 입력한 수만큼 새로운 li 요소를 생성하고 ul#list 의 자식 요소로 추가합니다.
3. (2)에 생성되는 li 요소에는 'item' 이라는 클래스 이름를 추가하고 각 요소마다 항목의 번호를 내부 문자열로 입력합니다.
4. (2)에 생성되는 li 요소들이 ul#list 의 자식 요소들로 추가될 때 ul#list 의 이전 내용은 모두 삭제되고나서 추가합니다.

~~~~
* li 요소 항목의 번호는 1부터 시작합니다. 0으로 시작하지 않습니다.
(1)의 숫자가 2일 경우 : <li>1</li><li>2</li>
(1)의 숫자가 5일 경우 : <li>1</li><li>2</li><li>3</li><li>4</li><li>5</li>
~~~~
*/
var $btnAddItem = document.querySelector("button#btn-add-item");
$btnAddItem.addEventListener("click", onClickBtnAddItem);
function onClickBtnAddItem(e) {
    e.preventDefault();
    var number = prompt("숫자를 입력해주세요.");
    var $ulList = document.querySelector("ul#list");
    if(number !== null && number !== '' && !isNaN(Number(number))){
        $ulList.innerHTML = ''; //요소의 HTML 내용 지우기.
        number = Number(number);
        for(var i = 0; i < number; i++){
            var $li = document.createElement("li"); // 가상의 <li></li> 생성.
            $li.classList.add("item"); // $li.className = "item";
            $li.innerText = i + 1;
            $ulList.appendChild($li);
        }
    }
}

/*
Quest 9.
1. button#btn-color-1 를 클릭할 경우, 'box' 라는 클래스 이름을 가진 모든 div 요소의 배경색 스타일을 'red', 글자색 스타일을 'white' 로 변경합니다.
2. button#btn-color-2 를 클릭한 경우, 'box' 라는 클래스 이름을 가진 div 요소 중 3번째 요소의 배경색 스타일을 'blue', 글자색 스타일을 'black' 으로 변경합니다.
*/
var $btnColor1 = document.querySelector("button#btn-color-1");
var $btnColor2 = document.querySelector("button#btn-color-2");
$btnColor1.addEventListener("click", onClickBtnColor1);
$btnColor2.addEventListener("click", onClickBtnColor2);
function onClickBtnColor1(e) {
    e.preventDefault();
    var $boxs = document.getElementsByClassName("box");
    for(var i = 0; i < $boxs.length; i++){
        $boxs[i].style.backgroundColor = "red";
        $boxs[i].style.color = "white";
    }
}
function onClickBtnColor2(e) {
    e.preventDefault();
    var $boxs = document.querySelectorAll("div.box");
    $boxs[2].style.backgroundColor = "blue";
    $boxs[2].style.color = "black";
}

/*
Quest 10.
1. button#btn-star 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
2. 사용자가 입력한 수에 따라 아래 보기와 같이 문자열 연산하여 결과를 pre#star-result 의 내부에 입력될 수 있도록 작성합니다.

~~~~
* 문자열 결과.
(1)의 숫자가 5일 경우
★☆☆☆☆
★★☆☆☆
★★★☆☆
★★★★☆
★★★★★
(1)의 숫자가 3일 경우
★☆☆
★★☆
★★★
~~~~
*/
var $btnStar = document.querySelector("button#btn-star");
$btnStar.addEventListener("click", onClickBtnStar);
function onClickBtnStar(e) {
    e.preventDefault();
    var number = prompt("숫자를 입력해주세요.");
    var result = '';
    if(number !== null && number !== '' && !isNaN(Number(number))){
        //★☆
        //반복문의 반복문.
        number = Number(number);
        //5.
        for(var i = 0; i < number; i++){
            result += getStar(number, i);
            // for(var j = 0; j < number; j++){
            //     if(i >= j){
            //         result += '★';
            //     }else{
            //         result += '☆';
            //     }
            // }
            result += '\n'; //줄바꿈.
        }
        i = i - 2;
        for(i; i >= 0; i--){
            result += getStar(number, i);
            // for(var j = 0; j < number; j++){
            //     if(i >= j){
            //         result += '★';
            //     }else{
            //         result += '☆';
            //     }
            // }
            result += '\n';
        }
        var $preStarResult = document.querySelector("pre#star-result");
        $preStarResult.innerHTML = result;
        // console.log(result);
    }
}
function getStar(number, i){
    var result = '';
    for(var j = 0; j < number; j++){
        if(i >= j){
            result += '★';
        }else{
            result += '☆';
        }
    }
    return result;
}