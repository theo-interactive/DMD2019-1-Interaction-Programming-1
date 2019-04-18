// console.log("load");

//DOM - document object model.
//document.
// console.log(window.document);
// console.log(document);
//window 라는 최상위 객체가 생략 가능하다.
//문서를 구성하는 HTML 요소(태그)를 노드방식으로 반환한다.
//브라우저에서 html 문서를 실행할 때, javascript 에서 자동으로 생성되는 객체.
//특정 요소(태그)들을 찾아서 조작(UI 기능을 만들거나 스타일을 변경)이 가능하다.

// console.log(document);
//#document 라는 명칭의 노드 형식으로 반환.
// console.log(document.documentElement);
//<html>...</html> 자기자신을 javascript에서 조작가능한 요소로서 사용할 수 있도록 노드를 반환.
var $html = document.documentElement;
// $html.style.width = 200 + "px";
// $html.style.height = 200 + "px";
// $html.style.backgroundColor = "black";
/*
background-color : black
-> style.backgroundColor = "black"
*/
// console.log(document.body);
var $body = document.body;
//<body>...</body>
// $body.style.margin = 0;
// $body.style.padding = 0;
// $body.style.width = 100 + "px";
// $body.style.height = 100 + "px";
// $body.style.backgroundColor = "red";

//cookie;
// console.log(document.cookie);
//서버에서 저장되고 있는 쿠키 값을 반환.

//domain
// console.log(document.domain);
//서버(호스팅)가 실행되고 있을 때, 도메인 주소를 반환.

//scripts
// console.log(document.scripts);
//<script></script> 요소를 내역으로 반환.
//title
// console.log(document.title);
//<title>title</title> title 요소의 값을 반환.
// document.title = "title 변경";
//문자열 값을 적용하면 <title>변경되는 문자열</title> title 요소의 값이 변경.