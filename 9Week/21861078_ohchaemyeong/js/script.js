//1번문제
alert("hello, world!");


/*2번문제
아래 보기의 배열(Array) 객체 값을 할당하는 변수를 생성합니다.
'Doctor Strange' 문자열 값을 (1)배열 객체의 마지막 부분에 추가합니다.
(1)배열 객체의 뒤에서 두번째 요소 값을 'Captain Marvel' 문자열 값으로 변경합니다.
(1)배열 객체의 첫번째 요소를 삭제합니다.
(1)배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.
*/

array = ['Iron Man', 'Captain America', 'Hulk', 'Thor', 'Spider-Man'];
array.push('Doctor Strange');
array.splice(4,1,'Captain Marvel');
array.shift();
array.reverse();
console.log(array);

/*3번문제 
입력된 전달인자가 숫자(Number) 타입인 경우 true, 문자(String) 타입인 경우 false 를 반환하는 함수를 작성합니다.
결과 변수1을 생성하여 (1)함수의 전달인자로 숫자를 기입하여 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.
결과 변수2를 생성하여 (1)함수의 전달인자로 문자를 기입하여 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.
*/

var n1 =1;
var s1 ='text';
 function a(_int) {
    if(typeof _int === typeof 1){
        return true;
    }
    else if (typeof _int === typeof '1'){
        return false;
    }
    
}
var re1 = a('1');
var re2 = a(n1);
var re3 = a(s1);
console.log(re1);
console.log(n1,re2);
console.log(s1,re3);



/*4번문제
하나의 객체(Object) 타입 매개변수를 입력받는 함수를 작성합니다.
입력된 전달인자 객체 내의 모든 요소 값을 문자열 연산하고 얻은 결과 값을 (1)함수에서 반환합니다.
단, 문자열 연산 시 각 요소 값의 사이에는 띄어쓰기(' ')를 추가합니다.
아래 보기의 객체 값을 할당하는 변수를 생성하고 (1)함수의 전달인자로 사용합니다. myName 색인 요소 값의 이름은 본인이름으로 변경합니다.
결과 변수를 생성하여 (1)함수를 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.
*/
var _ob = {
            greeting : '안녕하세요',
            myName : '오채명 입니다.',
            today : '오늘은',
            month : 5,
            separate : '/',
            day : 2,
            is : '입니다.',
            luck : '행운을 빕니다.'
        }
        /*
function obj(_object) {
var j1 = " ";
var re4 = greeting + j1 + myName + j1 + today + j1 + month + j1 + separate + j1 + day + j1 + is + j1 + luck
console.log(re4);
}
obj();
*/
function obj(ak) {
    re = " ";
    for (i in ak) {
        if (i === ak.length)
        {
            re += "."; 
        }
        else
        {
            re += ak[i] + " ";
        }   
    }
    return re; 
}
var re4 = obj(_ob);
console.log(re4);


//5번문제

document.title = "21861078_오채명";


/*6번문제
button#btn-student-number 클릭할 경우, 자신의 학번이 span#student-number 의 내부에 입력될 수 있도록 함수를 작성합니다.
button#btn-student-name 클릭할 경우, 자신의 이름이 span#student-name 의 내부에 입력될 수 있도록 함수를 작성합니다.
(1), (2) 각 클릭 리스너 호출 시 요소에 내용 입력이 완료된 후 아래 보기 문구의 경고창을 출력합니다.

var bsn = document.querySelector("button#btn-student-number");
bsn.addEventListener("click",ssnum);
function ssnum(event) {
    //var gkr =document.getElementById("#student-number");
    //gkr.innerHTML ="21861078";
    //var value = gkr.innerText = 21861078;
       //event.innerText = 21861078;
}
*/
var bsn = document.querySelector("button#btn-student-number");
bsn.addEventListener("click", ssnum); 
function ssnum(event)
{
    var gkr = document.getElementById("student-number");
    gkr.innerHTML = "<span>21861078</span>";
    alert("학번이 입력되었습니다.");
}

var bsna = document.querySelector("button#btn-student-name");
bsna.addEventListener("click", ssna); 
function ssna(event)
{
    var dlfma = document.getElementById("student-name");
    dlfma.innerHTML = "<span>오채명</span>";
    alert("이름이 입력되었습니다.");
}

/*7번문제
button#btn-odd 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
사용자가 입력한 수를 기준으로 0부터 해당 숫자까지의 숫자 중 홀수인 숫자를 아래 보기와 같이 문자열 연산하여 
결과를 div#odd-sreult 의 내부에 입력될 수 있도록 작성합니다.

var bo = document.querySelector("button#btn-odd");
bo.addEventListener("click",bor);
function bor (event){
   // event.preventDefault();
   var od = prompt("숫자를 입력해주세요.");
   if(od !== null && od !== ""){
       for(i=0; i<=od; i++){
        if(od %2 ===1){
            var os =document.getElementById("#odd-sreult");
            os.innerText = od;
            //cityL.appendChild(nitem);
             }
         }
    }
}
*/

var bo = document.querySelector("button#btn-odd");
bo.addEventListener("click", bor);
function bor(event) {
    var od = prompt("숫자를 입력해주세요.");
    if (od !== null)
    {os = "";
        for(var j = 0; j <= od; j++)
        {
            if(j % 2 === 1) {
                if (os !== "")
                {
                    os += ", ";
                }
                os += j;
            }
        }
        os += ".";
    }
    var re5 = document.getElementById("odd-result");
    re5.innerText = os;
}

/*8번문제
button#btn-add-item 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
사용자가 입력한 수만큼 새로운 li 요소를 생성하고 ul#list 의 자식 요소로 추가합니다.
(2)에 생성되는 li 요소에는 'item' 이라는 클래스 이름를 추가하고 각 요소마다 항목의 번호를 내부 문자열로 입력합니다.
(2)에 생성되는 li 요소들이 ul#list 의 자식 요소들로 추가될 때 ul#list 의 이전 내용은 모두 삭제되고나서 추가합니다.

* li 요소 항목의 번호는 1부터 시작합니다. 0으로 시작하지 않습니다.
(1)의 숫자가 2일 경우 : <li>1</li>  <li>2</li>
(1)의 숫자가 5일 경우 : <li>1</li>  <li>2</li>  <li>3</li>  <li>4</li>  <li>5</li>
*/
var bai = document.querySelector("button#btn-add-item");
bai.addEventListener("click",libai);
function libai (event){
   // event.preventDefault();
   var nnum = prompt("숫자를 입력해주세요.");
   if(nnum !== null && nnum !== ""){
       
    var cityL =document.getElementById("ul#list");
    var nitem =document.getElementById("li");
    nitem.innerText = nnum;
    cityL.appendChild(nitem);
    }

}

/*9번문제
button#btn-color-1 를 클릭할 경우, 'box' 라는 클래스 이름을 가진 모든 div 요소의 배경색 스타일을 'red', 
글자색 스타일을 'white' 로 변경합니다.
button#btn-color-2 를 클릭한 경우, 'box' 라는 클래스 이름을 가진 div 요소 중 3번째 요소의 배경색 스타일을 'blue', 
글자색 스타일을 'black' 으로 변경합니다.
*/
var bc1 = document.querySelector("button#btn-color-1");
bc1.addEventListener("click",bco1);
function bco1 (event){

}


var bc2 = document.querySelector("button#btn-color-2");
bc2.addEventListener("click",bco2);
function bco2 (event){

}
/*10번문제
button#btn-star 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
사용자가 입력한 수에 따라 아래 보기와 같이 문자열 연산하여 결과를 pre#star-result 의 내부에 입력될 수 있도록 작성합니다.
*/

var bst = document.querySelector("button#btn-star");
bst.addEventListener("click",bi);
function bi (event){
   // event.preventDefault();
   var nnum = prompt("숫자를 입력해주세요.");
}