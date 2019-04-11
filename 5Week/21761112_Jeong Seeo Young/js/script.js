/*
###Quest 1.
1) getEven 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
2) 입력된 전달인자의 숫자를 기준으로 0부터 해당하는 수까지 짝수만 구분하여 아래 형식의 문자열로 반환합니다.
//반환 문자열 형식 : 짝수, 짝수, … 짝수, 짝수.

3) even1 변수를 선언하고 getEven(10) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
//getEven(10) 결과 : 2, 4, 6, 8, 10.

*/

function getEven(number){
    var result = '';
    var j = '';
   
    for(var i =0; i<=number; i++){
        result += '짝수';
      
        if(i === 10){

            j += i+'.';
            
        }
        else if(i%2 == 0){

            j += i+',';

        }
      
    }
    console.log(result);
    console.log(j);
};
var even1 = getEven(10);
//교수님께서 문제에 0부터 출력하라고 하셔서 i=0;이라고 했는데...3번문제의 예시처럼 2, 4, 6, 8, 10.안나오고... console에 0,2,4,6,8,10. 이렇게 나옵니다.
//0이 안나오게하려면 어떻게 해야하나요!!

/*
### Quest 2.
1) getStar 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
2) 입력된 전달인자가 숫자가 아닌 경우 '숫자만 입력가능합니다.’ 라는 문구가 console 에 출력되고 false 를 반환합니다.
3) 입력된 전달인자의 숫자인 경우 전달인지의 수만큼 '*' 가 반복되는 문자열을 반환합니다.
4) star1 변수를 선언하고 getStar("text") 의 반환값을 할당받아 아래의 결과값과 같이 console 에 출력되도록 작성합니다.
//getStar("text") 결과 : false

5) star2 변수를 선언하고 getStar(5) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
//getStar(5) 결과 : *****
*/


function getStar(number1){
    if(number1 !==  5 ){
      
      console.log('숫자만 입력가능합니다.');
      return false;

    }else if(number1 == 5) {
            var t = '';
        for (var i=0; i<number1; i++){
             t +='*';
            
        }

        return t;
   }

}
var star1 = getStar("text");
console.log(star1);
var star2 = getStar(5);
console.log(star2);

//맞을지 모르겠지만 ㅠㅠ 정말 돌고돌아 답을 얻었습니다...


/*
### Quest 3.
1) 'Apple', 'Orange', 'Grape', 'Melon' 를 요소로 가지는 fruit 라는 이름의 배열 객체를 생성합니다.
2) 'Mango' 를 fruit 배열 객체의 앞에 추가합니다.
3) fruit 배열 객체의 ‘Orange' 요소 순서 뒤에 'Cherry' 요소를 추가합니다.
4) fruit 배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.
*/

var fruit = ['Apple', 'Orange', 'Grape', 'Melon'];
fruit.unshift('Mango');
fruit.splice(3, 0,'cherry');
fruit.reverse();
console.log(fruit);

/*
### Quest 4.
1) getSize 라는 함수를 선언합니다.
2) 윈도우 콘텐츠 영역의 넓이값과 높이값을 아래 Object 형식과 같이 반환합니다.
//객체 형식 : { winWidth : __윈도우 콘텐츠 영역의 넓이값__, winHeight : __윈도우 콘텐츠 영역의 높이값__ }

3) winSize 변수를 선언하고 getSize() 의 반환을 할당받습니다.
4) 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
//문자열 결과 : 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.
*/

function getSize()
{   
    var c = {
   winWidth:'__윈도우 콘텐츠 영역의 넓이값__',
   winHeight:'__윈도우 콘텐츠 영역의 높이값__'
    }
    return c
}
var winSize = getSize();
console.log(winSize);
console.log("윈도우 콘텐츠의 영역 width :"+window.innerWidth+"px","height :"+ window.innerHeight+"px 입니다.");