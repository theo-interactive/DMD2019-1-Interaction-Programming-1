//5주차 과제입니다.
/*
### Quest 1.
1) getEven 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
2) 입력된 전달인자의 숫자를 기준으로 0부터 해당하는 수까지 짝수만 구분하여 아래 형식의 문자열로 반환합니다.
3) even1 변수를 선언하고 getEven(10) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
반환 문자열 형식 : 짝수, 짝수, … 짝수, 짝수.
getEven(10) 결과 : 2, 4, 6, 8, 10.
```
*/
var a = "";
var b = "";
function getEven(_nunmber){
    for(i = 1; i <=_nunmber; i++){
        if(i%2==0)
        {        
        a += "짝수";  
        }
        if (i === 10)
        {
            b += i + ".";
        }
        else if(i%2 == 0)
        {
            b += i+',';        
        }
    }
    console.log(a + "");
    console.log(b + "");
}
var even1 = getEven(10)

/*
### Quest 2.
1) getStar 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
2) 입력된 전달인자가 숫자가 아닌 경우 실행되지 않고 '숫자만 입력가능합니다.' 문구 포함된 경고창 출력 후 false 를 반환합니다.
3) 입력된 전달인자의 숫자만큼 '*' 가 반복되는 문자열을 반환합니다.
4) star1 변수를 선언하고 getStar("text") 의 반환값을 할당받아 아래의 Boolean 결과값과 같이 console 에 출력되도록 작성합니다.
4) star2 변수를 선언하고 getStar(5) 의 반환값을 할당받아 아래의 String 결과값과 같이 console 에 출력되도록 작성합니다.
// ~~~~
// getStar("text") 결과 : false
// getStar(5) 결과 : *****
// ~~~~
*/

/*
getStar = function(_number2){
        if(typeof _number2 === typeof 1){
            for(var i = _number2.length - 1; i >= 0; i--){
                result = '*';
            }
         
            
console.log()
/*
//교수님 죄송해요 ,.. 정말 모르겠어요 ㅠㅠ ,.. ! 

### Quest 3.
1) 'Apple', 'Orange', 'Grape', 'Melon' 를 요소로 가지는 fruit 라는 이름의 배열(Array) 객체를 생성합니다.
2) 'Mango' 를 fruit 배열 객체의 앞에 추가합니다.
3) fruit 배열 객체의 'Orange' 순서 뒤에 'Cherry' 요소를 추가합니다.
4) fruit 배열 객체의 요소 순서를 반대로 변경 후 console 창에 배열을 출력합니다.
*/

var fruit = ['Apple', 'Orange', 'Grape', 'Melon'];
fruit.unshift('Mango');
fruit.splice(2, 0, 'Cherry');
fruit.reverse();
console.log(fruit);


/*
### Quest 4.
1) getSize 라는 함수를 선언합니다.
2) 윈도우 콘텐츠 영역의 넓이값과 높이값을 아래 Object 형식과 같이 반환합니다.
3) winSize 변수를 선언하고 getSize() 의 반환을 할당받습니다.
4) 아래의 String 결과값과 같이 console 에 출력되도록 작성합니다.
// ~~~~
// Object 형식 : { winWidth : __윈도우 콘텐츠 영역의 넓이값__, winHeight : __윈도우 콘텐츠 영역의 높이값__ }
// String 결과 : 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px
// ~~~~
*/


function getSize(Width, Height){
    return "{ winWidth : 윈도우 영역의 넓이값, winHeight : 윈도우 영역의 높이값 }"
}
winSize = getSize();
console.log("윈도우 콘텐츠의 영역 width :" + window.innerWidth + "px, height : " + window.innerHeight + "px") 

