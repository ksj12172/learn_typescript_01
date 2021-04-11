interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }
  workPartTime() {}
}
// FullTimeEmployee라는 정보를 잃는다.
// 해당 클래스의 메서드를 쓸 수 없게 된다
// pay(ellie) as FullTimeEmployee로 casting하면 좋지만 활용도는 좋지 않다
// 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수는 좋지 않다! 위험!
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}
// generic은 일반적인 타입, 어떤 타입이든 들어올 수 있다
// 따라서 조건을 달 수 있다
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);

const obj = {
  name: 'ellie',
  age: 20
};
// input과 output의 타입이 다른 경우
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
console.log(getValue(obj, 'name'));
console.log(getValue(obj, 'age'));
