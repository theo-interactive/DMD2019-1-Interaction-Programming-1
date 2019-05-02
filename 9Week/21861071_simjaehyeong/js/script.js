//문제 1
alert("Hello, world!");

//문제 2
var _array = ['Iron Man', 'Captain America', 'Hulk', 'Thor', 'Spider-Man'];
_array.push('Doctor Strange');
_array.splice(3, 1, 'Captain Marvel');
_array.shift();
_array.reverse();
console.log(_array);

//문제 3
function q3(_num){
    if(typeof _num === typeof 2){
        console.log('true');
    }else if(typeof _num === typeof 'gud') {
        console.log('false');
    }
    return _num;
}
var result3_1 = q3(5);
var result3_2 = q3('text');

//문제 4
var result4 = '';
function q4(object){
    for(var a4 in object4){
        result4 += object4[a4] + ' ';
    };
    // console.log(result4);
    return object;
};
var object4 = {
    greeting : '안녕하세요',
    myName : '심재형입니다.',
    today : '오늘은',
    month : 5,
    separate : '/',
    day : 2,
    is : '입니다.',
    luck : '행운을 빕니다.'
};
q4(object4);

//문제 5
document.title = '21861071_심재형';

//문제 6
var $q6_1 = document.getElementById("btn-student-number");
var a6_1 = document.getElementById("student-number");
$q6_1.addEventListener('click', function(event){
    // console.log(event);
    event.preventDefault();
    a6_1.innerText = '21861071';
    //클릭후에 변하는건 스팬 안의 문자열값이니까 그걸 가지고 하고싶은데? ㅋ..x
    alert('학번이 입력되었습니다.');
});

var $q6_2 = document.getElementById("btn-student-name");
var a6_2 = document.getElementById("student-name");
// console.log($q6_2);
$q6_2.addEventListener('click', function(event2){
    // console.log(event2);
    event.preventDefault();
    a6_2.innerText = '심재형';
    alert('이름이 입력되었습니다.');
});

//문제 7
var $q7 = document.querySelector('button#btn-odd');
var $a7 = document.querySelector('div#odd-result');
var a7;
$q7.addEventListener('click', function(event){
    event.preventDefault();
    a7 = prompt("숫자를 입력해주세요.");
    var result = '';
    for(var i = 0; i <= a7; i++){
        if(i > 0){
            if(i % 2 === 1){
                //홀수.
                if(result !== ''){
                    result += ', ';
                }
                result += i;
            }
        }
    };
    result += '.';
    $a7.innerText = result;
});

//문제 8
var $q8 = document.querySelector('button#btn-add-item');
var $q8ul = document.querySelector('ul#list');
$q8.addEventListener('click', function(){
    event.preventDefault();
    var a8 = prompt("숫자를 입력해주세요.");
    for(var i = 0; i <= a8; i++){
        var newli = document.createElement('li');
    }
    $q8ul.appendChild(newli);
});



//문제 9
var $q9_1 = document.querySelector('button#btn-color-1');
var $box = document.getElementsByClassName('box');

$q9_1.addEventListener('click', function(){
    event.preventDefault();
    for(var i = 0; i < $box.length; i++){
        $box[i].style.backgroundColor = 'red';
        $box[i].style.color = 'white';
    }
    
});

var $q9_2 = document.querySelector('button#btn-color-2');
$q9_2.addEventListener('click', function(){
    event.preventDefault();
    $box[2].style.backgroundColor = 'blue';
    $box[2].style.color = 'black';
});



//문제 10
var $q10 = document.querySelector('button#btn-star');
var $StarResult = document.querySelector('pre#star-result');
$q10.addEventListener('click', function(){
    event.preventDefault();
    var $a10 = $prompt("숫자를 입력해주세요.");
    var result = '';
    // var max;
    // for(var i =0; i<max; i++){
    //     for(var j =0; j<max; j++){
    //         if(){
    //             result
    //         }else{

    //         }
    //     }
    // }
    $a10.innerText = result;
})

// ☆★