//1.
alert("Hello, world!");

//2.
var _array = ['Iron Man', 'Captain America', 'Hulk', 'Thor', 'Spider-Man'];
_array.push('Doctor Strange');
_array.splice(5, 0, 'Captain Marvel' );
_array.shift();
_array.reverse();
console.log(_array)

//3.

function num(number1){
    if(number1 !== 5){
      
     
      return false;

    }else if(number1 == 5) {
    
        return true;
    

}
}
var star1 = num("text");
console.log(star1);
var star2 = num(5);
console.log(star2);

//4.

    var object = {
   greeting : '안녕하세요',
   myName : '정서영 입니다.',
   today : '오늘은',
   month : 5,
   separate : '/',
   day : 2,
   is : '입니다.',
   luck : '행운을 빕니다.'}

for(var key in object){
    console.log(object[key]+'');
}




//5.
document.title = "21761112_정서영"; 

//6.
/*
var $_num =document.getElementById( "btn-student-number");

$_num.addEventListener("click",$num);


function $num(){

if (click){
var $s_num = document.getElementById('student-number').innerHTML =  '21761112';

alert('학번이 입력되었습니다.');

}
}
$num()

var $s_name =document.getElementById( "btn-student-name");
$s_name.addEventListener("click",$name);

function $name(){

if(){
alert('이름이 입력되었습니다.');
}
}

$name()


*/
//7.

var $btn_odd =document.getElementById( "btn-odd");
$btn_odd.addEventListener("click",$odd);
function $odd(event){
var num = prompt('숫자를 입력해주세요.');
if(num === Number){
    for(var i = 0; i < num ; i++){
    if ( i % 2 === 1){
     var $span = document.getElementById('span');
     $$span.innerText = num;
      
    }
}
}
}
$odd()