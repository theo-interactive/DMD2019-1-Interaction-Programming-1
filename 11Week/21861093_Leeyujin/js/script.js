console.log("연결");

title.addEventListener('mouseover', function(e){
    e.preventDefault();
    title.classList.add('title1');
});
title.addEventListener('mouseout', function(e){
    e.preventDefault();
    title.classList.remove('title1');
});

var $tabMenu = document.querySelector("#tab-menu");
    var $tabMenuEl = $tabMenu.querySelectorAll('a'); //list. [... ... ... ...];
    var $tabContent = document.getElementsByClassName('tab-content'); //list [... ... ... ...];
    // console.log($tabMenu, $tabMenuEl);
    // console.log($tabContent);
    for(var i = 0; i < $tabMenuEl.length; i++){
      tabMenuClick(i);
    }
    function tabMenuClick(index){
      //i 의 순서를 체크할 수 있게 index 의 전달인자로 할당.
      $tabMenuEl[index].addEventListener('click', function(e) {
        e.preventDefault();
        for(var i = 0; i < $tabMenuEl.length; i++){
          //모든 요소에서 .selected 를 삭제.
          $tabMenuEl[i].classList.remove('selected');
          $tabContent[i].classList.remove('selected');
          if(i === index){
            //for 반복문이 실행될 때, 자신의 순서와 i 의 일치 여부를 체크.
            //같은 경우에 .selected 를 요소에 추가.
            $tabMenuEl[i].classList.add('selected');
            $tabContent[i].classList.add('selected');
          }
        }
        // for(var i = 0; i < $tabContent.length; i++){
        //   $tabContent[i].classList.remove('selected');
        //   if(i === index){
        //     $tabContent[i].classList.add('selected');
        //   }
        // }
      });
    }
