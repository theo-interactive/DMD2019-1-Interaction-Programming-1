//문제 1번
alert("Hello, world!");

//문제 2번
var _array = ['Iron Man', 'Captain America', 'Hulk', 'Thor', 'Spider-Man'];
_array.push('Doctor Strange' );
_array.splice(4,1 ,'Captain Marvel');
_array.shift();
_array.reverse();
console.log(_array);

//문제 3번

var Checktype = function(_check){
            if(typeof _check == 'number'){
                return true;
            }
            else if(typeof _check == 'string'){
                return false;
            }
}

var check1 = Checktype(5);
console.log(check1);

var check2 = Checktype('text');
console.log(check2);

//문제 4번

var _sayhi = {
    greeting : '안녕하세요',
    myName : '조혜수 s입니다.',
    today : '오늘은',
    month : 5,
    separate : '/',
    day : 2,
    is : '입니다.',
    luck : '행운을 빕니다.'
}
function _object(){
        var result = '';
        for(var key in this){
            result += this[key];
            result += ' ';
        }
        return result;
}

var k =_object.apply(_sayhi);
console.log(k);

//문제 5번
document.title = "20861120_조혜수";


//문제 6번
var $btnApply = document.querySelector("button#btn-student-number");
$btnApply.addEventListener("click", onClickBtnCheckId);
function onClickBtnCheckId(event) {
    event.preventDefault();
    var isCheck1 = prompt("");
    var $spanstudent1 = document.querySelector("span#student-number");
    $spanstudent1.innerText = isCheck1;
    alert('학번이 입력되었습니다!');
}



var $btnApply2 = document.querySelector("button#btn-student-name");
$btnApply2.addEventListener("click",onClickBtnStudentname );
function onClickBtnStudentname(event) {
    event.preventDefault();
    var isCheck2 = prompt("");
    var $spanstudent2 = document.querySelector("span#student-name");
    $spanstudent2.innerText = isCheck2;
    alert('이름이 입력되었습니다!');
}





//문제 7

var $btnApply2 = document.querySelector("button#btn-odd");
$btnApply2.addEventListener("click", onClickBtnOdd);
function onClickBtnOdd(event) {
    event.preventDefault();
    var isCheck3 = prompt("숫자를 입력해주세요");
    var $divstudent = document.querySelector("div#odd-result");
    var result = '';

    for(var i = 0; i <= isCheck3.length; i++) {
        if(i > 0){
            if(i % 2 === 1){
                //홀수.
                if(result !== ''){
                    result += ', ';
                }
                result += i;
                $divstudent.innerText=result;
            }
        }
    }
    result += '.';
}

/*
//문제 8

var $btnadditem = document.querySelector("button#btn-add-item");
$btnadditem.addEventListener("click", onClickBtnCheckId);
function onClickBtnadditem(event) {
    event.preventDefault();
    var isCheck4 = prompt("숫자를 입력해주세요");
    var $newItem = document.createElement("li");
}



//문제 9

var $btncolor1 = document.querySelector("button#btn-color-1");
$btncolor1.addEventListener("click", onClickBtnColor1);
function onClickBtnColor1(event) {
     event.preventDefault();
    var $box = document.createElement('div');
        $box.style.backgroundColor = 'red';
        $box.style.color = 'white';
}






    

*/
