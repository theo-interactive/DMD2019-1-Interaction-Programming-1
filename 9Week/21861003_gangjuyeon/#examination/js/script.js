//console.log('load');

/*Q1
1. js 폴더와 폴더 내부에 script.js 파일 생성하고 index.html 에 script.js 외부 파일을 로드합니다.
2. script.js 에 아래 보기 문구의 경고창을 출력합니다.
*/
    alert('Hello, world!');

/*Q2
1. 아래 보기의 배열(Array) 객체 값을 할당하는 변수를 생성합니다.
2. 'Doctor Strange' 문자열 값을 (1)배열 객체의 마지막 부분에 추가합니다.
3. (1)배열 객체의 뒤에서 두번째 요소 값을 'Captain Marvel' 문자열 값으로 변경합니다.
4. (1)배열 객체의 첫번째 요소를 삭제합니다.
5. (1)배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.\

* 배열 객체 값.
array = ['Iron Man', 'Captain America', 'Hulk', 'Thor', 'Spider-Man'];
*/

//1.
var _heros = ['Iron Man', 'Captain America', 'Hulk', 'Thor', 'Spider-Man'];
    //console.log(_heros);
//["Iron Man", "Captain America", "Hulk", "Thor", "Spider-Man"]

//2.
_heros.push('Doctor Strange');
    //console.log(_heros);
//["Iron Man", "Captain America", "Hulk", "Thor", "Spider-Man", "Doctor Strange"]

//3.
//Spider-Man를 지우고 Captain Marvel 추가
_heros.splice(4, 1, 'Captain Marvel');
    //console.log(_heros);
//["Iron Man", "Captain America", "Hulk", "Thor", "Captain Marvel", "Doctor Strange"]

//4.
//Iron Man 삭제
_heros.shift();
    //console.log(_heros);
//["Captain America", "Hulk", "Thor", "Captain Marvel", "Doctor Strange"]

//5.
//reverse
_heros.reverse();
    console.log(_heros);
//["Doctor Strange", "Captain Marvel", "Thor", "Hulk", "Captain America"]



/*Q3
1. 입력된 전달인자가 숫자(Number) 타입인 경우 true, 문자(String) 타입인 경우 false 를 반환하는 함수를 작성합니다.
2. 결과 변수1을 생성하여 (1)함수의 전달인자로 숫자를 기입하여 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.
3. 결과 변수2를 생성하여 (1)함수의 전달인자로 문자를 기입하여 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.

* 함수 반환 결과.
func(5) : true
func('text') : false

*/

var Hey = function(_input){
    // console.log(typeof _input);
    if(typeof _input == 'number'){
        return true;
    }
    else if(typeof _input == 'string'){
        return false;
    }
}

var var1 = Hey(5);
console.log(var1); //true.
var var2 = Hey('text');
console.log(var2); //false.
// var var3 = Hey(10);
// console.log(var3); //true.
// var var4 = Hey('Hello');
// console.log(var4); //false.


/*Q4
1. 하나의 객체(Object) 타입 매개변수를 입력받는 함수를 작성합니다.
2. 입력된 전달인자 객체 내의 모든 요소 값을 문자열 연산하고 얻은 결과 값을 (1)함수에서 반환합니다.
3. 단, 문자열 연산 시 각 요소 값의 사이에는 띄어쓰기(' ')를 추가합니다.
4. 아래 보기의 객체 값을 할당하는 변수를 생성하고 (1)함수의 전달인자로 사용합니다. myName 색인 요소 값의 이름은 본인이름으로 변경합니다.
5. 결과 변수를 생성하여 (1)함수를 호출하고 반환된 값을 할당받아 console 창에 값을 출력합니다.


* 객체 값.
object = {
    greeting : '안녕하세요',
    myName : '김용원(본인이름으로 변경)입니다.',
    today : '오늘은',
    month : 5,
    separate : '/',
    day : 2,
    is : '입니다.',
    luck : '행운을 빕니다.'
}

* 함수 반환 결과.
func(object) : 안녕하세요 김용원입니다. 오늘은 5 / 2 입니다. 행운을 빕니다.
*/

var Me = {
    greeting : '안녕하세요',
    myName : '강주연입니다.',
    today : '오늘은',
    month : 5,
    separate : '/',
    day : 2,
    is : '입니다.',
    luck : '행운을 빕니다.'
}

var Hello = function(){
    var result = '';
    for(var key in Me){
        result += Me[key] + ' ';
    }
    return result;
}

var Hi = Hello(Me);
console.log(Hi);
//안녕하세요 강주연입니다. 오늘은 5 / 2 입니다. 행운을 빕니다. 



/*Q5
1. html 문서의 title을 '학번_이름' 으로 변경합니다.
*/
document.title = '21861003_강주연';


/*Q6
button#btn-student-number 클릭할 경우, 자신의 학번이 span#student-number 의 내부에 입력될 수 있도록 함수를 작성합니다.
button#btn-student-name 클릭할 경우, 자신의 이름이 span#student-name 의 내부에 입력될 수 있도록 함수를 작성합니다.
(1), (2) 각 클릭 리스너 호출 시 요소에 내용 입력이 완료된 후 아래 보기 문구의 경고창을 출력합니다.


* 리스너 호출 경고창 문구.
(1) : 학번이 입력되었습니다.
(2) : 이름이 입력되었습니다.
*/


var $btn_student_number = document.querySelector('button#btn-student-number')
//console.log($btn_student_number);
$btn_student_number.addEventListener('click', function(event){
    event.preventDefault();
    
    var $my_id = document.getElementById('student-number');
    $my_id.innerText = '21861003';

    console.log('학번이 입력되었습니다.')
})

var $btn_student_name = document.querySelector('button#btn-student-name')
// console.log($btn_student_name);
$btn_student_name.addEventListener('click', function(event){
    event.preventDefault();
    
    var $my_name = document.getElementById('student-name');
    $my_name.innerText = '강주연';

    console.log('이름이 입력되었습니다.')
})


/*Q7
1. button#btn-odd 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
2. 사용자가 입력한 수를 기준으로 0부터 해당 숫자까지의 숫자 중 홀수인 숫자를 아래 보기와 같이 문자열 연산하여 결과를 div#odd-result 의 내부에 입력될 수 있도록 작성합니다.

* 문자열 결과.
(1)의 숫자가 10일 경우 : 1, 3, 5, 7, 9.
(1)의 숫자가 5일 경우 : 1, 3, 5.
*/
var $btn_odd = document.querySelector('button#btn-odd')
// console.log($btn_odd);
$btn_odd.addEventListener('click', function(event){
    event.preventDefault();
    
    var inputnum = prompt('숫자를 입력해주세요.');
    var $odd_result = document.getElementById('odd-result');
        
        var result = '';
        for (i= 0; i<=inputnum; i++){
            if(i%2 == 1){
                if (inputnum % 2 == 1){
                    if(result !== ''){
                        result += ', ';
                    }
                    result += i;
                }
                else if(inputnum % 2 ==0){
                    if(result !== ''){
                        result += ', ';
                    }
                    result += i;
                }
            }
            }
            result += '.'
            $odd_result.innerText = result;
            return result;
})


/*Q8
1. button#btn-add-item 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
2. 사용자가 입력한 수만큼 새로운 li 요소를 생성하고 ul#list 의 자식 요소로 추가합니다.
3. (2)에 생성되는 li 요소에는 'item' 이라는 클래스 이름를 추가하고 각 요소마다 항목의 번호를 내부 문자열로 입력합니다.
4. (2)에 생성되는 li 요소들이 ul#list 의 자식 요소들로 추가될 때 ul#list 의 이전 내용은 모두 삭제되고나서 추가합니다.


* li 요소 항목의 번호는 1부터 시작합니다. 0으로 시작하지 않습니다.
(1)의 숫자가 2일 경우 : <li>1</li><li>2</li>
(1)의 숫자가 5일 경우 : <li>1</li><li>2</li><li>3</li><li>4</li><li>5</li>
*/

var $btn_add_item = document.querySelector('button#btn-add-item');

$btn_add_item.addEventListener('click', function(event){
    event.preventDefault();

    var $ItemNum = prompt('숫자를 입력해주세요.')
    var result = '';
    for(var i = 0; i <$ItemNum; i++){
        var $newItem = document.createElement('li');
        result += $newItem;
        $list.classList.add(result);

        console.log($list);
    }
})


/*Q9
1. button#btn-color-1 를 클릭할 경우, 'box' 라는 클래스 이름을 가진 모든 div 요소의 배경색 스타일을 'red', 글자색 스타일을 'white' 로 변경합니다.
2. button#btn-color-2 를 클릭한 경우, 'box' 라는 클래스 이름을 가진 div 요소 중 3번째 요소의 배경색 스타일을 'blue', 글자색 스타일을 'black' 으로 변경합니다.
*/

//1.
var $btn_color_1 = document.querySelector('button#btn-color-1')

$btn_color_1.addEventListener('click', function(event){
    event.preventDefault();

    var $RedWhite = document.getElementsByClassName('box');
    // console.log($RedWhite);

    var max = 5;
    for(var i = 0; i< max; i++){
        $RedWhite[i].style.backgroundColor = 'red';
        $RedWhite[i].style.color = 'white';
    }

    
})

//2.
var $btn_color_2 = document.querySelector('button#btn-color-2')

$btn_color_2.addEventListener('click', function(event){
    event.preventDefault();

    var $BlueBlack = document.getElementsByClassName('box');

    var max = 5;
    for(var i = 0; i< max; i++){
        $BlueBlack[2].style.backgroundColor = 'blue';
        $BlueBlack[2].style.color = 'black';
    }

    
})



/*Q10
1. button#btn-star 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
2. 사용자가 입력한 수에 따라 아래 보기와 같이 문자열 연산하여 결과를 pre#star-result 의 내부에 입력될 수 있도록 작성합니다.

* 문자열 결과.
(1)의 숫자가 5일 경우
★☆☆☆☆
★★☆☆☆
★★★☆☆
★★★★☆
★★★★★
(1)의 숫자가 3일 경우
★☆☆
★★☆
★★★
줄바꿈은 <br> 혹은 \n 을 활용할 수 있습니다.
*/

//1.
var $btn_star = document.querySelector('button#btn-star')

$btn_star.addEventListener('click', function(event){
    event.preventDefault();

    var $StarNum = prompt('숫자를 입력해주세요.');

    var $StarResult = document.getElementById('star-result');

    var result = '';

    var max = $StarNum;
    for(var i = 0; i<max; i++){
        for (var j = 0; j<max; j++){
            if(i >= j){
                result += '★';
            }else{
                result += '☆';
            }
            result += "\n";
        }
        
        $StarResult.innerText = result;
        return result;
    }
})
