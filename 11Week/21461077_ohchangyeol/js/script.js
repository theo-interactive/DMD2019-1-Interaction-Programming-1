// main
var $tabMenu = document.querySelector("#tab-menu");
var $tabMenuEl=$tabMenu.querySelectorAll("a");
var $tabContent = document.getElementsByClassName("tab-contents"); 
for (var i = 0; i < $tabMenuEl.length; i++) {
    tabMenuClick(i);
}
function tabMenuClick(index){
    $tabMenuEl[index].addEventListener("click", function(e){
        e.preventDefault();
        for (var i = 0; i < $tabMenuEl.length; i++) {
            $tabMenuEl[i].classList.remove("selected");
            $tabContent[i].classList.remove("selected");
            if(i === index){
                $tabMenuEl[i].classList.add("selected");
                $tabContent[i].classList.add("selected");
            }          
        }
    })    
}
// inTab1
var $tabinTab = document.querySelector("#inTab");
// console.log($tabinTab);
var $tabinTabEl=$tabinTab.querySelectorAll("a");
var $tabinContent = document.getElementsByClassName("inContent");
for (var i = 0; i < $tabinTabEl.length; i++) {
    tabinTabClick(i);
    // tabinTabover(i);
}
function tabinTabClick(index){
    $tabinTabEl[index].addEventListener("click", function(e){
        e.preventDefault();
        for (var i = 0; i < $tabinTabEl.length; i++) {
            $tabinTabEl[i].classList.remove("selected2");
            $tabinContent[i].classList.remove("selected2");
            if(i === index){
                $tabinTabEl[i].classList.add("selected2");
                $tabinContent[i].classList.add("selected2");
            }          
        }
    })    
}
// function tabinTabover(index){
//     $tabinTabEl[index].addEventListener('mouseover',function(){
//         // console.log($tabinTabEl[index]);
//         // $tabinTabEl[index].classList.remove('intabline');
//         $tabinTabEl[index].classList.add('intabline');
//     })
//     $tabinTabEl[index].addEventListener('mouseout',function(){
//         // console.log($tabinTabEl[index]);
//         $tabinTabEl[index].classList.remove('intabline');
//         // $tabinTabEl[index].classList.add('intabline');
//     })
// }
console.log($tabinTabEl);   
// $tabinTabEl.addEventListener('mouseover',function(){
// console.log("로드됨");
// })
// inTab2
var $tabinTab2 = document.querySelector("#inTab2");
console.log($tabinTab2);
var $tabinTabEl2=$tabinTab2.querySelectorAll("a");
console.log($tabinTabEl2);
var $tabinContent2 = document.getElementsByClassName("inContents");
for (var i = 0; i < $tabinTabEl2.length; i++) {
    // tabinTabover2(i)
    tabinTab2Click(i);
}
function tabinTab2Click(index){
    $tabinTabEl2[index].addEventListener("click", function(e){
        e.preventDefault();
        for (var i = 0; i < $tabinTabEl2.length; i++) {
            $tabinTabEl2[i].classList.remove("selected3");
            $tabinContent2[i].classList.remove("selected3");
            if(i === index){
                $tabinTabEl2[i].classList.add("selected3");
                $tabinContent2[i].classList.add("selected3");
            }          
        }
    })    
}

var $btnDownload = document.querySelector('.download');
var $btnDownload2 = document.querySelector('.download2');
var $btnDownload3 = document.querySelector('.download3');
var $btnDownload4 = document.querySelector('.download4');
console.log($btnDownload);
$btnDownload.addEventListener("click", function(e){
    // $btnDownload.style.backgroundColor = "rgb(147, 175, 90)";
    alert("ㅎㅎ없어여>.<ㅋㅋㅋㅋㅋ");
    e.preventDefault();
})
$btnDownload.addEventListener("mousedown", function(e){
    $btnDownload.style.backgroundColor = "rgb(147, 175, 90)";
})
$btnDownload.addEventListener("mouseup", function(e){
    $btnDownload.style.backgroundColor = "yellowgreen";
})

$btnDownload2.addEventListener("click", function(e){
    e.preventDefault();
    alert("헤헤;;;....");
})
$btnDownload2.addEventListener("mousedown", function(e){
    $btnDownload2.style.backgroundColor = "rgb(175, 99, 68)";
})
$btnDownload2.addEventListener("mouseup", function(e){
    $btnDownload2.style.backgroundColor = "rgb(255, 147, 104)";
})

$btnDownload3.addEventListener("click", function(e){
    e.preventDefault();
    alert("띠용...");
})
$btnDownload3.addEventListener("mousedown", function(e){
    $btnDownload3.style.backgroundColor = "rgb(147, 175, 90)";
})
$btnDownload3.addEventListener("mouseup", function(e){
    $btnDownload3.style.backgroundColor = "yellowgreen";
})

$btnDownload4.addEventListener("click", function(e){
    e.preventDefault();
    alert("어케하는지몰라여~");
})
$btnDownload4.addEventListener("mousedown", function(e){
    $btnDownload4.style.backgroundColor = "rgb(175, 99, 68)";
})
$btnDownload4.addEventListener("mouseup", function(e){
    $btnDownload4.style.backgroundColor = "rgb(255, 147, 104)";
})

var $mouseTitle = document.querySelector('div#title');
console.log($mouseTitle);
$mouseTitle.addEventListener('mouseover', function(e){
    e.preventDefault();
    // console.log("dd");
        $mouseTitle.classList.remove("brown");
        $mouseTitle.classList.add("white");
        // $mouseTitle.classList.add("brown");
        // $mouseTitle.classList.remove("white");
});
$mouseTitle.addEventListener('mouseout', function(e){
    $mouseTitle.classList.add("brown");
    $mouseTitle.classList.remove("white");
});