//브라우저 창의 스크린에서의 위치(y , x)
//console.log(window.screenTop,window.screenLeft);

//브라우저 창의 스크롤 위치.
//스크롤이 가능할 만큼의 콘텐츠가 없다면 0,0 반환
//console.log(window.pageXOffset,window.pageYOffset);
//URL의 정보객체
//console.log(window.location);
//window.alert("경고창"); = 
//alert("안뇽하세여1");
//alert("안뇽하세여2");

//window.prompt("이름을 입력해 주세요.");


//var name = prompt("이름을 입력해주세요");
//console.log(name);

//Cancel, Ok
//Cancel-null 이라는 값으로 반환된다.
//Ok를 누를때는 입력된 문자열의 값이 반환된다.

//사용자가 질의에 답변할수 있는 다이얼로그 출력.
//입력한 값을 반환받을 수 있다.
/*
if(name !== null){
    //OK를 누른 상태
    console.log('이름이 입력되지 않았습니다.');
}
else{
    console.log(name);
}
*/

/*
var isCheck = confirm("진행하시겠습니까?");
//Cancel,OK - false | true 의 값을 반환
console.log(isCheck);
if(isCheck === true){
    console.log("계속 진행됩니다.")
}


//htmnl,body 중 하나가 선택되어 스크롤 좌표가 이동됨.
//window.scrollTo(x,y);
//x,y의 값을 설정한다.(number 타입)

setInterval(function(){
    console.log('안녕하세요.');
},1000);


//Interval(callback(F),time(number))
//time - millseconds(ms) 1000-1초 , 100-0.1초,3000-3초
//fps 1000

var count = 0;
var timer = setInterval(function(){
    count++

    console.log(count);
    clearInterval(timer);
},1000);

//clear Interval(timer) ; timer라는 인터벌 변수를 초기화한다.
setTimeout(Callback(F),time(number));
setTimeout();
clearTimeout();


var count = 0;
var timer = setTimeout(function(){
    console.log(count);
    window.scrollTo(2000,2000);

},1000);
clearTimeout();//타이머 변수를 초기화 한다.
*/

//window.open("http://www.naver.com",'네이버');
//window.open("http://www.naver.com",'_self');
//window.open("http://www.naver.com",'_blank'); //새창으로

//window.open("http://www.naver.com","네이버","top=100,left=200,width=500");
//window.close();

console.log(window.navigator);
//console.log(navigator);
console.log(navigator.appName);
console.log(navigator.appVersion);
console.log(navigator.userAgent);
//모든 브라우저가 기능이 통일되어 있지 않아서 신기술이 적용 가능한지 못한지 체크해야함.

//크로스 브라우징 --- 브라우저 마다 /기기(PC,Mobile)마다의 대응을 위한 브라우저 정보체크.

//console.log(window.screen);
//console.log(screen.availWidth,screen.availHeight);
//console.log(screen.width,)


//hystory.length = 내역의 개수
//history.back();-뒤로가기
//history.forward();-앞으로 가기
//history.go();


console.log(document);
console.log(document.title);

console.log(content[2]);
document.write("안녕하세요.");
//body의 마지막에 기입된 문자열을 출력
