// +### 문제 1.

// 아래의 요건에 따라 코드를 작성합니다.

// 1) js 폴더와 폴더 내부에 script.js 파일 생성하고 index.html 에 script.js 외부 파일을 로드합니다.
// 2) script.js 에 아래 보기 문구의 경고창을 출력합니다.

// ~~~~
// * 경고창 문구.
// Hello, world!
// ~~~~

// > 유효 위치 확인합니다.<br/>배점 : 1점


alert("Hello, world!");


// +### 문제 2.

// 아래의 요건에 따라 코드를 작성합니다.

// 1) 아래 보기의 배열(Array) 객체 값을 할당하는 변수를 생성합니다.
// 2) 'Doctor Strange' 문자열 값을 (1)배열 객체의 마지막 부분에 추가합니다.
// 3) (1)배열 객체의 뒤에서 두번째 요소 값을 'Captain Marvel' 문자열 값으로 변경합니다.
// 4) (1)배열 객체의 첫번째 요소를 삭제합니다.
// 5) (1)배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.

// ~~~~
// * 배열 객체 값.
// array = ['Iron Man', 'Captain America', 'Hulk', 'Thor', 'Spider-Man'];
// ~~~~

// > 배점 : 2점

var _heros = ['Iron Man', 'Captain America', 'Hulk', 'Thor', 'Spider-Man'];
_heros.push('Doctor Strange');
_heros.splice(4,0,'Captain Marvel');
_heros.shift();
_heros.reverse();
console.log(_heros, _heros.length);

// ### 문제 3.

// 아래의 요건에 따라 코드를 작성합니다.

// 1) 입력된 전달인자가 숫자(Number) 타입인 경우 true, 문자(String) 타입인 경우 false 를 반환하는 함수를 작성합니다.
// 2) 결과 변수1을 생성하여 (1)함수의 전달인자로 숫자를 기입하여 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.
// 3) 결과 변수2를 생성하여 (1)함수의 전달인자로 문자를 기입하여 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.

// ~~~~
// * 함수 반환 결과.
// func(5) : true
// func('text') : false
// ~~~~

// > 배점 : 3점


var func = function(_number){
    if(typeof _number !== 'number'){
                 return false;
             }
           var result = '';
     for(var i = 0; i < _number; i++){
         result = 'true';
     }
           return result;

}

var number1 = func('text');
console.log(number1)
var number2 = func(6);
console.log(number2)





// ### 문제 4.

// 아래의 요건에 따라 코드를 작성합니다.

// 1) 하나의 객체(Object) 타입 매개변수를 입력받는 함수를 작성합니다.
// 2) 입력된 전달인자 객체 내의 모든 요소 값을 문자열 연산하고 얻은 결과 값을 (1)함수에서 반환합니다.
// 3) 단, 문자열 연산 시 각 요소 값의 사이에는 띄어쓰기(' ')를 추가합니다.
// 4) 아래 보기의 객체 값을 할당하는 변수를 생성하고 (1)함수의 전달인자로 사용합니다. myName 색인 요소 값의 이름은 본인이름으로 변경합니다.
// 5) 결과 변수를 생성하여 (1)함수를 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.

// ~~~~
// * 객체 값.
// object = {
//     greeting : '안녕하세요',
//     myName : '김용원(본인이름으로 변경)입니다.',
//     today : '오늘은',
//     month : 5,
//     separate : '/',
//     day : 2,
//     is : '입니다.',
//     luck : '행운을 빕니다.'
// }

// * 함수 반환 결과.
// func(object) : 안녕하세요 김용원입니다. 오늘은 5 / 2 입니다. 행운을 빕니다.
// ~~~~

// > 간혹 브라우저마다 전달인자의 객체 색인 순서가 변경될 수 있으나 같은 형식만 갖추면 됩니다.<br/>배점 : 3점

var _newobject = function(_object)
{
        var obj = {
        greeting : '안녕하세요',
         myName : '김채나 입니다.',
         today : '오늘은',
         month : 5,
         separate : '/',
         day : 2,
         is : '입니다.',
         luck : '행운을 빕니다.' }

for(var key in _object)
{
    result += " ";
}

}

console.log(_newobject);

// ### 문제 5.

// 아래의 요건에 따라 코드를 작성합니다.

// 1) html 문서의 title을 '학번_이름' 으로 변경합니다.

// > 이름은 한글로 작성합니다.<br/>배점 : 1점


document.title = '21861042_김채나';




// ### 문제 6.

// 아래의 요건에 따라 코드를 작성합니다.

// 1) button#btn-student-number 클릭할 경우, 자신의 학번이 span#student-number 의 내부에 입력될 수 있도록 함수를 작성합니다.
// 2) button#btn-student-name 클릭할 경우, 자신의 이름이 span#student-name 의 내부에 입력될 수 있도록 함수를 작성합니다.
// 3) (1), (2) 각 클릭 리스너 호출 시 요소에 내용 입력이 완료된 후 아래 보기 문구의 경고창을 출력합니다.

// ~~~~
// * 리스너 호출 경고창 문구.
// (1) : 학번이 입력되었습니다.
// (2) : 이름이 입력되었습니다.
// ~~~~
   
// > 배점 : 3점


var $btnname = document.querySelector("button#btn-student-name");
$btnname.addEventListener("click",onClickBtnAddName);
function onClickBtnAddName(event){
    event.preventDefault();
    var isname =prompt("");
    var newname = document.createElement("li");
    $btnname.appendChild(newname);
    newname.innerText= isname;
    alert("이름이 입력되었습니다.")
}



var $btnnumber = document.querySelector("button#btn-student-number");
$btnnumber.addEventListener("click",onClickBtnAddNumber);
function onClickBtnAddNumber(event){
    event.preventDefault();
    var isnumber =prompt("");
    var newnumber = document.createElement("li");
    $btnnumber.appendChild(newnumber);
    newnumber.innerText= isnumber;
    alert("학번이 입력되었습니다.")
}


// ### 문제 7.

// 아래의 요건에 따라 코드를 작성합니다.

// 1) button#btn-odd 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
// 2) 사용자가 입력한 수를 기준으로 0부터 해당 숫자까지의 숫자 중 홀수인 숫자를 아래 보기와 같이 문자열 연산하여 결과를 div#odd-result 의 내부에 입력될 수 있도록 작성합니다.

// ~~~~
// * 문자열 결과.
// (1)의 숫자가 10일 경우 : 1, 3, 5, 7, 9.
// (1)의 숫자가 5일 경우 : 1, 3, 5.
// ~~~~

// > 배점 : 3점



var $btnodd = document.querySelector("button#btn-odd");
$btnodd.addEventListener("click", onClickBtnodd);
function onClickBtnodd(event) {
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



// ### 문제 8.

// 아래의 요건에 따라 코드를 작성합니다.

// 1) button#btn-add-item 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
// 2) 사용자가 입력한 수만큼 새로운 li 요소를 생성하고 ul#list 의 자식 요소로 추가합니다.
// 3) (2)에 생성되는 li 요소에는 'item' 이라는 클래스 이름를 추가하고 각 요소마다 항목의 번호를 내부 문자열로 입력합니다.
// 4) (2)에 생성되는 li 요소들이 ul#list 의 자식 요소들로 추가될 때 ul#list 의 이전 내용은 모두 삭제되고나서 추가합니다.

// ~~~~
// * li 요소 항목의 번호는 1부터 시작합니다. 0으로 시작하지 않습니다.
// (1)의 숫자가 2일 경우 : <li>1</li><li>2</li>
// (1)의 숫자가 5일 경우 : <li>1</li><li>2</li><li>3</li><li>4</li><li>5</li>
// ~~~~

// > 배점 : 4점 (부분배점 - 1 : 1점, 2 : 2점, 3-4 : 1점)



var $btnadditem = document.querySelector("button#btn-add-item");
$btnadditem.addEventListener("click", onClickBtnadditem);
function onClickBtnadditem(event) {

            document.querySelector("ul#list").innerHTML = '';

            var item = prompt('숫자를 입력해주세요');
            for(var j=0;j<=item;j++){
                if(j>0){
                    var newitem = document.createElement("li");
                    result2 = "<li>" + j + "</li>" ;
                    document.querySelector("ul#list").innerText += result2}}

}
    






// ### 문제 9.

// 아래의 요건에 따라 코드를 작성합니다.

// 1) button#btn-color-1 를 클릭할 경우, 'box' 라는 클래스 이름을 가진 모든 div 요소의 배경색 스타일을 'red', 글자색 스타일을 'white' 로 변경합니다.
// 3) button#btn-color-2 를 클릭한 경우, 'box' 라는 클래스 이름을 가진 div 요소 중 3번째 요소의 배경색 스타일을 'blue', 글자색 스타일을 'black' 으로 변경합니다.

// > 배점 : 4점 (부분배점 - 1 : 2점, 2 : 2점)

var $btncolor1 = document.querySelector("button#btn-color-1");
$btncolor1.addEventListener("click", onclickBtnColor1);
function onclickBtnColor1(event) {
    event.preventDefault();
    var $box = document.getElementsByClassName("box");
    for (var i = 0; i < $box.length; i++) {
        $box[i].style.color = 'white';
        $box[i].style.backgroundColor = "red";
    }
}
var $btncolor2 = document.querySelector("button#btn-color-2");
$btncolor2.addEventListener("click", onclickBtnColor2);
function onclickBtnColor2(event) {
    event.preventDefault();
    var $box = document.getElementsByClassName("box");
    for (var j = 1; j < $box.length; j++) {
        if (j === $box.length-3) {
            $box[j].style.color = 'black';
            $box[j].style.backgroundColor = "blue";
        }
    }
}

// ### 문제 10.

// 아래의 요건에 따라 코드를 작성하고 예시와 같은 결과값이 출력되도록 함수를 작성합니다.

// 1) button#btn-star 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
// 2) 사용자가 입력한 수에 따라 아래 보기와 같이 문자열 연산하여 결과를 pre#star-result 의 내부에 입력될 수 있도록 작성합니다.

// ~~~~
// * 문자열 결과.
// (1)의 숫자가 5일 경우
// ★☆☆☆☆
// ★★☆☆☆
// ★★★☆☆
// ★★★★☆
// ★★★★★
// (1)의 숫자가 3일 경우
// ★☆☆
// ★★☆
// ★★★
// ~~~~



var btnstar = document.querySelector("button#btn-star");
btnstar.addEventListener("click",onClickBtnAddStar);
var max = 5;
function onClickBtnAddStar(event){
    event.preventDefault();
    var star = prompt('숫자를 입력해주세요')
    var result ='';
   for(var i=0; i<max;i++){
       for(var j=0; j<max;j++){
           if(j=0){
            j+='☆'
           }
           else if(j=5)
           {
            j = '★'
           }
           else{
               j='☆'
           }
       }
   }
        var ScityList = document.getElementById("star-result");
           var SnewItem = document.createElement("li");
            SnewItem.innerText = '☆';
            ScityList.appendChild(SnewItem);

            console.log(result);
            document.querySelector("star-result").innerText = result

}
