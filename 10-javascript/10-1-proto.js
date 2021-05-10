const x = {};
const y = {};
/**
 * javascript에서 모든 object는 __proto__를 상속한다
 * constructor, hasOwnProperty, isPrototypeOf, propertyIsEnumerable, toLocaleString, toString, valueOf
 */
console.log(x); // __proto__ : Object
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__); // true

const array = [];
/**
 * length:0, __proto__ : Array(0); => concat, find, filter
 * 그리고 Array라는 proto안에는 object의 prototype도 있다 => toString, valueOf, watch
 */
console.log(array);

console.clear();

function CoffeeMachine(beans) {
  this.beans = beans; // fields, property
  // 만들어지는 instance마다 포함되므로 instance member level
  //   this.makeCoffee = shots => {
  //     console.log('making...');
  //   };
}
// prototype member level : __proto__안에 있다
CoffeeMachine.prototype.makeCoffee = shots => {
  console.log('making...');
};
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}
// coffeeMachine 상속하게 하기
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();
