// Q.01
// 1) getEven 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
// 2) 입력된 전달인자의 숫자를 기준으로 0부터 해당하는 수까지 짝수만 구분하여 아래 형식의 문자열로 반환합니다.
// 3) even1 변수를 선언하고 getEven(10) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.

var result = '';
var result2 = '';
function getEven(num){
    for(var i = 1; i <= num; i++){
        if(i % 2 == 0){
            result += '짝수' + ' ';
            result2 += i + ' ';
        } 
    }
    console.log(result);
    console.log(result2);
}
var even1 = getEven(10);






// Q.02
// 1) getStar 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
// 2) 입력된 전달인자가 숫자가 아닌 경우 '숫자만 입력가능합니다.’ 라는 문구가 console 에 출력되고 false 를 반환합니다.
// 3) 입력된 전달인자의 숫자인 경우 전달인지의 수만큼 '*' 가 반복되는 문자열을 반환합니다.
// 4) star1 변수를 선언하고 getStar("text") 의 반환값을 할당받아 아래의 결과값과 같이 console 에 출력되도록 작성합니다.
// 5) star2 변수를 선언하고 getStar(5) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
var result2 = '';
function getStar(number){
        if(typeof number === typeof 1){
            for(var j = 1; j <= number; j++){
                result2 += '*';
            }
            return result2;   
        }
        else {
            console.log("숫자만 입력 가능합니다.")
            return false;
        }
}
var star1 = getStar("text");
var star2 = getStar(5);

console.log(star1);
console.log(star2);



// getStar("text") 결과 : false
// getStar(5) 결과 : *****







// Q.03
// 1) 'Apple', 'Orange', 'Grape', 'Melon' 를 요소로 가지는 fruit 라는 이름의 배열 객체를 생성합니다.
// 2) 'Mango' 를 fruit 배열 객체의 앞에 추가합니다.
// 3) fruit 배열 객체의 ‘Orange' 요소 순서 뒤에 'Cherry' 요소를 추가합니다.
// 4) fruit 배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.
var fruit = ['Apple', 'Orange', 'Grape', 'Melon']
// 2
fruit.unshift('Mango');
console.log(fruit);

// 3
fruit.splice(3,0,'Cherry');
console.log(fruit);

//4
fruit.reverse();
console.log(fruit);









// Q.04
// 1) getSize 라는 함수를 선언합니다.
// 2) 윈도우 콘텐츠 영역의 넓이값과 높이값을 아래 객체 형식과 같이 반환합니다.
// 3) winSize 변수를 선언하고 getSize() 의 반환값을 할당받습니다.
// 4) 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
function getSize(){
    var win1 = "윈도우 콘텐츠의 영역 width : " + window.innerWidth + "px , height" + window.innerHeight + 'px 입니다.';
    console.log(win1);
    var win = {
        winWidth : '__' + window.innerWidth + '__',
        winHeight : '__' + window.innerHeight + '__'
    }
    console.log(win);

    return win;

}
/*
rh : 객체 형식 : { winWidth : __윈도우 콘텐츠 영역의 넓이값__, winHeight : __윈도우 콘텐츠 영역의 높이값__ } 의 __윈도우 콘텐츠 영역의 넓이값__ 는 기입되는 숫자를 표시해놓은 것입니다. __ 은 삭제합니다.
{ winWidth : 1920, winHeight : 1200 } 의 형식으로 출력되어야 합니다.
*/

var winSize = getSize();


// 객체 형식 : { winWidth : __윈도우 콘텐츠 영역의 넓이값__, winHeight : __윈도우 콘텐츠 영역의 높이값__ }
// 문자열 결과 : 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.



/* 교수님.. 아직 return 에 대한 개념이 잘 안 잡힌것 같습니다.. ㅠ
  하나의 값을 반환할때는 return을 사용하는 법을 알겠는데 두개이상의 값을 반환할경우
  return을 두개 사용할 수도 없고 return에 두개의 값을 넣어줄 수도 없고,,,
  하나는 console 하나는 return으로 값을 넣어주면 return값은 또 안나오구요.. ㅠ 
  */

/*
rh : 두개 이상의 값을 반환하려면 배열이나 객체로 반환해야 합니다. 
현재 getSize() 에서 반환받은 값을 출력하려면 객체가 반환되었기 때문에 해당 색인에 해당하는 요소를 찾아주면 됩니다.
*/
console.log(winSize.winWidth, winSize.winHeight);


// rh : js 폴더 생성하여 경로 변경하세요. index.html 에서 경로도 확인합니다.