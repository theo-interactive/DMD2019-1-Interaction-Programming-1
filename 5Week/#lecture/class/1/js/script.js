//외부 javascript 사용.
//console.log("로드됨.");
//배열 객체. Array (object)
var _array = []; //빈 배열을 생성. 배열의 개수는 0
// var _array = new Array(); //빈 배열을 생성.
_array = ['Iron man', 'Hulk', 'Thor', 'Doctor Strange']; //배열 값을 대입. _array 의 개수는 4.
// console.log(_array.length); //length 는 배열의 개수를 확인.
/*
var result = '';
for(var i = 0; i < _array.length; i++) {
    // console.log(_array[i]);
    result += _array[i] + ' ';
    //0 1 2 3
}
result = '';
//for(최대값; 조건; 감소(--))
for(var j = _array.length - 1; j >= 0; j--) {
    // console.log(j);
    result += _array[j];
    //3 2 1 0
    if(j === 0) {
        result += '.';
    }else if(j === 2){
        result += '        ';
    }else{
        result += ', ';
    }
}
// for(var i = 0; i < 2; i++){
//     for(var j = 0; j < 2; j++) {
//         for(var k = 0; k < 2; k++){
//             console.log(i, j, k);
//         }
//     }
// }
var _heros = ['Iron man', 'Hulk', 'Thor', 'Doctor Strange'];
//배열의 추가.
//unshift(__value__).
//push(__value__);
_heros.unshift('Captain America');
// console.log(_heros, _heros.length);
//배열의 맨앞에 값을 추가.
_heros.push('Spider-Man');
// console.log(_heros, _heros.length);
//배열의 맨마지막에 값을 추가.
// for(var i = 1; i < 4; i++){
//     _heros.push('Spider-Man' + i);
// }
// console.log(_heros, _heros.length);
//배열의 병합. [. . .] + [. . .] = [. . . . . .];
var _heros2 = ['Black Panther', 'Ant-Man'];
_heros = _heros.concat(_heros2);
// console.log(_heros, _heros.length);
//배열을 병합할 때는 병합된 결과를 담을 변수가 필요하다.
// ex) _arr3 = _arr1.concat(arr2)
//순서에 따른 배열 추가, 삭제, 치환
//splice()
//_heros.splice(시작할 순서, 삭제할 개수, 추가할 배열);
_heros.splice(2, 0, 'Vision');
// console.log(_heros, _heros.length);
_heros.splice(2, 1, 'Loki');
// console.log(_heros, _heros.length);
//배열의 삭제.
//shift()
//pop()
_heros.shift();
// console.log(_heros, _heros.length);
//배열의 맨앞의 요소를 삭제.
_heros.pop();
// console.log(_heros, _heros.length);
//배열의 맨마지막의 요소를 삭제.
//console.log(result);
//배열의 정렬.
//sort()
//reverse()
// _heros.push(1);
// _heros.push(true);
// _heros.push(false);
// _heros.push(0);
// _heros.push({name : 'rh'});
// console.log(_heros, _heros.length);
_heros.sort();
// console.log(_heros, _heros.length);
//Number, String, Object, Boolean 순으로 정렬.
//Number 는 0 - 10 순으로.
//String 은 알파벳 순으로.
//Boolean 은 false, true 순으로.
//반대로 정렬.
// _heros.reverse();
// console.log(_heros, _heros.length);
for(var i in _heros) {
    // console.log(_heros[i]);
}
for(var i = 0; i < _heros.length; i++){
    // console.log(_heros[i]);
}
for(var j = _heros.length - 1; j >= 0; j--){
    console.log(_heros[j]);
}
_heros.reverse();
for(var j in _heros){
    console.log(_heros[j]);
}
*/

//Math 수학 명령어.
var result = -100 + 50;
// console.log(result);
result = Math.abs(-100 + 50);
// console.log(result);
result = Math.abs(-100 - 50);
// console.log(result);
result = Math.max(0, 10, 20, -10, 5);
// console.log(result); //20.
result = Math.max(0, -10, -20, -10, -5);
// console.log(result); //0.
result = Math.min(0, 10, 20, -10, 5);
// console.log(result); //-10.
result = Math.min(0, -10, -20, -10, -5);
// console.log(result); //-20.
var numbers = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
result = Math.max(numbers);
result = Math.max.apply(null, numbers);
console.log(result);
result = Math.min.apply(null, numbers);
console.log(result);