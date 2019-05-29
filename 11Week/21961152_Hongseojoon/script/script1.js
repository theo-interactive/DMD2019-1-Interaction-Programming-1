      var $tabMenu = document.querySelector("#tab_menu");
      var $tabMenuEl = $tabMenu.querySelectorAll('a');

      var $tabContent = document.getElementsByClassName('tab_content');

      for(var i = 0; i < $tabMenuEl.length; i++){
        tabMenuClick(i);
      }
      function tabMenuClick(index){

        $tabMenuEl[index].addEventListener('click', function(e){
          e.preventDefault();
          console.log(index);
          for(var i = 0; i < $tabMenuEl.length; i++){

            $tabMenuEl[i].classList.remove('select');
            $tabContent[i].classList.remove('select');
            if(i === index){
              $tabMenuEl[i].classList.add('select');
              $tabContent[i].classList.add('select');
            }
          }
        });
      }
