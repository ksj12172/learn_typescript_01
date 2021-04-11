{
  /**
   *  stack 구현해보기
   *  array 사용하지 않기 => 연결리스트 사용ㅔ
   *  head: 가장 위에 있는 item을 가리킨다.
   *
   */

  interface Stack {
    readonly size: number; // field, instance property
    push(value: string): void;
    pop(): string;
  }
  class Node {
    next?: Node;
    constructor(public value: string) {}
    // maximum call stack size exceeded error
  }
  class MyStack implements Stack {
    private head?: Node;
    get size(): number {
      let num = 0;
      if (this.head) num += 1;
      else return num;
      let node = this.head;
      while (node.next) {
        num++;
        node = node.next;
      }
      return num;
    }
    push(item: string) {
      const node = new Node(item);
      node.next = this.head;
      this.head = node;
    }
    pop(): string {
      if (this.size === 0) {
        throw new Error('Stack is Empty');
      }
      let target = this.head;
      this.head = target.next;
      return target.value;
    }
  }
  const stack = new MyStack();
  stack.push('1');
  stack.push('2');
  stack.push('3');
  console.log('pop', stack.pop());
  console.log('cur stack', stack);
}
