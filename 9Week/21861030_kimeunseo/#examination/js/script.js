//문제 1

alert("Hello, world!");

//문제2
var _heros = ['Iron man','Hulk','Captain Marvel'];
for(var i = 1; i < 2; i++){
    _heros.push('Doctor strange');
}
// console.log(_heros, _heros.lenght);
_heros.shift('Iron man');
// console.log(_heros,_heros.lenght);
_heros.reverse();
console.log(_heros, _heros.lenght);

//문제3

function _typeOf(a) {
    if (typeof a === "number"){
        return true;
    }else if(typeof a === "string") {
        return false;
    }
}


//문제4
var a = {
    greeting:'안녕하세요',
    myname:'김은서입니다.',
    today : '오늘은',
    month : 5,
    separate : '/',
    day : 2,
    is : '입니다.',
    luck : '행운을 빕니다.'

}
console.log(a);

//문제5
document.title = '21861030_김은서';
console.log(document.title);

//문제6

// 아래의 요건에 따라 코드를 작성합니다.
// 1) button#btn-student-number 클릭할 경우, 자신의 학번이 span#student-number 의 내부에 입력될 수 있도록 함수를 작성합니다.
// 2) button#btn-student-name 클릭할 경우, 자신의 이름이 span#student-name 의 내부에 입력될 수 있도록 함수를 작성합니다.
// 3) (1), (2) 각 클릭 리스너 호출 시 요소에 내용 입력이 완료된 후 아래 보기 문구의 경고창을 출력합니다.
var $btnStuNum = document.getElementById("button#btn-student-number");
$btnStuNum.addEventListener("click", onclickBtnStuNum); 
function onclickBtnStuNum(event) {
    var $StuNum = document.getElementById("student-number");
    $StuNum.innerHTML = "21861030";
    alert("학번이 입력되었습니다.");
}

//문제7
// 1) button#btn-odd 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
// 2) 사용자가 입력한 수를 기준으로 0부터 해당 숫자까지의 숫자 중 홀수인 숫자를 아래 보기와 같이 문자열 연산하여 결과를 div#odd-result 의 내부에 입력될 수 있도록 작성합니다.
var $btnOdd = document.getElementById("btn-odd")
$btnOdd.addEventListener("click",onClickBtnOdd);
alert("숫자를 입력해주세요.");

//문제 8번
// 1) button#btn-add-item 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
// 2) 사용자가 입력한 수만큼 새로운 li 요소를 생성하고 ul#list 의 자식 요소로 추가합니다.
// 3) (2)에 생성되는 li 요소에는 'item' 이라는 클래스 이름를 추가하고 각 요소마다 항목의 번호를 내부 문자열로 입력합니다.
// 4) (2)에 생성되는 li 요소들이 ul#list 의 자식 요소들로 추가될 때 ul#list 의 이전 내용은 모두 삭제되고나서 추가합니다.

var $btnAddItem = document.getElementById("btn-add-item")
$btnAddItem.addEventListener("click",onClickBtnAddItem);
alert('숫자를 입력해주세요.');
var $ulList = document.getElementById('list');
var $listItem1 = $ulList.firstChild;
$listItem1 = $ulList.firstElementChild;
$listItem1.innerText = "1"
$listItem2 = $ulList.firstElementChild;
$listItem2.innerText = "2"

//문제9

// //문제 10
// for(var i =0; i < max; i++){
//     for(var j = 0; j <max; j++){
//         if(condition){

//         }else{

//         }
//     }
// }
