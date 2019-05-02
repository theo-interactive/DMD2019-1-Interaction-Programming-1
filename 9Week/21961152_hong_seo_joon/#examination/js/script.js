//.1

//alert('Hello , world'+'!');

//.2

array = ['Iron Man', 'Captain America', 'Hulk', 'Thor', 'Spider-Man'];
console.log(array)

for(var i = 0; i < 1; i++)
{
    array.push('Doctor Strange');
}
console.log(array,array.length);

array.shift(1,0, 'Iron Man');
console.log(array ,array .length);

array.splice(3 , 1, 'Captain Marvel');
console.log(array ,array .length);

//.3

var fun = function(_number)
 {
     var result = 'true';
        if(typeof _number !== 'String'){
            console.log('숫자만 입력 가능합니다.')
                return true; 
                

        }else{
            var result = 'false';
            for(var i = 0; i <_number; i++)

            {
               
                    result += 'false';
            }
            return result;
        }
 }
        var fun = fun("text");
            console.log(fun);


//.4
    
    
         

            object = {
                greeting : '안녕하세요',
                myName : '홍서준 입니다.',
                today : '오늘은',
                month : 5,
                separate : '2',
                day : 2,
                is : '입니다.',
                luck : '행운을 빕니다.'
                };
                

                for(var key in object){
                    console.log(key + ':'+object[key]);

    }

//.5
 // html 문서 이름 변경 완료.


    //.6
    btn_student_number = document.getElementById("student-number");

    console.log("student-number");
    
    function getElementById(){
        var name = prompt('* 리스너 호출 경고창 문구.');
    if(name !== null)
        {
                if(name === '21961152')
                {
                    console.log(name);
                    alert('(1) : 학번이 입력되었습니다.')
                    return getElementById();
                }
                else
                    {
                            if(name === '홍서준'){
                                alert('(2) : 이름이 입력되었습니다.')
                                return getElementById();
                            }
    
                    }
    
        }
    
            document.write(name);
    
        }
        getElementById();

//7

btn_odd = document.getElementById("숫자를 입력해주세요");

//8
var getEven = function (_number){

    var result = "";
    for(var i = 0; i <=_number; i++){
        if(i>0){
        if(i % 2===0){

                console.log(i); //짝수 홀수 구분하기
                //짝수
                if(result !== ','){ 
            
                result += ',';
                }
                    result += i;
                }else{
            
        
            }
        }
    
    }
    result += ',';
    //결과값 반환
 return result;
}