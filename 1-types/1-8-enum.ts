{
  /**
   * Enum : 관련된 상수값들을 한 곳에 모아서 정의할 수 있다
   * typescript에서 자체적으로 제공
   * 관련된 상수값 관리
   * ex. 요일들을 정의할 때 묶고 싶은 경우
   */
  // javascript
  const MAX_NUM = 6;
  const MAX_STUDENT_PER_CLASS = 10;
  const MONDAY = 0;
  const DAYS_ENUM = Object.freeze({
    "MONDAY":0,"TUESDAY":1,"WEDNESDAY":2});
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript : 앞글자만 대문자
  // 값을 따로 입력하지 않으면 0,1,2,..
  // 1부터 시작하고 싶으면 Monday = 1써줘야
  // 문자열을 입력하면 수동적으로 값을 하나하나씩 다 입력해줘야 한다
  // Monday='monday',Tudesday = 'tudesday',
  enum Days {
    Monday, // 0
    Tudesday, // 1
    Wednesday, // 2
    Thursday, // 3
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Tudesday);
  let day:Days = Days.Saturday;

  /**
   * typescript에서 enum은 쓰지 않는게 좋다
   * enum으로 선언한 변수에 숫자를 할당할 수 있기 때문!
   * day = 10; (가능)
   * 타입이 정확하게 보장되지 않는다.
   * 대부분의 경우
   * union string literal type을 대신 활용 가능   * 
   */
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  let dayOfweek:DaysOfWeek='Monday';
  dayOfweek='Wednesday';
}