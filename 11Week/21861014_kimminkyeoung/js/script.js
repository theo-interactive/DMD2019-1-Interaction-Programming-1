var $tabmenu = document.querySelector('#tab-menu');
var $tabmenuEl = document.querySelectorAll('a');
var $tabContent = document.getElementsByClassName('tab-content');

// a의 갯수만틈 세줌
for(var i = 0; i < $tabmenuEl.length; i++){
     tabMenuClick(i);
}

function tabMenuClick(index){
     // i 의 순서를 체크할 수 있게 index의 전달인자로 할당.
     $tabmenuEl[index].addEventListener('click',function(e){
       e.preventDefault();
       for(var i = 0 ; i< $tabContent.length; i++){
         // 모든 요소에서 .selected 삭제
         // .selected 는 클릭된 탭의 상태 css 
         $tabmenuEl[i].classList.remove('selected');
         $tabContent[i].classList.remove('selected');
         if(i === index){
           // for 반복문이 실행될 때 
           $tabmenuEl[i].classList.add('selected');
           $tabContent[i].classList.add('selected');
         }
       }
     });
}


var $tomiTitle = document.getElementById("tomi-title");
$tomiTitle.addEventListener('mouseover',function(e){
     e.preventDefault();
     $tomiTitle.classList.add('tomi-title1');
})
$tomiTitle.addEventListener('mouseout',function(e){
     e.preventDefault();
     $tomiTitle.classList.remove('tomi-title1');
})

var $ebTitle = document.getElementById("eb-title");
$ebTitle.addEventListener('mouseover',function(e){
     e.preventDefault();
     $ebTitle.classList.add('eb-title1');
})
$ebTitle.addEventListener('mouseout',function(e){
     e.preventDefault();
     $ebTitle.classList.remove('eb-title1');
})


var $nkTitle = document.getElementById("nako-title");
$nkTitle.addEventListener('mouseover',function(e){
     e.preventDefault();
     $nkTitle.classList.add('nako-title1');
})
$nkTitle.addEventListener('mouseout',function(e){
     e.preventDefault();
     $nkTitle.classList.remove('nako-title1');
})


var $hwTitle = document.getElementById("hw-title");
$hwTitle.addEventListener('mouseover',function(e){
     e.preventDefault();
     $hwTitle.classList.add('hw-title1');
})
$hwTitle.addEventListener('mouseout',function(e){
     e.preventDefault();
     $hwTitle.classList.remove('hw-title1');
})



