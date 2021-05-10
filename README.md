# start_typescript

start studying typescript

https://academy.dream-coding.com/ 에서 수업 들으며 작성한 코드

- js에는 없고 ts에는 있는 것 : interface, generics, types => 객체지향 프로그래밍 가능

* compile하면 prototype 기반

- prototype-based programming

* 상속과 재사용을 위한 것
* a style of OOP
* behavior reuse(inheritance)
* by reusing existing objects

- ts는 javascript를 기반으로 한다. js를 잘 이해해야 ts를 잘 개발할 수 있다.

* js도 객체지향 프로그래밍을 할 수 있기는 하다. prototype이 있기 때문
* js의 class도 prototype 기반

- prototype : 상속(inheritance)을 구현할 때 사용한다.

* 대략적인 그림을 만든다, 추상화한다.
* 반복적으로 쓰일 수 있도록 속성과 함수들을 정의한다.

* this

- 다른 언어에서 : 만들어진 객체, 그 자신을 가리킨다.
- js : 누가 부르냐에 따라서 달라질 수 있다. 동적으로 변경된다

* 모듈

- 파일 안에 코드를 모듈화해서 작성
- 코드를 파일 내부에 한정 가능
- 서로 다른 파일에서는 다른 파일에 있는 것들을 접근하거나 볼 수 없다. export, import 해야 한다.

* TSConfig 셋업하기
  tsc 파일이름 -w : js 파일이 생긴다. 업데이트할 때마다
  tsc --init : tsconfig.json 파일이 생긴다, compiler option이 들어있다.
  tsc -w:tsconfig 있는 경로에 업데이트된 것들이 실시간으로 js파일로 변환된다
  보통 컴파일된 파일들을 따로 폴더에 저장한다. tsconfigdml outDir 옵션에 설정, 이후 tsc 명령어 입력하면 build 폴더가 생기고 안에 js파일이 담긴다,
  - src 폴더 안에 ts파일들이 있다면 해당 경로를 최상위로 판단하고 그 파일들이 따로 폴더에 들어가있지 않은채로 build 파일에 js파일로 들어간다, root dir에 ts 파일들이 있으면 디렉토리가 유지돼서 build 폴더에 들어간다.
  - root dir에 ts파일 생성못하게 막기: rootDir:"./src"

- exclude하기
  {
  "compilerOptions":{},
  "exclude":["./src/dev.ts"]
  }
  -include하기
  "include" 옵션임
