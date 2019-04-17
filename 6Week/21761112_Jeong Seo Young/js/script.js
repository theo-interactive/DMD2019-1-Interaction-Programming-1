    
/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/

document.title = "21761112_정서영";



/*
Quest 2.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/

var id = document.getElementById('title')


/*
Quest 3.
1. class 가 'title' 인 요소에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/

document.getElementsByClassName('title'); 

/*
Quest 4.
1. getRowCount 이라는 함수를 선언합니다.
2. 'row' 라는 이름을 가진 class 를 찾고 요소의 개수를 반환합니다.
3. rowCount 변수를 선언하고 getRowCount() 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다. 
    -> 문자열 결과 : row class의 개수는 __개 입니다.
*/

 function getRowCount(){
   var row = document.getElementsByClassName('row');
   return  row.length;
  
 }
 var rowCount = getRowCount();
 console.log('row class의 개수는'+rowCount+'개 입니다.');

/*
Quest 5.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
 
    var count=1;
    var timer=setInterval(function() { 
     console.log('hello '+ count +"번");
     count++;
     if(count == 11){
         clearInterval(timer);
     }
    },1000);
  
    
    

/*
/*
Quest 6.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/
var scroll = document.getElementById('scroll')


/*
Quest 7.
1. id 가 'article' 인 요소를 찾습니다.
2. 1 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/
var article = document.getElementById('article')

/*
Quest 8.
1. enterName 이라는 함수를 선언합니다.
2. '이름을 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 다이얼로그창의 취소를 클릭한 경우(null), '입력이 취소되었습니다.' 라는 문구를 console 에 출력되도록 작성합니다.
4. 사용자가 다이얼로그창에 문자를 입력하지 않고 확인을 클릭할 경우(string), '이름을 정확히 입력해주세요.' 라는 문구의 경고창을 띄웁니다.
5. 4 경우에서 경고창을 확인하면 enterName 함수를 다시 호출합니다.
6. 사용자가 문자 단어 하나라도 입력하고 확인을 클릭한 경우(string), 입력된 사항을 body(화면)의 마지막 부분에 출력합니다.
7. enterName 함수를 호출합니다.
*/

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

