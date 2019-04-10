//Quest 1.

var getEven = function(_number){

    var result = '';


    for(var i = 0; i < _number; i++){
        var even1 = "";
        if( i % 2 == 0){
            console.log('짝수');
        }
    }
}


// 교수님 도저히 모르겠어요.. 저희 빡통을 인정하세여..

getEven(10);


//Quest 2.
var result = "";
function getStar(number){
        if(typeof number === typeof 1){
            for(var i = 1; i <= number; i++){
                result += '*';
            }
            return result;   
        }
        else {
            console.log("숫자만 입력 가능합니다.")
            return false;
        }
}
var star1 = getStar("text");
var star2 = getStar(5);

console.log(star1);
console.log(star2);

        
    
    



//Quest 3.
var _fruit = ['Apple','Orange','Grape','Melon'];
_fruit.unshift('Mango');
_fruit.splice(3, 0, 'Cherry');
_fruit.reverse();

console.log(_fruit);

//Quest 4.
function getsize(){

    return "{ winWidth : __윈도우 콘텐츠 영역의 넓이값__, winHeight : __윈도우 콘텐츠 영역의 높이값__ }";
}

var winSize = getsize();
console.log('윈도우 콘텐츠의 영역width :' +window.innerWidth+ 'px height :'+window.innerHeight+'px 입니다.');