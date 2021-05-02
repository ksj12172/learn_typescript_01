type PositionType = {
  x: number;
  y: number;
};
interface PositionInterface {
  x: number;
  y: number;
}

// 결합은 interface만 가능
interface PositionInterface {
  z: number;
}

const obj1: PositionType = {
  x: 1,
  y: 1
};
const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1
};
// class에서 구현이 가능하다
class Pos1 implements PositionType {
  x: number;
  y: number;
}
class Pos2 implements PositionInterface {
  x: number;
  y: number;
}
//extends
interface ZPoisitonInterface extends PositionInterface {
  x: number;
}
type ZPositionType = PositionType & { z: number };

// only interfaces can be merged
interface PositionInterface {
  z: number;
}

// type PositionType {

// }

// Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};
type Name = Person['name']; // string
type NumberType = number;
// interface는 불가
type Direction = 'left' | 'right';
