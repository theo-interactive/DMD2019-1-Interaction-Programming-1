//Q1
//교수님 콘솔창에 잘뜨다가 갑자기 안뜨는데 왜그런건가융..ㅠㅠ


var string='';
var number='';
function getEven(num_0){
    for(var i = 0; i <= num_0; i++){
        if(i%2==0){
            string +='짝수'+'';
            number += i +'';
        }
        console.log(string);
        console.log(number);
    }
var even1 =getEven(10);


//Q2
var getStar = function (num_1){
    if (typeof num_1 !== typeof 1 ) {
        console.log("숫자만 입력 가능합니다.");
        return false;

    }
    else if (typeof num_1 === typeof 1 ) {
        var result= '';
        for (var i = 0; i < num_1; i++) {
            result += '*';
        }
        return result;
    }
}
var star1 = getStar("text");
var star2 = getStar(5);

console.log(star1);
console.log(star2); 


//Q3

var fruit = ["Apple", "Orange", "Grape", "Melon"];
fruit.unshift("Mango");
fruit.splice(3,0,"Cherry");

console.log(fruit.reverse());
// fruite.reverse();
// console.log(fruit);


//Q4

function getSize(width, height)
{
    return ("{winWidth : 윈도우 영역의 넓이값, winHeight : 윈도우 영역의 높이값}")
}

var winSize = getSize();

console.log("윈도우 콘텐츠의 영역 width : " + winSize.winWidth + " px, height : " + winSize.winHeight + " px.");
console.log(winSize);}