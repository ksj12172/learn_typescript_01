{
  // javascript
  // function jsAdd(num1,num2) {
  //   return num1+num2;
  // }
  // // typescript
  // function add(num1:number,num2:number):number {
  //   return num1+num2;
  // }

  // // javascript
  // function jsFetchNum(id) {
  //   // code
  //   return new Promise((resolve,reject) => {
  //     resolve(100);
  //   })
  // }
  // // typescript
  // // Promise 중에서도 숫자를 return
  // function fetchNum(id:string):Promise<number> {
  //   return new Promise((resolve,reject)=>{
  //     resolve(100);
  //   })
  // }

  // Optional parameter : ?는 전달해도 되고 전달하지 않아도 된다
  function printName(firstName:string,lastName?:string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('Steve','Jobs');
  printName('Ellie'); // Ellie, undefined 출력된다
  printName('Anna', undefined);

  // Default parameter
  function printMessage(message:string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  // number[] : 숫자 타입의 배열
  function addNumbers(...nums:number[]) :number {
    return nums.reduce((acc,cur)=>acc+cur,0);
  }
  console.log(addNumbers(1,2,3));
  console.log(addNumbers(1,2,3,4,5));
}