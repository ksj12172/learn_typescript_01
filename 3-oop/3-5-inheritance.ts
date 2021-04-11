{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level

    // constructor : instance 만들 때 호출된다
    constructor(private coffeeBeans: number) {}
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
  // 공통적인 기능 재사용 가능, 자식 클래스에서만 특화된 기능 가능
  // super: 부모클래스의 함수들을 호출하거나 접근할 수 있다
  class CaffeLatteMachine extends CoffeeMachine {
    // readonly : 한번 설정되고 바뀌지 않음
    constructor(beans: number, public readonly serialNumber: string) {
      // derived classes must contain a 'super'
      super(beans); // 생성자는 함수가 아니기 때문에 super()만 쓰면 된다
    }
    private steamMilk(): void {
      console.log('Steaming some milk...');
    }
    makeCoffee(shots: number): CoffeeCup {
      // super로 부모 클래스의 메서드 호출 가능
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true
      };
    }
  }
  const latteMachine = new CaffeLatteMachine(23, 'SSS');
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  console.log(latteMachine.serialNumber);
}
