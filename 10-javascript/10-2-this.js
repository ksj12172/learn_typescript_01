console.log(this);
function simpleFunc() {
  console.log(this);
}
// window. : 함수가 window에 등록된다.
simpleFunc(); // this: window,global

class Counter {
  count = 0;
  increase = function() {
    console.log(this);
  };
}
const counter = new Counter();
counter.increase(); // this : counter{count:0,increase:f}
// const caller = counter.increase;
// caller(); // this : undefined
const caller = counter.increase.bind(counter);
caller(); // this : counter
/**
 * bind하거나
 * 함수 선언할 때 arrow function으로 함수를 선언한다
 * => 선언될 당시의 this를 유지한다
 *
 * 함수 선언문 : window.함수로 호출가능
 * 반면,
 * const, let으로 변수를 선언하면
 * 선언된 변수는 window에 등록되지 않는다.
 * <-> var로 선언된 변수는 window에 등록된다.
 * - 문제점 : 호이스팅 문제, 선언했어도 재정의 가능
 * - window에서 접근 가능하다.
 */
class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // this : bob, bob이 불렀기 때문
