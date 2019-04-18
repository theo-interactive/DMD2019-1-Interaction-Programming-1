//console.log('load');

//document.createElement();
//새로운 요소를 생성한다.
//javasctipt 상의 가상 공간에서만 존재. html 문서에 적용되지는 않는다.
var $div = document.createElement('div');
$div.innerHTML = "새로운 div 가 생성.";
$div.style.width = 200 + 'px';
$div.style.height = 200 + 'px';
$div.style.backgroundColor = 'rgba(0,255,0,0.8)';
$div.style.color = 'blue';
$div.style.fontSize = 20 + 'px';
$div.style.lineHeight = 30 + 'px';
// console.log($div);

//document.getElementById();
//전달인자로 id 이름을 넣을 때, html 상의 id를 사용하고 있는 요소를 찾아서 반환. - 1개만.
var $boxDiv = document.getElementById('box-div');
//console.log($boxDiv);
$boxDiv.appendChild($div);
$boxDiv.style.backgroundColor = "#000000";
$boxDiv.style.color = "#ffffff";

//document.getElementsByClassName();
//전달인자로 class 이름을 넣을 때, html 상의 class를 사용하고 있는 요소를 찾아서 목록 반환 - class 개수만큼.
var $box = document.getElementsByClassName('box');
// console.log($box);
// console.log($box.length);
//배열로 반환될 때는 배열의 기능을 가지고 올 수 있다.
//Array.length - 배열의 개수를 반환.
$box[0].style.backgroundColor = "red";
$box[1].style.backgroundColor = "gray";
$box[2].style.backgroundColor = "purple";

//document.getElementsByName();
//전달인자로 name 이름을 넣을 때, html 상의 name 속성을 사용하고 있는 요소를 찾아서 목록 반환 - name 속성값이 있는 개수만큼.
var $inputId = document.getElementsByName("user_id");
var $inputPass = document.getElementsByName("user_pass");
// console.log($inputId, $inputPass);
// console.log($inputId.length, $inputPass.length);
$inputId[0].style.border = '1px solid #000000';

//document.getElementsByTagName();
//전달인자로 태그 이름을 넣을 때, html 상의 사용하고 있는 해당 태그를 찾아서 목록 반환 - 태그 이름이 있는 개수만큼.
var $divTag = document.getElementsByTagName('div');
var $bodyTag = document.getElementsByTagName('body');
// console.log($divTag, $divTag.length);
// console.log($bodyTag[0]);

//document.write();
//전달인자의 문자열 내용을 body 태그가 끝나기 바로 전의 위치에 출력(기입).
document.write($divTag.length);
document.write("test");
document.write("test");
document.write("test");
document.write("test");

//element.attributes
//해당하는 요소의 속성값을 객채로 반환.
// console.log($boxDiv.attributes);
// console.log($inputId[0].attributes["id"]);

//element.childNodes
//해당하는 요소의 자식 노드를 찾고 배열로 반환.
//html 입려된 문서 상의 자식 요소 사이의 공백이 있다면
//공백 #text "" 까지 포함해서 반환이 됨.
var $ulList = document.getElementById("list");
// console.log($ulList);
// console.log($ulList.childNodes);
// console.log($ulList.children);
//element.children
//해당하는 요소의 자식 요소들만 배열로 반환.
//자식 요소의 개수 만큼 반환.
var $listItem = $ulList.children;
// console.log($listItem.length);
// console.log($listItem[0].style);
// console.log($listItem[0].style.backgroundColor);
$listItem[0].style.backgroundColor = "black";
$listItem[0].style.color = "white";
// console.log($listItem[0].style.backgroundColor);

//element.classList
//해당하는 요소의 클래스를 찾아서 객체로 반환.
//element.classList.add(' ', '');
//해당하는 요소에 클래스를 추가. (복수로 기입 가능)
//element.classList.remove(' ', ' ');
//해당하는 요소의 클래스를 삭제. (복수로 기입 가능)
//element.classList.toggle(' ', ' ', true|false);
//해당하는 요소에 클래스를 추가하거나 삭제.
//element.classList.contains(' ');
//해당하는 요소에 전달인자 class 이름이 존재하는지 여부를 체크. - true|false 로 반환.
// console.log($box[0].classList);
// console.log("1 : ", $listItem[1].classList.contains("size")); // false.
// $listItem[1].classList.add("red", "size", "padding");
// $listItem[1].classList.remove("padding");
// console.log("2 : ", $listItem[1].classList.contains("size")); //true.

var lItem1CL = $listItem[1].classList;
// if(lItem1CL.contains("size") === false){
//     lItem1CL.add("size");
// }
if(lItem1CL.contains("size") === true){
    lItem1CL.remove("size");
}
console.log($inputId.id);
console.log($box[2].className);
console.log($ulList.firstChild);
console.log($ulList.firstElementChild);
console.log($ulList.lastChild);
console.log($ulList.lastElementChild);