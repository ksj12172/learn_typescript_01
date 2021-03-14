{
  /**
   * Let's make a calculator
   */
  function calculate(operation:string,num1:number,num2:number):number|null {
    switch (operation) {
      case "add":
        return num1+num2;
      case "substract":
        return num1-num2;
      case "multiply":
        return num1*num2;
      case 'devide':
        return num1/num2;
      case 'remainder':
        return num1%num2;
      default:null
    }
  }
  console.log(calculate('add',1,3));
}