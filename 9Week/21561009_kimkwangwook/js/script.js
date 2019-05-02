// 1번

window.alert("~~~~ \n * 경고창문구. \n Hello,world \n ~~~~");

// 
// 2번
//2-1
var array = ['Iron Man', 'Captain America', 'Hulk', 'Thor', 'Spider-Man'];

//2-2
array.push('Doctor Strange');
// console.log(array, array.length);

//2-3
array.splice(4, 1, 'Captain Mavle');
// console.log(array,array.length);

//2-4
array.shift();
// console.log(array,array.length);

//2-5
array.reverse();
console.log(array,array.length);

//

//
// 3번

var NumText = function(_number){
    if(typeof _number == 'number'){
        return true;
    }else if(typeof _number == 'string'){
        return false;
    }
}
var Num1 = NumText(10);
console.log(Num1);

var Num2 = NumText('text');
console.log(Num2);

console.log("*함수 반환결과 \n" + "Num1(10) : " + Num1 +
                            "\n Num2('text') : " + Num2);




//4번


var object = {
    greeting : '안녕하세요',
    myName : '김광욱 입니다.',
    today : '오늘은',
    month : 5,
    separate : '/',
    day : 2,
    is : '입니다.',
    luck : '행운을 빕니다.'
} 
function object1(mine){
    result1 = ''; 
for(var i=0; i<object.length; i++){
  result += ' '
}
return result;
};


var result2 = object1(mine);
console.log(result2);



//5번
document.title = "21561009_김광욱";


//6번
var $btnstunumber = document.querySelector("button#btn-student-number");
$btnstunumber.addEventListener("click", onClickBtnstunumber);
function onClickBtnstunumber(event){
    var A;
    if (A !== null && A !== ""){
        var span = document.getElementById("span#student-number");
        var $new = document.createElement("div");
        $new.innerText=A;
        span.appendChild($new);
    }
}
// };

// 7번

var $Number = document.querySelector("button#btn-odd");
$Number.addEventListener("click",onclickBtnodd);
function onclickBtnodd(event){
    event.preventDefault();
    var number7 = prompt("숫자를 입력해주세요")
    if (number7 !== null && number7 !== ""){   
    }
    }
    
//8번
    var $Item = document.querySelector("button#btn-add-item");
    $Item.addEventListener("click",onclickadditem);
    function onclickadditem(event){
        var add = prompt("숫자를 입력해주세요")
        if ( add !== null && city !== ""){
            var $List = document.getElementById("city-list");
            var $newItem = document.createElement("li");
            $newItem.innerText = add;
            $List.appendChild($newItem);
        }
    }

// 9번

var $btnColor1 = document.querySelector("button#btn-color-1");
var count = 0;
$btnColor1.addEventListener("click", onClickBtnColor);
function onClickBtnColor(event) {
    event.preventDefault();
    var $sentence = document.getElementsByClassName("section");
    for(var i = 0; i < $sentence.length; i++){
        if(count === i){
            $sentence[i].style.color = "white";
            $sentence[i].style.backgroundcolor = "red";

        }else{
            $sentence[i].style.color = "red";
        }
    }

    count++;
    if(count >= $sentence.length) count = 0;
}

var $btnColor2 = document.querySelector("button#btn-color-2");
var count = 0;
$btnColor2.addEventListener("click", onClickBtnColor);
function onClickBtnColor(event) {
    event.preventDefault();
    var $sentence = document.getElementsByClassName("section");
    for(var i = 0; i < $sentence.length; i++){
        if(count === i){
            $sentence[i].style.color = "black";
            $sentence[i].style.backgroundcolor = "blue";
    }
    }
    count++;
    if(count >= $sentence.length) count = 0;
}

//10번
