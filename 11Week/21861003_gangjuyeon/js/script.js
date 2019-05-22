var $tabMenu = document.querySelector('#tab-menu');
    var $tabMenuEl = $tabMenu.querySelectorAll('a'); //list
    var $tabContent = document.getElementsByClassName('tab-content'); //list

    //메뉴 개수만큼 for문 돌리기
    for(var i = 0; i < $tabMenuEl.length; i++){
      tabMenuClick(i);
    }
    
    function tabMenuClick(index){
      //i 의 순서를 체크할 수 있게 index의 전달인자로 할당.
      $tabMenuEl[index].addEventListener('click', function(e){
        e.preventDefault();
        console.log(index);
        
        for(var i = 0; i < $tabMenuEl.length; i++){

          //순서차례 온 자기자신 빼고 다 지워버리기
          $tabMenuEl[i].classList.remove('selected');
          $tabContent[i].classList.remove('selected');

          if(i === index){
            //for 반복문이 실행될 때, 자신의 순서와 i 의 일치 여부를 체크.
            $tabMenuEl[i].classList.add('selected');
            $tabContent[i].classList.add('selected');
            //들어온 숫자랑 자기 순서랑 같다면 걔네만 조건 true >> selected class 추가.
          }
        }
      });
    }

    // console.log($tapMenu, $tapMenuEl);
    var $tabContent = document.getElementsByClassName('tab-content');
    // console.log($tapContent);