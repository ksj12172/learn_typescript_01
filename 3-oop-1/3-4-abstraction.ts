{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  // 나는 이런 행동을 할 수 있어, contractor 계약서 같은 아이
  // interface에 I prefix 붙이는 사람들도 있고
  // 구현체에 Impl이라고 붙이는 사람도 있다
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }
  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }
  // 구현하지 않으면 에러 메시지 뜬다
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level

    // constructor : instance 만들 때 호출된다
    private constructor(private coffeeBeans: number) {}
    // 이 함수로 인스턴스 생성하기
    static makeMachine(coffeeBeans: number) {
      return new CoffeeMachine(coffeeBeans);
    }
    // 명시하지 않으면 public
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine...');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up...');
    }
    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false
      };
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }
  // //
  // const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  // maker.fillCoffeeBeans(32);
  // abstraction : 사용자가 simple하게 사용할 수 있다 ( 정말 필요한 함수만 노출 )
  // 접근제어자, interface, 정보은닉 활용
  // maker.makeCoffee(2);
  // 인터페이스에서 정의한 것들만 사용할 수 있다.
  // const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  // maker2.clean();

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log('coffee', coffee);
    }
  }
  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }
  // 쓸 수 있는 범위가 달라진다
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);
  amateur.makeCoffee();
  pro.makeCoffee(); // fillCoffeeBeans랑 cleaning까지
}
