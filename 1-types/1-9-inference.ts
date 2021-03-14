{
  /**
   * Type Inference
   * 프로젝트에서 함수 작성할 때 보통 복잡.
   * 타입을 명시하는 것이 좋다
   */
  // 선언함과 동시에 문자열을 할당하여 typescript에서 string이라고 타입을 추론한다
  let text = 'hello';
  // 기본값을 보고 string 타입으로 생각한다
  function print(message='hello') {
    console.log(message);
  }
  // 자동으로 return 값을 number라고 추론한다
  function add(x:number,y:number) {
    return x+y;
  }
  const result = add(1,2);
}