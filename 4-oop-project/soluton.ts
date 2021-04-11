{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    // next: StackNode | undefined; 아래와 같이 표현한다(값이 없을수도 있는 경우)
    readonly next?: StackNode;
  };

  class StackImpl implements Stack {
    private head?: StackNode; // stackNode를 가리킬 수 있다
    // readonly && 내부에서만 변경하게 만들기
    private _size: number = 0;
    get size() {
      return this._size;
    }
    // 보통은 자료구조 만들 때 initial value 만들면 좋다
    constructor(private capacity: number) {}
    push(value: string) {
      if (this.size === this.capacity) {
        throw new Error('Stack is full!');
      }
      const node: StackNode = {
        value,
        next: this.head // 기존 것의 맨 위
      };
      this.head = node; // head 갱신
      this._size++;
    }
    // undefined를 return 하지 않는다. 받는 쪽이 null 체크해야해
    // typescript strict null 체크한다.
    // this.head === undefined하면 null일 때 통과한다
    pop(): string {
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
  const stack = new StackImpl(10);
  stack.push('Ellie 1');
  stack.push('Bob 2');
  stack.push('Steve 3');
  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
