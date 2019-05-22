
var $menu = document.querySelector('#menu');

var $tabMenu = document.querySelector('#tab-menu'); //큰 메뉴
var $tabMenuEl = $tabMenu.querySelectorAll('a');    //해당하는 메뉴들
//console.log($tabMenu, $tabMenuEl);

var $tabContent = document.getElementsByClassName('tab-content')  //메뉴 안에 내용
//console.log($tabContent);

for(var i = 0; i < $tabMenuEl.length; i++){
  tabMenuClick(i);
}




function tabMenuClick(index){
  //i의 순서를 체크할 수 있게 index의 전달인자로 할당.
  $tabMenuEl[index].addEventListener("click", function(e){
  e.preventDefault();
  console.log(index);

  for(var i = 0; i < $tabMenuEl.length; i++){
    //모든 요소에서 .selected를삭제
    $tabMenuEl[i].classList.remove('selected'); //각각 요소에 있는 selected삭제 /일단 다 삭제
    $tabContent[i].classList.remove('selected');
  
    if(i === index){
      //for반복문에서 
      $tabMenuEl[i].classList.add('selected'); //i의 순서와 index가 일치 할 경우 해당하는 selected를 보여줌
      $tabContent[i].classList.add('selected');
    }
  }

  });
}