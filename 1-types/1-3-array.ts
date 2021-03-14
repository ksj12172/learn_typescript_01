{ // 배열 정의하는 두 가지 방법
  const fruits:string[] = ['🍅','🥝'];
  const scores: Array<number> = [1,3,4];
  // readonly: Array<string>은 사용 불가
  // object의 불변성 지키는 것 중요하다
  function printArray(fruits: readonly string[]) {

  }
  // tuple: 서로 다른 타입을 함께 가질 수 있음
  // 튜플 사용을 권장하지 않는다.
  // 인덱스로 접근하는게 가독성이 떨어진다
  let student:[string,number];
  student = ['name',123];
  student[0]; // name
  student[1]; // 123
  // student.name으로 접근하지 않고 인덱스로 접근하나
  // 튜플 대신 interface,type alias, class를 대체해서 사용하는게 좋다
  const [name,age] = student; // 이렇게 쓰면 그나마 나음
  // react에서 useState 쓰면 튜플 형태로 반환한다
  // 튜플을 잘 활용한 예
  const [count,setCount] = useState(0);

}