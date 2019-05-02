
//1번문제
alert("Hello, world!");

//2번문제
var array = ['Iron Man', 'Captain America', 'Hulk', 'Thor', 'Spider-Man'];
array.push("Doctor Strange");
console.log(array, array.length);
array.splice(3, 1, 'Captain Marvel');
console.log(array, array.length);
array.shift();
console.log(array, array.length);
array.reverse();
console.log(array, array.length);

//3번문제
function getStar(_number2){
    if(typeof _number2 === typeof 1){
        return true;       
    }
    else if(typeof _number2 !== typeof 1){
        return false;
    }
}

var star1 = getStar(5)
var star2 = getStar("text")

console.log(star1);
console.log(star2);

// 4번문제  잘 모르겠습니다.
    var _say = ["안녕하세요.", "신은빈 입니다.", "오늘은", "5","/","2","입니다.","행운을 빕니다" ];
    var result = " ";
    for(var i = 0; i < _say.length; i++){
        result += _say[i] + " ";
    }
    console.log(result);



// 5번 문제
document.title = "21561068_신은빈";



// 6번 문제
var Sbtn_Number = document.querySelector("button#btn-student-number");
Sbtn_Number.addEventListener("click", onClickBtnStudentNum);
function onClickBtnStudentNum(event) {
    document.querySelector("button#btn-student-number").innerText = "21561068"
    var result = "학번이 입력되었습니다.";
    alert(result);
}

var Sbtn_Name = document.querySelector("button#btn-student-name");
Sbtn_Name.addEventListener("click", onClickBtnStudentName);
function onClickBtnStudentName(event) {
    document.querySelector("button#btn-student-name").innerText = "신은빈"
    var result = "이름이 입력되었습니다.";
    alert(result);
}


// 7번문제

var Sbtn_odd = document.querySelector("button#btn-odd");
Sbtn_odd.addEventListener("click", onClickBtnodd);
function onClickBtnodd(event) {
    var odd = prompt("숫자를 입력해주세요");
    var result = "";
    for(var i = 0; i <= odd; i++) {
        if(i > 0){
            if(i % 2 === 1){
                if(result !== ""){
                    result += ", ";
                }
                
                result += i;
            }
        }
    }


    result += ".";
    console.log(result);
    document.querySelector("div#odd-result").innerText = result
}


//8번 문제 1,2 는되네요.  
var Sbtn_addNumber = document.querySelector("button#btn-add-item");
Sbtn_addNumber.addEventListener("click", onClickBtnadd);
function onClickBtnadd(event) {
    var add = prompt('숫자를 입력해주세요');
    if(add !== null && add !== ""){
        var addList = document.getElementById("list");
        var item = document.createElement("itme");
        item.innerHTML = add;
        addList.appendChild(item);
    }
}



//9


//10 

