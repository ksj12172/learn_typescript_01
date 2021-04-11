// either : a or b
// L이라는 타입, R이라는 타입, 임의의 타입 받아서 반환하도록 하기
// 길게 쓰지 않고 한 글자로 타입 쓴다
interface Either<L, R> {
  left: () => L;
  right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }
  right(): R {
    return this.rightValue;
  }
}

const either: Either<number, number> = new SimpleEither(4, 5);
either.left();
either.right();

const best = new SimpleEither({ name: 'either' }, 'hello');
console.log(best.left());
