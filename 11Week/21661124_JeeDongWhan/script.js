const photos = document.querySelectorAll(".photo");
const gallery = document.querySelector(".gallery");
let isOpen = false;
let activePhoto;

photos.forEach(photo => {
  photo.addEventListener("click", handleClick);
});

function handlePosition(photo) {
  const { width, height, top, left } = photo.getBoundingClientRect();
  photo.style.transform = `translateY(${innerHeight / 2 -
  height / 2 -
  top}px) translateX(${innerWidth / 2 - width / 2 - left}px) scale(1.7)`;
}

function handleClick(e) {
  activePhoto = e.target;
  photos.forEach(photo => photo.setAttribute("style", ""));
  handlePosition(activePhoto);
  activePhoto.classList.add("is-active");
  gallery.classList.add("is-expanded");
  setTimeout(() => {
    isOpen = true;
  }, 0);
}

function hide() {
  if (isOpen) {
    activePhoto.setAttribute("style", "position: relative; z-index: 1");
    activePhoto.classList.remove("is-active");
    gallery.classList.remove("is-expanded");
    isOpen = false;
  }
}

window.addEventListener("resize", hide);
document.addEventListener("click", hide);


// for demo

window.onload = () => document.querySelector(".loading").remove();

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img").forEach(img => {
    img.onerror = function () {
      this.style.display = "none";
    };
  });
});

//-------------------------------------------------------------------------------------------

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
