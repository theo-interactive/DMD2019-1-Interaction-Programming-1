var $tabMenu = document.querySelector("#tab-menu");
    var $tabMenuEl = $tabMenu.querySelectorAll("a");
    var $tabcontent = document.getElementsByClassName('tab-content');
    //console.log($tabMenu, $tabMenuEl);
    //console.log($tabcontent);
    for(var i =0; i<$tabMenuEl.length;i++){
      tabMenuClick(i);
      }

      function tabMenuClick(index){
        //i의 순서를 체크할 수 있게 index의 전달인자로 할당
        $tabMenuEl[index].addEventListener('click',function(e){
        e.preventDefault();
        console.log(index);
        for(var i = 0; i<$tabMenuEl.length; i++){
          $tabMenuEl[i].classList.remove('selected');
          $tabcontent[i].classList.remove('selected');
        if(i===index){
          //for 반복문이 실행될떄 자신의 순서와 i의 일치 여부를 체크
          //같은 경우에 .selected를 요소에 추가
          $tabMenuEl[i].classList.add('selected');
          $tabcontent[i].classList.add('selected');
          }
        }
        
        /*
        for(var i = 0; i<$tabcontent.length; i++){
          $tabcontent[i].classList.remove('selected');
          if(i===index){
            $tabcontent[i].classList.add('selected');
          }
        }
        */

        });
        
      }