//console.log("연결");
/*Quest 1.
1.문서의 title을 '학번_이름' 으로 변경합니다.*/
console.log(document);
console.log(document.title);
document.title = "21861093_이유진";

/*Quest 4.
1.getRowCount 이라는 함수를 선언합니다.
2.'row' 라는 이름을 가진 class 를 찾고 요소의 개수를 반환합니다.
3.rowCount 변수를 선언하고 getRowCount() 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
*/
//문자열 결과 : row class의 개수는 __개 입니다.

function getRowCount(){ //함수 선언하심
    var row = document.getElementsByClassName("row");//getElementsByClassName얘는 row라는 class명을 알려주는 요소일뿐 갯수까지 세지 못한다. 아 그래서 row 라는class명을 가진 애들을 변수에 넣어준다. 그래야 갯수 샐수있음
    return row; //클래스 명이 row인 애들을 반환해줌
}//getRowCount('row');
var rowCount = getRowCount(); //함수 실행해줌 겟로우카운트 안에 있던 로우가 반환됨
console.log("row class의 개수는"+rowCount.length+"개 입니다."); // length 붙여야 갯수 세짐


//var abc = getRowCount("row")
//getRowCount("class")

//function getRowCount();
//console.log(rowCount);
//document.getElementsByClassName('row');
//console.log(row);
//console.log(row[1]);
//var rowCount = getRowCount();
//console.log(rowCount);

/*Quest 5.
1.1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2.전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3.10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
var count = 0;
var timer = setInterval(function(){ // setInterval 타이머 함수다
    //count++ 카운트가 계속 늘어남
    //console.log(count); 콘솔창에 카운트를 찍어낸다.
    //if(count === 10){
    //   clearInteval(timer); (이거 자체가 실행명령어임)  
    //}이런 방법도 있음 이거는 쭉 새다가 10되면 멈추라 라는거다.
    if(count < 10){ 
        count++
        console.log(count);
    }
},1000);
/*Quest 8.
1.enterName 이라는 함수를 선언합니다.
2.'이름을 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3.사용자가 다이얼로그창의 취소를 클릭한 경우(null), '입력이 취소되었습니다.' 라는 문구를 console 에 출력되도록 작성합니다.
4.사용자가 다이얼로그창에 문자를 입력하지 않고 확인을 클릭할 경우(string), '이름을 정확히 입력해주세요.' 라는 문구의 경고창을 띄웁니다.
5.(4) 경우에서 경고창을 확인하면 enterName 함수를 다시 호출합니다.
6.사용자가 문자 단어 하나라도 입력하고 확인을 클릭한 경우(string), 입력된 사항을 body(화면)의 마지막 부분에 출력합니다.
7.enterName 함수를 호출합니다.
*/
var enterName =  function(){
    //window.prompt('이름을 입력해주세요');
    var name = prompt('이름을 입력해주세요');
    //console.log(name);//함수선언 괄호 밖에 해야 작동함
    if(name !== null){//이름을 안썼다는 말임
        if(name === ''){//이름을 안썼지만 확인버튼을 눌렀을경우
            
            //console.log('이름을 정확히 입력해주세요.')
            alert("이름을 정확히 입력해주세요.");//경고창임
            enterName();//함수를 재 선언해서 입력창이 계속 뜰수있게 만들어줌
            
        }else{//이름도 쓰고 확인을 했을경우
            console.log(name);
            document.write(name);//document.write 얘는 body맨 하단에 다이얼로그 창에 작성된 애를 적어라
        }
    }else{//이름도 안쓰고 취소 눌렀을경우
            console.log('입력이 취소되었습니다.')
        }
}
enterName();
//window.prompt('');
//var name = prompt('이름을 입력해주세요');

//공부하기위한 저의 혼자말 .. 이해해주세요 ..