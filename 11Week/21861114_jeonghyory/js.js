
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
  });
}

//$("body").append("<div class='pseudo-header'></div>");
//fill div with clone of real header
//$( "header.header" ).clone().appendTo( ".pseudo-header" );

('.fade-content > *').css({'opacity':'0', 'transform': 'translateY(' + 2 + 'em)'});

$(window).on('scroll load', function(){
  $('.fade-content > *').each( function(i){
    var bottom_of_object = $(this).offset().top + $(this).outerHeight()/8;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if( bottom_of_window > bottom_of_object ){  
      $(this).css({'opacity':'0.75', 'transform': 'translateY(' + 0 + 'em)'});        
    } else {
      $(this).css({'opacity':'0', 'transform': 'translateY(' + 2 + 'em)'});
    }
  });
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	$("header.header").css({
		'opacity': 1 - (scroll/750)
	});
});

$(document).ready(function() {
  // create showDescription function
  function  showDescription() {
    //this will be done on event
        $(this).find('span').slideToggle();
  }

  $('.photos-list').on('mouseenter mouseleave', 'li', showDescription );
});


     