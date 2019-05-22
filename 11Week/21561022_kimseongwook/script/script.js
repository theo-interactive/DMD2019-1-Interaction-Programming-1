    var $tabMenu = document.querySelector("#tab-menu");
    var $tabMenuEl = $tabMenu.querySelectorAll('a');
    //console.log($tabMenu, $tabMenuEl);
    var $tabContent = document.getElementsByClassName('tab-content');
    //console.log($tabContent);
    for(var i = 0; i < $tabMenuEl.length; i++){
      tabMenuClick(i);
    }
    function tabMenuClick(index){
      $tabMenuEl[index].addEventListener('click', function(e) {
        e.preventDefault();
        console.log(index);
        for(var i = 0; i < $tabMenuEl.length; i++){
          $tabMenuEl[i].classList.remove('selected');
          $tabContent[i].classList.remove('selected');
          if(i === index){
            $tabMenuEl[i].classList.add('selected');
            $tabContent[i].classList.add('selected');
          }
        }
        //for(var i = 0; i < $tabContent.length; i++){
        //  $tabContent[i].classList.remove('selected');
        //  if(i === index){
        //    $tabContent[i].classList.add('selected');
        //  }
       // }
    });
}