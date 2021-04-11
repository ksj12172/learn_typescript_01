{
  // querySelector 같은 경우 null일 수 있음
  // 문제점 : 숫자만 가능
  function checkNotNull1(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number');
    }
    return arg;
  }
  // type이 보장되지 않는다, any 쓰는 것은 좋지 않다
  function checkNotNull2(arg: any | null): any {
    if (arg == null) {
      throw new Error('not valid number');
    }
    return arg;
  }
  // compile 시간에 타입을 보장받을 수 있다.
  // function checkNotNull<GENERIC>(arg: GENERIC | null): GENERIC {
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const number = checkNotNull(123);
  // error난다
  const boal: boolean = checkNotNull(true);
  console.log(number);
  console.log(boal);
}
