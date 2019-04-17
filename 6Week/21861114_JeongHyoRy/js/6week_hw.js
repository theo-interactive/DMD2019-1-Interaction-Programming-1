//Q1. 문서의 title을 '학번_이름' 으로 변경합니다.

console.log(document.title);
document.title = "21861114_정효리"; 

//Q4. getRowCount 이라는 함수를 선언합니다.
//'row' 라는 이름을 가진 class 를 찾고 요소의 개수를 반환합니다.
//rowCount 변수를 선언하고 getRowCount() 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
//문자열 결과 : row class의 개수는 __개 입니다.
function getRowCount(){
    var rowcount = document.getElementsByClassName('row');
    return rowcount.length;
   
  }
  var rowCount= getRowCount();
  console.log('row class의 개수는'+ rowCount +'개 입니다.');

/* Q5. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다. */

var count = 1;
var timer = setInterval(function(){
    console.log('hello ' + count + '번');
    count++;
    if(count == 11){
        clearInterval(timer);  
    }
}, 1000);


/*Q8. enterName 이라는 함수를 선언합니다.
'이름을 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
사용자가 다이얼로그창의 취소를 클릭한 경우(null), '입력이 취소되었습니다.' 라는 문구를 console 에 출력되도록 작성합니다.
사용자가 다이얼로그창에 문자를 입력하지 않고 확인을 클릭할 경우(string), '이름을 정확히 입력해주세요.' 라는 문구의 경고창을 띄웁니다.
(4) 경우에서 경고창을 확인하면 enterName 함수를 다시 호출합니다.
사용자가 문자 단어 하나라도 입력하고 확인을 클릭한 경우(string), 입력된 사항을 body(화면)의 마지막 부분에 출력합니다.
enterName 함수를 호출합니다. */

function enterName(){
    var name = prompt("이름을 입력해주세요.");
if(name !== null) {
    
    if(name == '' ) {
        console.log(name);
        alert('이름을 정확히 입력해주세요.')
        enterName();
    }
    else{
        document.write(name);
    }
   
    }
    else{
        console.log(name);
        console.log('입력이 취소되었습니다.');
    }            
}
enterName()