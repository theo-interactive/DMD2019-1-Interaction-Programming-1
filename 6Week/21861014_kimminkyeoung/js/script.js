/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
console.log(document.title);
document.title = '21861014_김민경';
console.log(document.title);


/*
Quest 4.
1. getRowCount 이라는 함수를 선언합니다.
2. 'row' 라는 이름을 가진 class 를 찾고 요소의 개수를 반환합니다.
3. rowCount 변수를 선언하고 getRowCount() 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다. 
    -> 문자열 결과 : row class의 개수는 __개 입니다.
*/
function getRowCount (){
    var row = document.getElementsByClassName('row');
    var text = "row class의 개수는 " + row.length + " 개 입니다."
    return text;

}
var rowCount = getRowCount();
console.log(rowCount);


/*
Quest 5.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 / 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/

/*
1번째 방법
var count = 0;
var timer = setInterval(
    function() {
        count++;
        console.log("hello " + count);

        if(count == 10){
            clearInterval(timer);
        }
    },1000);
*/

// 2번째 방법
var count = 0;
function timer(){
    count ++;
    console.log("hello " + count);

    if(count === 10){
        clearInterval(countdown);
    }
}
var countdown = setInterval(timer,1000);


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
    if (name == null){
        return "입력이 취소 되었습니다.";
    }
    else{
        if(name === ''){
            alert("이름을 정확히 입력해주세요.");
            return enterName();
        }
        else{
            var result = document.write(name);
            return result;
        }
    }
}
var functionName = enterName();
console.log(functionName);
