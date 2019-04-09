//Quest 1.
/*
1번 두시간동안 헤맸습니다...울뻔했어요.....ㅠㅅㅠ
return을 자꾸 두 개 쓰고 싶어져서 계속 헤맸는데, 
혹시 함수에 있는 2개의 값을 반환 시킬 수 있는 방법은 없나요..?
그냥 떠오르는대로 return _string, _number 이렇게 하면 하나의 값만 리턴되길래
궁금해져서 질문합니다!
*/
var getEven = function(num_a){
    var _string = '';
    var _number = '';
    for (var i = 1; i <= num_a; i++) {
        if (i % 2 === 0 ) {
            if(i === num_a) {
                _string +="짝수" +  '.';
                _number += i + '.';
            }else{
                _string +='짝수' +  ', ';
                _number += i +  ',';
            }
        }
    }console.log(_string);
    return "getEven(10)결과 : " + _number;
}
var even1 = getEven(10);
console.log(even1);

//Quest 2.
var getStar = function (num_b){
    if (typeof num_b !== typeof 1 ) {
        console.log("숫자만 입력 가능합니다.");
        return false;
    }else if (typeof num_b === typeof 1 ) {
        // var result = [];
        var result= '';
        for (var i = 0; i < num_b; i++) {
            result += '*';
        };
        return result;
    };
};
var star1 = getStar("text");
var star2 = getStar(5);
console.log(star1);
console.log(star2); 

//Quest 3.
fruit = ['Apple', 'Orange', 'Grape', 'Melon'];
fruit.push('Mango');
fruit.splice(2, 0, 'Cherry');
fruit.reverse();
console.log(fruit);

//Quest 4.
var getSize = function() {
    // var _array = [];
    // _array += window.innerHeight + ',' + window.innerWidth
    return ["winWidth : " + window.innerWidth + " 윈도우 콘텐츠 영역의 넓이 값 , " + "winHeight : " + window.innerHeight + " 윈도우 콘텐츠 영역의 높이값"];
}

var winSize = getSize();
console.log(winSize);
console.log("윈도우 콘텐츠의 영역 width : " + window.innerWidth + 'px, ' + "height : " + window.innerHeight + 'px 입니다.');
