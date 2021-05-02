// 조금 다른 형태로 변환 가능
type Video = {
  title: string;
  author: string;
  description: string;
};
// 다음과 같이 다 쓰지 않아도 되는 방법!
// type VideoOptional = {
//   title?: string;
//   author?: string;
//   description?: string;
// };
// type VideoReadonly = {
//   readonly title: string;
//   readonly author: string;
//   readonly description: string;
// };

// 모든 key들을 돌면서 for ... in 비슷한 동작을 한다
type Optional<T> = {
  [P in keyof T]?: T[P];
};
type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};
type VideoOptional = Optional<Video>;
const videoOp: VideoOptional = {
  title: 'hi'
};
const video1: ReadOnly<Video> = {
  title: 'title',
  author: 'author',
  description: 'description'
};
// video1.author = 나중에 재할당하려고하면 에러난다 ( readonly )

type Nullable<T> = { [P in keyof T]: T[P] | null };
const obj2: Nullable<Video> = {
  title: null,
  author: null,
  description: null
};

type Proxy<T> = {
  get(): T;
  set(value: T): void;
};
type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>;
};
type Animal = {
  name: string;
  age: number;
};
const animal: Optional<Animal> = {
  name: 'dog'
};
