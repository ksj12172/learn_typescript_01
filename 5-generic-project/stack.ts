{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    // next: StackNode | undefined; 아래와 같이 표현한다(값이 없을수도 있는 경우)
    readonly next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private head?: StackNode<T>; // stackNode를 가리킬 수 있다
    // readonly && 내부에서만 변경하게 만들기
    private _size: number = 0;
    get size() {
      return this._size;
    }
    // 보통은 자료구조 만들 때 initial value 만들면 좋다
    constructor(private capacity: number) {}
    push(value: T) {
      if (this.size === this.capacity) {
        throw new Error('Stack is full!');
      }
      // node type 생략 가능
      const node: StackNode<T> = {
        value,
        next: this.head // 기존 것의 맨 위
      };
      this.head = node; // head 갱신
      this._size++;
    }
    // undefined를 return 하지 않는다. 받는 쪽이 null 체크해야해
    // typescript strict null 체크한다.
    // this.head === undefined하면 null일 때 통과한다
    pop(): T {
      // null == undefined
      if (this.head == null) {
        throw new Error('Stack is Empty');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }
  const stack = new StackImpl<string>(10);
  stack.push('Ellie 1');
  stack.push('Bob 2');
  stack.push('Steve 3');
  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>(10);
  stack2.push(123);
  stack2.push(456);
  stack2.push(789);
  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
}
