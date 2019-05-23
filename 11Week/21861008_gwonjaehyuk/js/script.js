console.log('load');
var $tabMenu = document.querySelector("#tab-menu");
  // 요소의 배열 list [ , , , ..]
  var $tabMenuEl = $tabMenu.querySelectorAll("a"); 
  // list [ , , , ... , ]
  var $tabContent = document.getElementsByClassName("tab-content");
  for(var i = 0; i<$tabMenuEl.length; i++){
    tabMenuClick(i);
  }
  function tabMenuClick(index) {
    // i의 순서를 체크할 수 있게 index의 전달인자로 할당.
    $tabMenuEl[i].addEventListener("click", function(e){
    e.preventDefault();
    console.log(index);
    for(var i = 0; i < $tabMenuEl.length; i++){
      // 모든 요소에서 .selected를 삭제.
      $tabMenuEl[i].classList.remove("selected");
      $tabContent[i].classList.remove("selected");
      // for 반복문이 실행될 때, 자신의 순서와 i의 일치 여부를 체크.
      // 같은 경우에 .selected를 요소에 추가.
      if(i === index) {
        $tabMenuEl[i].classList.add("selected");
        $tabContent[i].classList.add("selected");
      }
    }
})
}