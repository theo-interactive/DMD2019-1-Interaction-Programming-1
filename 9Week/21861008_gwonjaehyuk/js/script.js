//문제1.
alert("Hello, world!");

//문제2.
var _heros = ['Iron Man', 'Captain America', 'Hulk', 'Thor', 'Spider-Man'];
_heros.push('Doctor Strange');
// console.log(_heros);
_heros.splice(_heros.length-2, 1, 'Captain Marvel');
// console.log(_heros);
// _heros.shift();
// console.log(_heros);
// _heros.reverse();
console.log(_heros);

//문제3.
function _typeOf(_arg) {
    if (typeof _arg === "number"){
        return true;
    }else if(typeof _arg === "string") {
        return false;
    }
}

_arg1 = _typeOf(5);
console.log("_typeOf(10) : " + _arg1);
_arg2 = _typeOf('text');
console.log("_typeOf('test') : "+ _arg2);


// 문제4.
var message = {
    greeting : '안녕하세요',
    myName : '권재혁 입니다.',
    today : '오늘은',
    month : 5,
    separate : '/',
    day : 2,
    is : '입니다.',
    luck : '행운을 빕니다.'
}
function _obj(msg) {
    result = '';
    for (i in msg) {
        if (i === msg.length){
            result += '.'; 
        }else {
            result += msg[i] + ' ';
        }   
    }return result; 
}
var answer = _obj(message);
console.log(answer);





//문제5.
document.title = "21861008_권재혁";

//문자6.
var $btnStuNum = document.querySelector("button#btn-student-number");
// console.log($btnStuNum);
$btnStuNum.addEventListener("click", onclickBtnStuNum); 
function onclickBtnStuNum(event) {
    var $StuNum = document.getElementById("student-number");
    $StuNum.innerHTML = "<span>21861008</span>";
    alert("(1) : 학번이 입력되었습니다.");
}

var $btnStuName = document.querySelector("button#btn-student-name");
// console.log($btnStuName);
$btnStuName.addEventListener("click", onclickBtnStuName); 
function onclickBtnStuName(event) {
    var $StuName = document.getElementById("student-name");
    $StuName.innerHTML = "<span>권재혁</span>";
    alert("(2) : 이름이 입력되었습니다.");
}


//문제7.
var $btnOdd = document.querySelector("button#btn-odd");
$btnOdd.addEventListener("click", onclickBtnOdd);
function onclickBtnOdd(event) {
    var _num = prompt("숫자를 입력해주세요.");
    if (_num !== null) {
        oddSum = '';
        for(var i = 0; i <= _num; i++) {
            if(i % 2 === 1) {
                if (oddSum !== '') {
                    oddSum += ', ';
                }oddSum += i;
            }
        }
        oddSum += '.';
    }
    var $odd_result = document.getElementById("odd-result");
    $odd_result.innerText = oddSum;
}

//문제8.
var $btnAddItem = document.querySelector("button#btn-add-item");
$btnAddItem.addEventListener("click", onclickBtnAddItem);
function onclickBtnAddItem(event) {
    var _numA = prompt("숫자를 입력해주세요");
    if (_numA !== null && _numA !== ""){
        $reset =  document.getElementById("list");
        $reset.innerHTML = "";
        for (var i = 0; i < _numA; i++) {
            var $itemList = document.getElementById("list");
            var $newItem = document.createElement("li");
            $newItem.className = "item";
            $newItem.innerText = i + 1;
            $itemList.appendChild($newItem);
            console.log($newItem);
        }
    }
}

//문제9.
var $btnColor1 = document.querySelector("button#btn-color-1");
$btnColor1.addEventListener("click", onclickBtnColor1);
function onclickBtnColor1(event) {
    var $box = document.getElementsByClassName("box");
    for (var i = 0; i < $box.length; i++) {
        $box[i].style.color = 'white';
        $box[i].style.backgroundColor = "red";
    }
}
var $btnColor2 = document.querySelector("button#btn-color-2");
$btnColor2.addEventListener("click", onclickBtnColor2);
function onclickBtnColor2(event) {
    var $box = document.getElementsByClassName("box");
    for (var i = 0; i < $box.length; i++) {
        if (i === 2) {
            $box[i].style.color = 'black';
            $box[i].style.backgroundColor = "blue";
        }else {
        $box[i].style.color = 'white';
        $box[i].style.backgroundColor = "red";
        }
    }
}

//문제10.
var $btnStar = document.querySelector("button#btn-star");
$btnStar.addEventListener("click", onclickBtnStar);
function onclickBtnStar(event) {
    var _numB = prompt("숫자를 입력해주세요");
    if (_numB !== null && _numB !== ""){
        var max = _numB;
        var result = '';
        for(var i = 0; i < _numB; i++){
            for(var j = 0; j < _numB; j++){
                
                if (i >= j) {
                    result  += "★";
                }else {
                    result  += "☆";
                }
            }result += "\n";
        }
        var $stars = document.getElementById("star-result");
        $stars.innerText = result;
    }
}
