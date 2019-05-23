var $tabMenu = document.querySelector("#tab-menu");
        var $tabMenuEl = document.querySelectorAll('a');
        // console.log($tabMenu, $tabMenuEl);
        var $tabContent = document.getElementsByClassName('tab-content');
        //console.log($tabContent);
        var $tabContent2 = document.getElementsByClassName('tab-content2');

        for (var i = 0; i < $tabMenuEl.length; i++) {
            tabMenuClick(i);
        }

        function tabMenuClick(index) {
            //i의 순서 체크할 수 있게 인덱스의 전달인자로 활용
            $tabMenuEl[index].addEventListener('click', function(event) {
                event.preventDefault();
                //console.log(index);
                //해당 순서를 출력
                for (var i = 0; i < $tabMenuEl.length; i++) {
                    //모든 요소에서 셀렉티드 삭제
                    $tabMenuEl[i].classList.remove('selected');
                    $tabContent[i].classList.remove('selected');
                    $tabContent2[i].classList.remove('selected');
                    if (i === index) {
                        //포문 실행 시 자신의 순서와 i 일치하나 본다 같으면 셀렉티드 추가
                        $tabMenuEl[i].classList.add('selected');
                        $tabContent[i].classList.add('selected');
                        $tabContent2[i].classList.add('selected');
                    }
                }
                /*
                for(var i=0; i<$tapContent.length; i++){
                  $tabContent[i].classList.remove('selected');
                  if(i === index){
                    $tapContent[i].classList.add('selected');
                  }
                }
                */
            });
        }