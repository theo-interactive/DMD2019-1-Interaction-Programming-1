// Q1. 문서의 title을 '학번 _이름'으로 변경합니다.

console.log(document.title);
document.title = "21561022_김성욱";

// Q2. id가 'title'인 요소에 'Hello World' 문자열이 포함되도록 작성합니다. PASS
// Q3. class가 'title'인 요소에 '안녕하세요.' 문자열이 포함되도록 작성합니다. PASS

// Q4. 1. getRowCount 이라는 함수를 선언합니다.
//     2. 'row' 라는 이름을 가진 class를 찾고 요소의 개수를 반환합니다.
//     3. rowCount 변수를 선언하고 getRowCount() 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다. 
//         -> 문자열 결과 : row class의 개수는 __개 입니다.

var getRowCount = function() // getRowCount 함수를 만들어주고
{
    var row = document.getElementsByClassName('row'); // row라는 이름을 가진 class를 찾고
    return row.length; // 요소의 갯수를 반환한다.
}
var rowCount = getRowCount(); // rowCount 변수를 선언하고
console.log('row class의 개수는'+rowCount+'개 입니다.'); 
// getRowCount()의 반환값을 할당받아 아래의 문자열 결과값과 같이 작성했다.

// Q5. 1. 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
//     2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
//     3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
var count = 0; // 초 마다 니까 0으로 기준을 잡고
var timer = setInterval(function(){
    count++; // 초마다 증가
    console.log(count+'번'); // 몇번의 출력이 되고있는지
    if(count == 10){
        clearInterval(timer);}
},100); // 


// Q8. 1. enterName 이라는 함수를 선언합니다.
//     2. '이름을 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
//     3. 사용자가 다이얼로그창의 취소를 클릭한 경우(null), '입력이 취소되었습니다.' 라는 문구를 console 에 출력되도록 작성합니다.
//     4. 사용자가 다이얼로그창에 문자를 입력하지 않고 확인을 클릭할 경우(string), '이름을 정확히 입력해주세요.' 라는 문구의 경고창을 띄웁니다.
//     5. (4) 경우에서 경고창을 확인하면 enterName 함수를 다시 호출합니다.
//     6. 사용자가 문자 단어 하나라도 입력하고 확인을 클릭한 경우(string), 입력된 사항을 body(화면)의 마지막 부분에 출력합니다.
//     7. enterName 함수를 호출합니다.

var enterName = function()
{
    prompt("이름을 입력해주세요.");
    var name = prompt("이름을 입력해주세요.");
    if(name !== null){
        //OK를 누른 상태.
        if(name === ''){
            console.log('이름을 정확히 입력해주세요.');
            // 아무것도 입력안한 상태
        }
        else{
            console.log(name);
        // 이름을 입력한 상태
        }
    }
    else{
            console.log('입력이 취소되었습니다.');
    } // 취소를 누른 상태
    document.write(name);
}
enterName();