console.log("1번-----------");
/*1번
    getEven 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
    입력된 전달인자의 숫자를 기준으로 0부터 해당하는 수까지 짝수만 구분하여 
    아래 형식의 문자열로 반환합니다.
    even1 변수를 선언하고 getEven(10) 의 반환값을 할당받아 아래의 문자열 결과값과 같이
    console 에 출력되도록 작성합니다.
    반환 문자열 형식 : 짝수, 짝수, … 짝수, 짝수. // getEven(10) 결과 : 2, 4, 6, 8, 10. // ~~~~
       
    *교수님 0부터 해당하는 수까지라면 0도 포함하여야 하지 않나요?
    */
/*
rh : 네, 맞습니다. 좋은 질문입니다.
하지만 반환되는 형식이 위처럼 출력되게 하려면 if문을 사용하여 0 을 제외하고 처리해야 합니다.
*/

        
       function getEven() 
       {var a =10;
        var result = '';
        var or = '';
        
        //console.log(a);
        for(var i=1; i<=a; i++)//앞의 경우 5개, i=0;일땐 6개
            { 
                if (i%2==0)
                {or += '짝수';
                
                }
                if(i===10)
                {
                     or+='.';
                }
                 else if (i%2==0) 
                 {
                     or +=', ';
                 }
             }
        console.log(or);


        for(var j=1; j<=a; j++)
        { 
            if (j%2==0)
            {result +=j;
            }
            if(j===10)
                {
                    result+='.';
                }
            else if (j%2==0) 
                 {
                    result +=', ';
                 }
        }
        console.log("getEven("+a+") 결과 :"+result);
    }
    //console.log("짝수");
    getEven();



    console.log("2번-----------");
/*2번
getStar 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
입력된 전달인자가 숫자가 아닌 경우 '숫자만 입력가능합니다.’ 라는 문구가 console 에 출력되고
false 를 반환합니다.

입력된 전달인자의 숫자인 경우 전달인지의 수만큼 '*' 가 반복되는 문자열을 반환합니다.

star1 변수를 선언하고 getStar("text") 의 반환값을 할당받아 아래의 결과값과 같이 
console 에 출력되도록 작성합니다.

star2 변수를 선언하고 getStar(5) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 
console 에 출력되도록 작성합니다.
getStar("text") 결과 : false // getStar(5) 결과 : ***** // ~~~~

*******모르겠어요. 다른친구한테 배웠는데 모르겠어요.
*/


// var star1;
// var star2;
var reresult = '';
function getStar(num) 
{/*
    var num=5;
    var star1;
    var star2;
    
    
    //isNaN( num ) 이건 어케쓰는거지
    if (num === String)
    {   //console.log('test1');
        // star1 = num;
        // console.log('숫자만 입력 가능합니다.');
        // console.log('getStar("'+ star1 + '")결과 : false');
    }
    
    else if (num === Number) 
    {   //console.log('test2');
        star2 = num;
        for(var j=star2; j>=a; j--)
        {
            console.log('*');
        }
    }
    else (alert)
    {console.log('에러');}
    */

    if(typeof num === typeof 0)
    {
        for(var k =1; k<=num; k++)
        {
            reresult += '*';
        }
        return reresult;
    }
    else
    {
        console.log('숫자만 입력 가능합니다.');
        return false;
    }

}
var star1 = getStar("text");
var star2 = getStar(5);

console.log(star1);
console.log(star2);




console.log("3번-----------");
/*3번
'Apple', 'Orange', 'Grape', 'Melon' 를 요소로 가지는 fruit 라는 이름의 배열 객체를 생성합니다.
'Mango' 를 fruit 배열 객체의 앞에 추가합니다.
fruit 배열 객체의 ‘Orange' 요소 순서 뒤에 'Cherry' 요소를 추가합니다.
fruit 배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.
*/

var fruit = ['Apple', 'Orange', 'Grape', 'Melon'];
fruit.unshift('Mango');
fruit.push('Cherry');

for(var i=fruit.length-1; i>=0; i--)
{
    console.log(fruit[i]);
}

/* fruit.reverse();
    console.log(fruit); */




console.log("4번-----------");
/*4번
getSize 라는 함수를 선언합니다.
윈도우 콘텐츠 영역의 넓이값과 높이값을 아래 객체 형식과 같이 반환합니다.
winSize 변수를 선언하고 getSize() 의 반환값을 할당받습니다.
아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
객체 형식 : { winWidth : 윈도우 콘텐츠 영역의 넓이값,
            winHeight : 윈도우 콘텐츠 영역의 높이값 }
문자열 결과 : 윈도우 콘텐츠의 영역 width : ____ px,  ____ px 입니다.
*/
// var winSize_w;
// var winSize_h;
function getSize() {
    var winSize_w = window.innerWidth;
    var winSize_h = window.innerHeight;
    //????????????????내가 뭔가 잘못하고있는중이라는 강열한 느낌
   // console.log("윈도우 콘텐츠의 영역 width :" +window.innerWidth +"px, height :" +window.innerHeight +"px 입니다.");
    console.log("윈도우 콘텐츠의 영역 width :" +winSize_w +"px, height :" +winSize_h +"px 입니다.");

    var w = {
        winWidth : '__' + window.innerWidth + '__',
        winHeight : '__' + window.innerHeight + '__'
    }
    console.log(w);

    return w;
}
å
/*
rh : 객체 형식 : { winWidth : __윈도우 콘텐츠 영역의 넓이값__, winHeight : __윈도우 콘텐츠 영역의 높이값__ } 의 __윈도우 콘텐츠 영역의 넓이값__ 는 기입되는 숫자를 표시해놓은 것입니다. __ 은 삭제합니다.
{ winWidth : 1920, winHeight : 1200 } 의 형식으로 출력되어야 합니다.
*/

getSize();

// rh : js 폴더 생성하여 경로 변경하세요.