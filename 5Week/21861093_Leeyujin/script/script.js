/*Q. 1
getEven 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
입력된 전달인자의 숫자를 기준으로 0부터 해당하는 수까지 짝수만 구분하여 아래 형식의 문자열로 반환합니다.
even1 변수를 선언하고 getEven(10) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다. // ~~~~ // 반환 문자열 형식 : 짝수, 짝수, … 짝수, 짝수. // getEven(10) 결과 : 2, 4, 6, 8, 10. // ~~~~*/
var getEven = function(_int){
    for(var i=1; i<=10; i++){
        if(i%2==0){
            console.log(i);
        }
    }
}; getEven(10);
/*Q. 2
getStar 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
입력된 전달인자가 숫자가 아닌 경우 '숫자만 입력가능합니다.’ 라는 문구가 console 에 출력되고 false 를 반환합니다.
입력된 전달인자의 숫자인 경우 전달인지의 수만큼 '*' 가 반복되는 문자열을 반환합니다.
star1 변수를 선언하고 getStar("text") 의 반환값을 할당받아 아래의 결과값과 같이 console 에 출력되도록 작성합니다.
star2 변수를 선언하고 getStar(5) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다. 
// ~~~~ // getStar("text") 결과 : false // getStar(5) 결과 : ***** // ~~~~*/ 


/*var _star1 = "텍스트";
var _star2 = 5;*/
/*var a = 1;
var getStar = function(_star1,_star2){
        for(var i=0; i<=5; i++){
            if(a === "1"){
                console.log("1"=== 1 + "숫자만 입력 가능합니다.");
            }else{
                console.log("*");
        }
    }; getStar(1,"1");
}*/
//abc=text형식
//abc=5

function getStar(abc){
    if(typeof abc === typeof 1){
        var result = '';
        for(var i=1; i<=abc; i++)
        result += "*";
        return result;
    }else{
        console.log("숫자만 입력 가능합니다.");
        return false;
    }
}
var star1 = getStar("text");
var star2 = getStar(5);
console.log(star1);
console.log(star2);
/*var star1 = getStar("text"); 의 텍스트가 제일 상단의 abc에 올라가고 */

/*Q.3 
'Apple', 'Orange', 'Grape', 'Melon' 를 요소로 가지는 fruit 라는 이름의 배열 객체를 생성합니다.
'Mango' 를 fruit 배열 객체의 앞에 추가합니다.
fruit 배열 객체의 ‘Orange' 요소 순서 뒤에 'Cherry' 요소를 추가합니다.
fruit 배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.*/
var fruit = ['Apple','Orange', 'Grape', 'Melon'];
fruit.unshift('Mango');
console.log(fruit, fruit.length);
fruit.splice(3,0,'Cherry');
console.log(fruit, fruit.length);
fruit.reverse();
console.log(fruit, fruit.length);

/*Q.4
getSize 라는 함수를 선언합니다.
윈도우 콘텐츠 영역의 넓이값과 높이값을 아래 객체 형식과 같이 반환합니다.
winSize 변수를 선언하고 getSize() 의 반환값을 할당받습니다.
아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.*/

//var getSize = function(winSize){}
console.log(window.innerWidth, window.innerHeight);


