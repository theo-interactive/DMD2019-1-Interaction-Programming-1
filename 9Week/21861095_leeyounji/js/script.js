/*문제 1.
아래의 요건에 따라 코드를 작성합니다.

js 폴더와 폴더 내부에 script.js 파일 생성하고 index.html 에 script.js 외부 파일을 로드합니다.
script.js 에 아래 보기 문구의 경고창을 출력합니다.
* 경고창 문구.
Hello, world!
유효 위치 확인합니다.
배점 : 1점
*/

alert("Hello, world!");

/*
문제 2.
아래의 요건에 따라 코드를 작성합니다.

아래 보기의 배열(Array) 객체 값을 할당하는 변수를 생성합니다.
'Doctor Strange' 문자열 값을 (1)배열 객체의 마지막 부분에 추가합니다.
(1)배열 객체의 뒤에서 두번째 요소 값을 'Captain Marvel' 문자열 값으로 변경합니다. 전체의 개수를 구하고 계산해서 결과 나오게
(1)배열 객체의 첫번째 요소를 삭제합니다.
(1)배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.
* 배열 객체 값.
array = ['Iron Man', 'Captain America', 'Hulk', 'Thor', 'Spider-Man'];
배점 : 2점
*/

array = ['Iron Man', 'Captain America', 'Hulk', 'Thor', 'Spider-Man'];

array.splice(array.length-1, 0, 'Doctor Strange');
console.log(array);

array.shift();
console.log(array);

array.reverse();
console.log(array);


/*
문제 3.
아래의 요건에 따라 코드를 작성합니다.

입력된 전달인자가 숫자(Number) 타입인 경우 true, 문자(String) 타입인 경우 false 를 반환하는 함수를 작성합니다.
결과 변수1을 생성하여 (1)함수의 전달인자로 숫자를 기입하여 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.
결과 변수2를 생성하여 (1)함수의 전달인자로 문자를 기입하여 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.
* 함수 반환 결과.
func(5) : true
func('text') : false
배점 : 3점
*/

function func(_result){
    if(typeof _result===typeof 1){
        return true;
    }else if(typeof _result===typeof "a"){
        return false;
    }
}

var _a=func(5);
console.log(_a);

var _b=func('text');
console.log(_b);


/*
문제 4.
아래의 요건에 따라 코드를 작성합니다.

하나의 객체(Object) 타입 매개변수를 입력받는 함수를 작성합니다.
입력된 전달인자 객체 내의 모든 요소 값을 // 문자열 연산하고 얻은 결과 값을 (1)함수에서 반환합니다.

단, 문자열 연산 시 각 요소 값의 사이에는 띄어쓰기(' ')를 추가합니다.
아래 보기의 객체 값을 할당하는 변수를 생성하고 (1)함수의 전달인자로 사용합니다. myName 색인 요소 값의 이름은 본인이름으로 변경합니다.
결과 변수를 생성하여 (1)함수를 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.
* 객체 값.
object = {
    greeting : '안녕하세요',
    myName : '김용원(본인이름으로 변경)입니다.',
    today : '오늘은',
    month : 5,
    month : '/',
    month : 2,
    is : '입니다.',
    luck : '행운을 빕니다.'
}

* 함수 반환 결과.
func(object) : 안녕하세요 김용원입니다. 오늘은 5 / 2 입니다. 행운을 빕니다.
간혹 브라우저마다 전달인자의 객체 색인 순서가 변경될 수 있으나 같은 형식만 갖추면 됩니다.
배점 : 3점
*/

function a(_object){
    var c="";
    for(var key_1 in _object){
        c=c+key_1 + ' : ' + _object[key_1];
        return c;
    }
}
var result=a(object = {
    greeting : '안녕하세요',
    myName : '이윤지',
    today : '오늘은',
    month : 5,
    month : '/',
    month : 2,
    is : '입니다.',
    luck : '행운을 빕니다.'
});
console.log(result);
/*
문제 5.
아래의 요건에 따라 코드를 작성합니다.

html 문서의 title을 '학번_이름' 으로 변경합니다.
이름은 한글로 작성합니다.
배점 : 1점
*/


document.title = "21861095_이윤지";

/*
문제 6.
아래의 요건에 따라 코드를 작성합니다.

button#btn-student-number 클릭할 경우, 자신의 학번이 span#student-number 의 내부에 입력될 수 있도록 함수를 작성합니다.
button#btn-student-name 클릭할 경우, 자신의 이름이 span#student-name 의 내부에 입력될 수 있도록 함수를 작성합니다.
(1), (2) 각 클릭 리스너 호출 시 요소에 내용 입력이 완료된 후 아래 보기 문구의 경고창을 출력합니다.
* 리스너 호출 경고창 문구.
(1) : 학번이 입력되었습니다.
(2) : 이름이 입력되었습니다.
배점 : 3점
*/


var $numberBtn = document.querySelector("button#btn-student-number");
var $number = document.querySelector("span#student-number");

$numberBtn.addEventListener("click", function onClickBtnNumber(event_1) {

    $number.innerText = "21861095";
    alert("학번이 입력되었습니다.");
});

var $btn = document.querySelector("button#btn-student-name ");
var $name = document.querySelector("span#student-name");

$btn.addEventListener("click", function onClickBtn(event){

    $name.innerText = "이윤지";
    alert("이름이 입력되었습니다.");
});




/*
문제 7.
아래의 요건에 따라 코드를 작성합니다.

button#btn-odd 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
사용자가 입력한 수를 기준으로 0부터 해당 숫자까지의 숫자 중 홀수인 숫자를 아래 보기와 같이 문자열 연산하여 결과를 div#odd-result 의 내부에 입력될 수 있도록 작성합니다.
* 문자열 결과.
(1)의 숫자가 10일 경우 : 1, 3, 5, 7, 9.
(1)의 숫자가 5일 경우 : 1, 3, 5.
배점 : 3점
*/
var $btn_2 = document.querySelector("button#btn-odd");
var $number_2 = document.querySelector("div#odd-result ");
$btn_2.addEventListener("click", function onClickBtn_2(event_2){
    var _number=prompt('숫자를 입력해주세요.');
    var result="";
    for(var i=0; i<=_number; i++){
        if(i%2===1){
            if(result !== ''){
                result+=", ";
            }
            result+=i;
        }
    }
    result += '.';
    $number_2.innerText = result;
});


/*
문제 8.
아래의 요건에 따라 코드를 작성합니다.

button#btn-add-item 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
사용자가 입력한 수만큼 새로운 li 요소를 생성하고 ul#list 의 자식 요소로 추가합니다.

(2)에 생성되는 li 요소에는 'item' 이라는 클래스 이름를 추가하고 각 요소마다 항목의 번호를 내부 문자열로 입력합니다.

(2)에 생성되는 li 요소들이 ul#list 의 자식 요소들로 추가될 때 ul#list 의 이전 내용은 모두 삭제되고나서 추가합니다. 인어 html안에 공백을 넣어주기 
* li 요소 항목의 번호는 1부터 시작합니다. 0으로 시작하지 않습니다.
(1)의 숫자가 2일 경우 : <li>1</li><li>2</li>
(1)의 숫자가 5일 경우 : <li>1</li><li>2</li><li>3</li><li>4</li><li>5</li>
배점 : 4점 (부분배점 - 1 : 1점, 2 : 2점, 3-4 : 1점)
*/
console.log(document);
var $btn_3 = document.querySelector("button#btn-add-item");
var $List = document.getElementById("list");

$btn_3.addEventListener("click", function onClickBtn(event_3){
  var number_2= prompt('숫자를 입력해주세요.');
  $List.innerHTML="";
  for(var i=0; i<=number_2; i++){
      if(i>0){
        var $newItem = document.createElement("li");
        $newItem.setAttribute("class", 'item'); 
        $newItem.innerText = i;
        $List.appendChild($newItem);}
  }
  console.log(document);
});
/*console.log($List);
$List.appendChild($newItem);
$newItem.setAttribute("class", 'item'+i); 
console.log($newItem);8/

/*
문제 9.
아래의 요건에 따라 코드를 작성합니다.

button#btn-color-1 를 클릭할 경우, 'box' 라는 클래스 이름을 가진 모든 div 요소의 배경색 스타일을 'red', 글자색 스타일을 'white' 로 변경합니다.
button#btn-color-2 를 클릭한 경우, 'box' 라는 클래스 이름을 가진 div 요소 중 3번째 요소의 배경색 스타일을 'blue', 글자색 스타일을 'black' 으로 변경합니다.
배점 : 4점 (부분배점 - 1 : 2점, 2 : 2점)*/

var $div = document.getElementsByClassName('box');
var $btn_4 = document.querySelector("button#btn-color-1 ");
$btn_4.addEventListener("click", function onClickBtn(event_5){
    for(var i=0; i<$div.length; i++){
    $div[i].style.backgroundColor = "red";}

});


var $btn_5 = document.querySelector("button#btn-color-2");
$btn_5.addEventListener("click", function onClickBtn(event_6){
   
    $div[3].style.backgroundColor = "blue";
    $div[3].style.color = "black";

});



/*
문제 10.
아래의 요건에 따라 코드를 작성하고 예시와 같은 결과값이 출력되도록 함수를 작성합니다.

button#btn-star 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
사용자가 입력한 수에 따라 아래 보기와 같이 문자열 연산하여 결과를 pre#star-result 의 내부에 입력될 수 있도록 작성합니다.
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

*/


var $btn_6 = document.querySelector("button#btn-star");
var $result = document.querySelector("pre#star-result");

$btn_6.addEventListener("click", function onClickBtn(event_6){
    var max=prompt('숫자를 입력해주세요.');
    var result = '';
    for(var i = 0; i < max; i++){

        for(var j=0; j<max; j++){
            if(j<max){
                result+="☆"
                console.log(j);
                if(i>=max){
                    result+="★";
                    console.log(j);}
            }
            else if(i>=max){
                result+="★";
                console.log(j);
            }
    
        }
        result += '\n';
    }
    console.log(result);
});


/*

var $btn_6 = document.querySelector("button#btn-star");
var $result = document.querySelector("pre#star-result");

$btn_6.addEventListener("click", function onClickBtn(event_6){
    var max=prompt('숫자를 입력해주세요.');
    var result = '';
    for(var i = 0; i <max; i++){
        result=result+'*';
        console.log(i);
    }
    result += '\n';
    console.log(result);
});


var getStars = function(_number) {
    var result = '';
    for(var i = 1; i <= _number; i++){
        result += getStar(i);
        result += '\n';//줄바꿈.
    }
    return result;
}
//함수 안의 다른 함수를 재활용 할 수 있다.
var stars1 = getStars(5);
console.log(stars1);



/*var max="";
    for(var i=0; i<max; i++){
        for(var j=0; j<max; j++){

        }
    }*/
