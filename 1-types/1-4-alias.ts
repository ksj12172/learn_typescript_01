{
  // Type Aliases
  // 내가 타입을 만들 수 있다.
  type Text = string;
  const name:string="ellie";
  const name2:Text='ellie';
  const address:Text = 'korea';
  
  type Num=number;
  type Student = {
    name:string;
    age:number;

  };
  const student:Student = {
    name:'ellie',
    age:12,
  }

  /**
   * String Literal Types
   * 값 자체를 타입으로 정할 수 있다
   */
  type Name='name'; 
  let ellieName:Name;
  ellieName = 'name';
  type JSON = 'json';
  const json:JSON = 'json';

  type Boal=true;//true만 할당할 수 있다
  const isCat:Boal = true;
}