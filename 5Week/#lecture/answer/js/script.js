/*
1. getEven 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
2. 입력된 전달인자의 숫자를 기준으로 0부터 해당하는 수까지 짝수만 구분하여 아래 형식의 문자열로 반환합니다.
3. even1 변수를 선언하고 getEven(10) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
    -> 반환 문자열 형식 : 짝수, 짝수, … 짝수, 짝수.
    -> getEven(10) 결과 : 2, 4, 6, 8, 10.

*/
//선언식.
//짝수의 값만 가져오기.
var getEven = function(_number) {
    var result = '';
    for(var i = 0; i <= _number; i++){
        if(i > 0){
            if(i % 2 === 0){ //짝수와 홀수 구분하는 방법. 
                //짝수.
                if(result !== ''){
                    result += ', ';
                }
                result += i;
            }else{
                //i % 2 = 1.
                //홀수.
            }
            // if(i === _number){
            //     result += '.';
            // }
        }
    }
    result += '.';
    //결과값 반환.
    return result;
}
//홀수의 값만 가져오기.
var getOdd = function(_number) {
    var result = '';
    for(var i = 0; i <= _number; i++) {
        if(i > 0){
            if(i % 2 === 1){
                //홀수.
                if(result !== ''){
                    result += ', ';
                }
                result += i;
            }
        }
    }
    result += '.';
    return result;
}
var even1 = getEven(10);
console.log(even1);
var even2 = getEven(30);
console.log(even2);
var odd1 = getOdd(11);
console.log(odd1);
//===
/*
function getEven(_number) {
}
*/

/*
1. getStar 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
2. 입력된 전달인자가 숫자가 아닌 경우 '숫자만 입력가능합니다.' 라는 문구가 console 에 출력되고 false 를 반환합니다.
3. 입력된 전달인자가 숫자인 경우 전달인자의 수만큼 '*' 가 반복되는 문자열을 반환합니다.
4. star1 변수를 선언하고 getStar("text") 의 반환값을 할당받아 아래의 결과값과 같이 console 에 출력되도록 작성합니다.
5. star2 변수를 선언하고 getStar(5) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
    -> getStar("text") 결과 : false
    -> getStar(5) 결과 : *****
*/
var getStar = function(_number) {
    if(typeof _number !== 'number'){
        console.log('숫자만 입력가능합니다.');
        return false;
        //함수 반환이 되면 뒤에 오는 코드 구문은 무시된다. 실행이 안됨.
    }
    var result = '';
    for(var i = 0; i < _number; i++){
        result += '*';
    }
    return result;
}
var star1 = getStar("text");
console.log(star1);
var star2 = getStar(5);
//*****
console.log(star2);

/*

*
**
***
****
*****

*/
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


/*
1. 'Apple', 'Orange', 'Grape', 'Melon' 를 요소로 가지는 fruit 라는 이름의 배열 객체를 생성합니다.
2. 'Mango' 를 fruit 배열 객체의 앞에 추가합니다.
3. fruit 배열 객체의 ‘Orange' 요소 순서 뒤에 'Cherry' 요소를 추가합니다.
4. fruit 배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.
*/
var fruit = ['Apple', 'Orange', 'Grape', 'Melon'];
fruit.unshift('Mango');
// console.log(fruit);
fruit.splice(3, 0, 'Cherry');
// console.log(fruit);
fruit.reverse();
console.log(fruit);


/*
1. getSize 라는 함수를 선언합니다.
2. 윈도우 콘텐츠 영역의 넓이값과 높이값을 아래 객체 형식과 같이 반환합니다.
3. winSize 변수를 선언하고 getSize() 의 반환값을 할당받습니다.
4. 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
    -> 객체 형식 : { winWidth : __윈도우 콘텐츠 영역의 넓이값__, winHeight : __윈도우 콘텐츠 영역의 높이값__ }
    -> 문자열 결과 : 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.
*/
var getSize = function() {
    var width = window.innerWidth, height = window.innerHeight;
    return {
        winWidth : width,
        winHeight : height
    }
}
var winSize = getSize();
// console.log(winSize);
var result = '윈도우 콘텐츠의 영역 width : ' + winSize['winWidth'] + ' px, height : ' + winSize.winHeight + ' px 입니다.'; 
console.log(result);
var getSizeArray = function() {
    var width = window.innerWidth, height = window.innerHeight;
    return [width, height];
}
winSize = getSizeArray();
result = '윈도우 콘텐츠의 영역 width : ' + winSize[0] + ' px, height : ' + winSize[1] + ' px 입니다.'; 
console.log(result);