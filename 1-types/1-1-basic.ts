//local scope로 작성한다
{
  // number
  const num:number = 123;
  // string
  const str:string = 'hello';
  // boolean
  const boal:boolean = false;

  //undefined : 값이 있는지 없는지 아무것도 결정되지 않은 상태
  // union type (undefined로만 선언하지는 않는다)
  let age:number|undefined; // 보편적으로는 null보다 undefined과 함께 사용
  age = undefined;
  age = 1;
  function find():number|undefined {
    return undefined;
  }
  //null : 값이 없다고 명확하게 알려줌
  let person:null; // 쓰지 말기
  let person2:string|null;
  
  //unknown:무엇이 들어갈지 알 수 없음
  // 사용하지 않는 것이 좋다
  // 타입스크립트에서 자바스크립트 라이브러리 사용할 때 사용
  let notSure:unknown =0;
  notSure = 'he';
  notSure = true;

  // any: 안쓰는게 좋다
  let anything:any = 0;
  anything = 'hello';

  // void
  function print(): void {
    console.log('hello');
    return;
  }
  //변수에 쓰면 undefined만 들어갈 수 있다.
  // 따라서 잘 안 쓴다
  let unusable:void=undefined;
  
  // never : return할 계획이 전혀 없음
  // 절대 다르 것을 return할 수 없는 경우 명시하기 위해 사용한다
  function throwError(message:string):never {
    // message -> server(log)
    throw new Error(message); 
  }
  function throwError2(message:string):never {
    // message -> server(log)
    while(true) {

    }
  }

  // object : 원시타입 제외한 모든 객체 가능
  // 쓰지 않는게 좋다. 
  let obj:object = [1,2,3];
  function acceptSomeObject(obj:object) {

  }
  acceptSomeObject({name:'ellie'});
  acceptSomeObject({animal:'dog'})
}