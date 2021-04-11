{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  // public
  // private : 외부에서 볼 수 없음
  // protected : 자식 클래스에서만 접근이 가능하다
  class CoffeeMaker {
    // member 변수에 키워드 필요없다
    private coffeeBeans: number = 0; // 초기값, instance level
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level

    // constructor : instance 만들 때 호출된다
    private constructor(coffeeBeans: number) {
      // this.~ : class 안에 들어있는 변수
      // 함수 인자로 받은 coffeeBeans는 this 안 붙여
      this.coffeeBeans = coffeeBeans;
    }
    // 이 함수로 인스턴스 생성하기
    static makeMachine(coffeeBeans: number) {
      return new CoffeeMaker(coffeeBeans);
    }
    // 명시하지 않으면 public
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
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
  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(3);

  class User {
    constructor(private firstName: string, private lastName: string) {}
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      this.internalAge = num;
    }
  }
  const user = new User('Steve', 'Jobs');
  console.log(user.fullName); // Steve Jobs

  user.age = 6;
}
