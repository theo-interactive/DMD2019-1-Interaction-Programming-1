
//브라우저 창의 스크린에서의 위치(y, x)
// console.log(window.screenTop, window.screenLeft);
//브라우저 창의 스크롤 위치.
//스크롤이 가능할 만큼의 콘텐츠가 없다면 0, 0 반환.
// console.log(window.pageXOffset, window.pageYOffset);
//URL 의 정보 객체.
// console.log(window.location);
// window.alert("안녕하세요~ 1.");
// alert("안녕하세요~ 2.");
//사용자가 질의에 대한 답변할 수 있는 다이얼로그창이 출력.
//입력한 값을 반환받을 수 있다.
// window.prompt("이름을 입력해주세요.");
// prompt("이름을 입력해주세요.");
//var name = prompt("이름을 입력해주세요.");
// console.log(name);
//Cancel, Ok
//Cancel - null 값으로 반환된다.
//OK - 입력된 문자열의 값이 반환된다.
// if(name !== null){
//     //OK 를 누른 상태.
//     if(name === ''){
//         console.log('이름이 입력되지 않았습니다.');
//     }else{
//         console.log(name);
//     }
// }else{
//     //Cancel 을 누른 상태.
//     console.log('입력이 취소되었습니다.');
// }
//사용자의 확인 여부를 체크.
// var isCheck = confirm("진행하시겠습니까?");
//Cancel, OK - false | true 의 값을 반환.
// console.log(isCheck);
// if(isCheck === true){
//     console.log("계속 진행됩니다.");
// }
//브라우저 창의 최상위 객체의 스크롤을 이동.
//html, body 중 하나가 선택되어 스크롤 좌표가 이동됨.
// window.scrollTo(0, 0);
// x, y 값을 설정한다. (number 타입)

//설정한 시간에 따르는 타이머 생성.(반복)
//setInterval()
//clearInterval();
// setInterval(function() {
//     //console.log('안녕하세요.');
// }, 1000);
//setInterval(callback(F), time(number))
//time - millseconds(ms) 1000 - 1초. 100 - 0.1초, 3000 - 3초
//fps 1000 / 60 - 60프레임.  
// var count = 0;
// var timer = setInterval(function() {
//     count++;
//     console.log(count);
// }, 100);
//clearInterval(timer); timer 라는 인터벌 변수를 초기화한다.

//setTimeout(callback(F), time(number));
//한번만 실행되는 타이머.
//setTimeout();
//clearTimeout();
// var count = 0;
// var timer = setTimeout(function() {
//     console.log(count);
//     window.scrollTo(2000, 2000);
// }, 10000);
//clearTimeout(timer); timer 라는 타이머 변수를 초기화한다.

// window.open("http://www.naver.com", '네이버'); //이름 설정.
// window.open("http://www.naver.com", '_self'); //지금 보고 있는 창으로.
// window.open("http://www.naver.com", '_blank'); //새창으로.

//새로운 경로를 열기.
//window.open("http://www.naver.com", "네이버", "top=100, left=200,dth=500, height=600");

//브라우저 닫기.
//window.close();
//self.close();

// console.log(window.navigator);
// console.log(navigator);
// console.log(navigator.appName);
// console.log(navigator.appVersion);
// console.log(navigator.userAgent);
//모든 브라우저가 기능이 통일되어 있지 않아서 신기술이 적용 가능한지 못한지 체크해야함.
//크로스 브라우징. ---- 브라우저 마다 / 기기(PC / Mobile) 마다의 대응을 위한 브라우저 정보 체크를 위해 존재.

//screen.
// console.log(window.screen);
// console.log(screen.availWidth, screen.availHeight);
// console.log(screen.width, screen.height);

//history.
//브라우저에서 문서 이동을 할 경우, 남겨지는 이동의 내역.
//history.length - 내역의 개수.
//history.back(); - 뒤로 가기.
//history.forward(); - 앞으로 가기.
//history.go(0);

//location.
//URL 의 문자열 정보.
//location.reload();
//현재 보고 있는 URL 경로를 새로고침한다.

console.log(document);
console.log(document.title);
document.title = "안녕하세요.";

var id = document.getElementById("id");
console.log(id);
var content = document.getElementsByClassName('content');
console.log(content[2]);
document.write("안녕하세요.");
document.write("안녕하세요.");
document.write("안녕하세요.");
//body 의 마지막에 기입된 문자열을 출력.