      var $tabMenu = document.querySelector("#tab-menu");
      var $tabMenuEl = $tabMenu.querySelectorAll('a'); //List. [... ... ... ...];
      // console.log($tabMenu, $tabMenuEl);
      var $tabContent = document.getElementsByClassName('tab-content'); //List. [... ... ... ...];
      // console.log($tabContent);
      for(var i = 0; i < $tabMenuEl.length; i++){
        tabMenuClick(i);
      }
      function tabMenuClick(index){
        //i의 순서를 체크할 수 있게 index의 전달인자로
        $tabMenuEl[index].addEventListener('click', function(e){
          e.preventDefault();
          console.log(index);
          for(var i = 0; i < $tabMenuEl.length; i++){
            //모든 요소에서 .selected 를 삭제
            $tabMenuEl[i].classList.remove('selected');
            $tabContent[i].classList.remove('selected');
            if(i === index){
              $tabMenuEl[i].classList.add('selected');
              $tabContent[i].classList.add('selected');
            }
          }
        });
      }
      
 