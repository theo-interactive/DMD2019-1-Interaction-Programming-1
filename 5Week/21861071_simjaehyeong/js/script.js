//5주차 과제_21861071_심재형




// ### Quest 1.


function getEven(_number){
    var result = '';
    for(var i = 0; i <= _number; i++)
    {
        if(((i % 2) === 0) && (i > 0))
        {
            if(_number % 2 === 0)
            {
                if(i === _number){
                    result += i + '.';
                }
                else{
                    result += i + ', ';
                };
            }
            else{
                if(i === _number-1){
                    result += i + '.';
                }
                else{
                    result += i + ', ';
                };
            };
        };     
    };
    return result;
};
var even1 = getEven(10);
// > 2, 4, 6, 8, 10.

// var even1 = getEven(13);   
// > 2, 4, 6, 8, 10, 12. 홀수도 가능하다구! ^^!
console.log(even1);





// --------풀어 해석---------

/*
//getEven 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
function getEven(_number){
    //결과값을 한 줄로 받을 친구 생성.
    var result = '';
    //입력된 전달인자의 숫자를 기준으로 0부터 해당하는 수까지 불러오기.
    for(var i = 0; i <= _number; i++)
    {
        //수를 짝수 구분하는 식, i 가 0이면 나머지 0이어서 출력하니까..i는 0보다 큰 친구만
        if(((i % 2) === 0) && (i > 0))
        {
            //그 중에서도 전달인자가 짝수이면 !
            if(_number % 2 === 0)
            {
                //짝수 중 가장 큰 친구는 마침표 붙이고 나머지는 쉼표 붙이기.
                if(i === _number){
                    result += i + '.';
                }
                else{
                    result += i + ', ';
                };
            }
            //그 중에서도 전달인자가 홀수라면!
            else{
                //선별된 짝수 중 제일 큰 친구가 전달인자 - 1 의 값과 같다면 마침표 붙이고 나머지는 쉼표 붙이기..
                if(i === _number-1){
                    result += i + '.';
                }
                else{
                    result += i + ', ';
                };
            };
        };     
    };
    return result;
};
var even1 = getEven(10);
// > 2, 4, 6, 8, 10.

// var even1 = getEven(13);   
// > 2, 4, 6, 8, 10, 12. 홀수도 가능하다구! ^^!
console.log(even1);
*/



//-------------------------거쳐간 식들------------------------------------

// 짝수만 성공.
/*
var getEven = function(_number){
    var even2 = '';
    for(var i=1; i<=_number; i++){
        if((i%2) === 0){
            if(i !== _number)
            {
                even2 += i +', ';
            }else{
                even2 += i +'.';
            };
        };                             
    };
    console.log(even2);               
};
getEven(10);
//getEven(11);
*/
/*
치명적인 단점이 있다면
마지막 값과 분리를 해버려서 만약 마지막 수가 홀수라면 그대로 , 이 있는 채로 되어버린다는 것.
*/


// 홀수만 성공.
/*
var getEven = function(_number){
    var even1 = '';
    for(var i=1; i<=_number; i++){
        if((i%2) === 0)
        {
            even1 += i; 
            if(i === _number-1){
                even1 += '.';
            }
            else{
                even1 += ', ';
            };
        };              
    };
    console.log(even1);
};
getEven(13);
*/







// ### Quest 2.


//1. 값을 result가 다 받기.
var getStar = function(_num2){
    var result = '';
    if(typeof _num2 === typeof 1)
    //if(typeof _num2 === Number){}; > 이건 실행이 죽어도 안됐는데!
    //console.log(typeof Number); > 했을 때 출력값이 function이 나와서 아 그렇구나 ! 실행 불가 납득함..
    {
        for(var i=0; i<_num2; i++)
        {
            result += '*';
        };
    }else{
        console.log('숫자만 입력가능합니다.');
        // > 숫자만 입력가능합니다.
        result = Boolean(0);
    };
    return result;
};
var star1 = getStar("text");
var star2 = getStar(5);

console.log(star1);
// > false
console.log(star2);
// > *****


//2. star1, star2 각각에 값 줘서 리턴하기
/*
var getStar = function(_num2){
    var star1 = '';
    var star2 = '';
    if(typeof _num2 === typeof 1)
    {
        for(var i=0; i<_num2; i++)
        {
            star1 += '*';
        };
        return star1;
    }else{
        console.log('숫자만 입력가능합니다.');
        star2 = Boolean(0);
        return star2;
    };
};
var star1 = getStar("text");
var star2 = getStar(5);

console.log(star1);
console.log(star2);
*/







// ### Quest 3.


var _fruit =['Apple', 'Orange', 'Grape', 'Melon'];
//console.log(_fruit);
// > ["Apple", "Orange", "Grape", "Melon"]

_fruit.unshift('Mango');
//console.log(_fruit);
// > ["Mango", "Apple", "Orange", "Grape", "Melon"]

_fruit.splice(3, 0, 'Cherry');
//console.log(_fruit);
// > ["Mango", "Apple", "Orange", "Cherry", "Grape", "Melon"]

_fruit.reverse();
console.log(_fruit);
// > ["Melon", "Grape", "Cherry", "Orange", "Apple", "Mango"]







// ### Quest 4.


function getSize(){
    return { winWidth : window.innerWidth , winHeight : window.innerHeight };
};
var winSize = getSize();
console.log("윈도우 콘텐츠의 영역 width : " + winSize.winWidth + " px, height : " + winSize.winHeight + " px 입니다.");
// > 윈도우 콘텐츠의 영역 width : ~ px, height : ~ px 입니다.

