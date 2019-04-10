# 5 WEEK

5주차 과제입니다.

'학번_이름(반드시 영문으로 표기)' 폴더를 생성하고 'index.html' 파일(파일생성시 영문으로 표기)을 생성하고 js 폴더 생성, 폴더 내부에 script.js 파일을 생성합니다.
반드시 index.html 에 외부 js 파일을 로드하여 작성합니다.

## Quest

### Quest 1.
1) getEven 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
2) 입력된 전달인자의 숫자를 기준으로 0부터 해당하는 수까지 짝수만 구분하여 아래 형식의 문자열로 반환합니다.
3) even1 변수를 선언하고 getEven(10) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
```
반환 문자열 형식 : 짝수, 짝수, … 짝수, 짝수.
getEven(10) 결과 : 2, 4, 6, 8, 10.
```

### Quest 2.
1) getStar 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
2) 입력된 전달인자가 숫자가 아닌 경우 '숫자만 입력가능합니다.’ 라는 문구가 console 에 출력되고 false 를 반환합니다.
3) 입력된 전달인자의 숫자인 경우 전달인지의 수만큼 '*' 가 반복되는 문자열을 반환합니다.
4) star1 변수를 선언하고 getStar("text") 의 반환값을 할당받아 아래의 결과값과 같이 console 에 출력되도록 작성합니다.
5) star2 변수를 선언하고 getStar(5) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
```
getStar("text") 결과 : false
getStar(5) 결과 : *****
```

### Quest 3.
1) 'Apple', 'Orange', 'Grape', 'Melon' 를 요소로 가지는 fruit 라는 이름의 배열 객체를 생성합니다.
2) 'Mango' 를 fruit 배열 객체의 앞에 추가합니다.
3) fruit 배열 객체의 ‘Orange' 요소 순서 뒤에 'Cherry' 요소를 추가합니다.
4) fruit 배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.

### Quest 4.
1) getSize 라는 함수를 선언합니다.
2) 윈도우 콘텐츠 영역의 넓이값과 높이값을 아래 객체 형식과 같이 반환합니다.
3) winSize 변수를 선언하고 getSize() 의 반환값을 할당받습니다.
4) 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
```
객체 형식 : { winWidth : __윈도우 콘텐츠 영역의 넓이값__, winHeight : __윈도우 콘텐츠 영역의 높이값__ }
문자열 결과 : 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.
```

## 제출기한

4월 10일 (수) 23:00 까지 업로드

## 외부 JavaScript 파일 사용하기

```
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>5WEEK</title>
</head>
<body>
<h1>5WEEK - 4/4</h1>
<script src="./js/script.js" type="text/javascript"></script>
</body>
</html>
```