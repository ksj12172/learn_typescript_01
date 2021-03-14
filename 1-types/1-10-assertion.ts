{
  /**
   * Type Assertions
   * 쓰는거 비추
   * 100% 타입 장담할 때만 쓰기
   */
  function jsStrFunc():any {
    return 'hello';
  }
  const result = jsStrFunc();
  // result가 분명히 string이니까 casting한다
  // 문자열에서 사용 가능한 api 사용 가능
  console.log((result as string).length);
  console.log((<string>result).length);
  // 알고보니 string이 아니었다면?
  // 코드 작성 시점에는 에러 발생X
  // string이 아니었다면 undefined라고 한다.
  const wrong:any=5;
  // 런타임에서 죽는다
  console.log((wrong as Array<number>).push(3));

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  // !: 값이 있다고 확신할 때(null,undefined 아니라고 확신할 때)
  // 또는 함수 끝에 느낌표 붙일 수 있다
  // const numbers = findNumbers()!;
  numbers!.push(2);

  const button = document.querySelector('button')!; // 100%확신
}