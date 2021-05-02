{
  const obj = {
    name: 'ellie'
  };
  // 'ellie'에 접근하는 방법
  obj.name; // ellie
  obj['name']; // index 접근하듯이

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };
  type Name = Animal['name']; // string
  const text: Name = 'hello';

  type Gender = Animal['gender']; // 'male'|'female'
  type Keys = keyof Animal; // union type으로 모두 할당된다.
  // 'name' | 'age' | 'gender'라는 문자열 union
  const key: Keys = 'age';
  type Person = {
    name: string;
    gender: Animal['gender'];
  };
  const person: Person = {
    name: 'ellie',
    gender: 'male'
  };
}
