{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    // member 변수에 키워드 필요없다
    coffeeBeans: number = 0; // 초기값, instance level
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level

    // constructor : instance 만들 때 호출된다
    constructor(coffeeBeans: number) {
      // this.~ : class 안에 들어있는 변수
      // 함수 인자로 받은 coffeeBeans는 this 안 붙여
      this.coffeeBeans = coffeeBeans;
    }
    static makeMachine(coffeeBeans: number) {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false
      };
    }
  }
  const maker = new CoffeeMaker(32);
  console.log(maker);
  console.log(maker.makeCoffee(2));
  console.log(CoffeeMaker.makeMachine(32));
}
