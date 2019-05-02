//console.log("ㅇㅇ");
alert("Hello, world!");

var _array = ['Iron Man', 'Captain America', 'Hulk', 'Thor', 'Spider-Man'];
_array.push('Doctor Strange');
console.log(_array, _array.length);
_array.splice(4, 1, 'Captain Marvel' );
console.log(_array, _array.length);
_array.shift();
console.log(_array, _array.length);
_array.reverse();
console.log(_array, _array.length);


var func3 = function(number3,msg3){
    var box = func3;
     if(number3 === 1){
         console.log(number3);
     }
     if(msg3 === "유진"){
          console.log(msg3);
      }
    return box;
};
var box = func3(1, "유진");

var _object = {
    greeting : '안녕하세요 ',
    myName : '이유진입니다. ',
    today : '오늘은 ',
    month : 5 ,
    separate : ' / ',
    day : 2 ,
    is : ' 입니다. ',
    luck : '행운을 빕니다.'
}
console.log(_object.greeting+ _object.myName+ _object.today+ _object.month+ _object.separate+ _object.day+ _object.is+ _object.luck);

document.title = "21861093_이유진";

//6번
var $btnNum = document.querySelector("button#btn-student-number");
$btnNum.addEventListener("click", onClickBtnNum);
function onClickBtnNum(event){
    event.preventDefault();
    alert("학번이 입력되었습니다.");
    var $result = document.getElementById("div#odd-result");
    // $result.value = "21861093";
    // if($stuNum.contains("21861093")){
    //     $stuNum.remove("#");
    // }else{
    //     $stuNum.add("21861093");
    // }
}

//7번
var $btnOdd = document.querySelector("button#btn-odd");
$btnOdd.addEventListener("click", onClickBtnOdd);
function onClickBtnOdd(event){
    event.preventDefault();
    var odd = prompt("숫자를 입력해주세요.");
    for(var i = 0; i <= odd; i++){
        if(Number(odd) % 2 === 1){
            odd++
        }
        console.log(odd);
    }
}

//8번
var $btnItem = document.querySelector("button#btn-add-item");
$btnItem.addEventListener("click", onClickBtnItem);
function onClickBtnItem(event){
    event.preventDefault();
    var item = prompt("숫자를 입력해주세요.");
    console.log(item);
}

//10번
var $btnStar = document.querySelector("button#btn-star ");
$btnStar.addEventListener("click", onClickBtnStar);
function onClickBtnStar(event){
    event.preventDefault();
    var item = prompt("숫자를 입력해주세요.");
}




