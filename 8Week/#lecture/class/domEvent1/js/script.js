// console.log('load');
//classList.toggle();
var $div = document.getElementById('div');
var divClasses = $div.classList;
$div.addEventListener('click', function(e){
    //console.log('click');
    //$div.classList.toggle('red');
    // $div.classList.toggle('red', true);
    // === classList.add('red');
    // $div.classList.toggle('red', false);
    // === classList.remove('red');

    // console.log(divClasses.contains('red'));
    // -> true | false.

    //조건을 이용한 toggle 기능.
    // if(divClasses.contains('red')){ // divClasses.contains('red') === true
    //     //true.
    // }else{
    //     //false.
    // }
    if(!divClasses.contains('red')){ // divClasses.contains('red') === false 
        //-> false.(red 포함되지 않을 때.)
        divClasses.add('red');
    }else{
        //-> true.(red 포함될 때)
        divClasses.remove('red');
    }
});

//firstChild
//firstElementChild
//lastChild
//lastElementChild
var $ulList = document.getElementById('list');
// console.log($ulList);
var $listItem1 = $ulList.firstChild;
// console.log($listItem1);
//문서상의 공백이 있다면 "" 반환.
//문서상의 공백이 없다면 첫번째 자식 요소.
$listItem1 = $ulList.firstElementChild;
// console.log($listItem1);
//ul#list 의 첫번째 자식 요소.
$listItem1.style.color = "red";

var $listItem3 = $ulList.lastChild;
// console.log($listItem3);
$listItem3 = $ulList.lastElementChild;
// console.log($listItem3);
//ul#list 의 마지막 자식 요소.
$listItem3.style.color = "blue";
var $listItem4 = $listItem3.cloneNode();
//cloneNode 요소를 복제.(노드만.) 안의 텍스트는 복제되지 않음.
//id="list3"
$listItem4.innerText = "일어나세요.";
$listItem4.setAttribute("id", "list4");
//id="list4" 변경됨.
//setAttribute("속성명", "적용할 속성값");
// console.log($listItem4);
// $ulList.appendChild($listItem4);
// $ulList.removeChild($listItem1);
//appendChild()
//요소의 자식으로 요소를 붙여준다.
//* 마지막 자식으로 붙는다.
//removeChild();
//$element1.removeChild($element2);
//요소($element1)의 자식중 해당하는 요소($element2)를 찾아서 삭제한다.
//cloneNode();
//insertBefore();
//$element1.insertBefore($element2, $element3);
//요소($element1)의 자식중 참조하려는 요소($element3)의 앞에 새로 생성되는 요소($element2)를 붙여준다. 
$ulList.insertBefore($listItem4, $listItem1);

var $input = document.querySelectorAll('input[type=text]');
// console.log($input); //배열 객체로 반환.
var $list = document.querySelectorAll("[id^=list]");
//list list1 list2 list3 list4
// console.log($list);
$ulList = document.querySelector("ul#list");
//document.querySelector("#list") === document.getElementById('list');
// console.log($ulList);
//querySelector();
//셀렉터 검색(검색어)을 통해 요소를 찾는다. 단, 첫번째 해당하는 요소 하나만 반환.
//querySelectorAll();
//셀렉터 검색(검색어)을 통해 요소를 찾는다. 문서상에 있는 모든 요소. 목록 반환.
//querySelector(), querySelectorAll().
//**** 원하는 방식으로 요소를 찾아낼 수 있다. ****
for(var i = 0;i < $input.length; i++){
    console.log($input[i]);
    console.log($input[i].getAttribute("name"));
    console.log($input[i].hasAttribute('value')); //Boolean 반환.
    if($input[i].hasAttribute('value')){
        $input[i].removeAttribute('value');
    }
    console.log($input[i]);
}
//getAttribute();
//hasAttribute();
//setAttribute();
//removeAttribute();