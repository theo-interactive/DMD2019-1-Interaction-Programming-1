
//교수님 도저히 retrun값을 어디어 써야하는지 모르겠어요,,,,,,




/*Quest 1
1.getEven 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
2.입력된 전달인자의 숫자를 기준으로 0부터 해당하는 수까지 짝수만 구분하여 아래 형식의 문자열로 반환합니다.
3.even1 변수를 선언하고 getEven(10) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다. 
// ~~~~ // 반환 문자열 형식 : 짝수, 짝수, … 짝수, 짝수. // getEven(10) 결과 : 2, 4, 6, 8, 10. // ~~~~*/
var string = "";
var number = '';
function getEven(num){
    for(var i = 0; i <= num; i++){ //i가 0부터 해당수 전까지  
        if(i % 2 === 0){
            string += '짝수' + ' ';
            number += i + ' ';
        }
    }  
    console.log(string);
    console.log(number);
}  

var even1 = getEven(10);
console.log(even1);

/*Quest 2
1.getStar 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
2.입력된 전달인자가 숫자가 아닌 경우 '숫자만 입력가능합니다.’ 라는 문구가 console 에 출력되고 false 를 반환합니다.
3.입력된 전달인자의 숫자인 경우 전달인지의 수만큼 '*' 가 반복되는 문자열을 반환합니다.
4.star1 변수를 선언하고 getStar("text") 의 반환값을 할당받아 아래의 결과값과 같이 console 에 출력되도록 작성합니다.
5.star2 변수를 선언하고 getStar(5) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다. 
// ~~~~ // getStar("text") 결과 : false // getStar(5) 결과 : ***** // ~~~~*/


function getstar(num_1){

    if(typeof num_1 !== typeof 1){
        console.log('숫자만 입력가능합니다')
        return false;
    }
    else if(typeof num_1 === typeof 1){
        var result = '';
        for(var i = 0; i < num_1; i++){
            result = result + "*";
        }
        return result;
    }
    
}

var star1 = getstar("text")
var star2 = getstar(5)

console.log(star1);
console.log(star2);

/*Quest 3
1. 'Apple', 'Orange', 'Grape', 'Melon' 를 요소로 가지는 fruit 라는 이름의 배열 객체를 생성합니다.
2. 'Mango' 를 fruit 배열 객체의 앞에 추가합니다.
3. fruit 배열 객체의 ‘Orange' 요소 순서 뒤에 'Cherry' 요소를 추가합니다.
4. fruit 배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.*/

var fruit =['Apple', 'Orange', 'Grape', 'Melon'];
console.log(fruit);

fruit.unshift('Mango');
console.log(fruit);

fruit.splice(3, 0, 'Cherry');
console.log(fruit);

fruit.reverse();
console.log(fruit);


/*Quest 4
getSize 라는 함수를 선언합니다.
윈도우 콘텐츠 영역의 넓이값과 높이값을 아래 객체 형식과 같이 반환합니다.
winSize 변수를 선언하고 getSize() 의 반환값을 할당받습니다.
아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다. 
// ~~~~ // 
객체 형식 : { winWidth : 윈도우 콘텐츠 영역의 넓이값, winHeight : 윈도우 콘텐츠 영역의 높이값 } // 
문자열 결과 : 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다. // ~~~~*/

function getSize(width, height){
    return ["{ winWidth : 윈도우 콘텐츠 영역의 넓이값, winHeight : 윈도우 콘텐츠 영역의 높이값 }"];
}

var winSize = getSize();
console.log(winSize);
console.log("윈도우 콘텐츠의 영역 width :" + window.innerWidth + "px, height : " + window.innerHeight + "px 입니다.")
