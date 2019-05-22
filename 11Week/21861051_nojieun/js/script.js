var $tabMenu = document.querySelector("#tab-menu");
    var $tabMenuEl = $tabMenu.querySelectorAll("a"); // list로 반환! 하나씩..확인..for문으로 돌리기~
    // console.log($tabMenu, $tabMenuEl);
    var $tabContent = document.getElementsByClassName("tab-content");
    // console.log($tabContent);
    for(var i =0; i<$tabMenuEl.length; i++){
        tabMenuClick(i);
    }
    function tabMenuClick(index){
        //i 의 순서를 체크할 수 있게 index의 전달인자로 할당.
        $tabMenuEl[index].addEventListener("click", function(event){
            event.preventDefault();
            console.log(index);
            for(var i = 0; i<$tabMenuEl.length; i++){
                $tabMenuEl[i]. classList.remove("selected");
                $tabContent[i].classList.remove("selected");
                if(i === index){
                    // 활성화 되어있는 클래스 자신이 선택되어 있을 때
                    $tabMenuEl[i].classList.add("selected");
                    $tabContent[i].classList.add("selected");
                }
            }
        })
    }
    var $bntChu = document.getElementById("chu");
    $bntChu.addEventListener("click", function(event){
      event.preventDefault();
      console.log("click");
      // var $chu = document.createElement("img");
      var myImage = new Image(200);
      myImage.src = 'img/jujup1.jpg';
      document.body.appendChild(myImage);
      myImage.style.position = "relative";
      myImage.style.top = 120 + "px";
      myImage.style.left = 110 + "px";
      myImage.style.border = "solid 5px black";
    })
