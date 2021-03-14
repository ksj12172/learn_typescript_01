{
  /**
   * Union Types:OR
   * 타입스크립트에서 활용도가 높다
   * 발생할 수 있는 많은 case 중에 딱 하나만 담을 수 있을 때 사용한다
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction:Direction) {
    console.log(direction);
  }
  move('up');

  type TileSize = 8 | 16 | 32;
  const tile:TileSize = 8; // 위에 정의된 것중 하나만 값을 부여할 수 있다

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body:string;
    };
  };
  type FailState = {
    reason:string;
  }
  type LoginState = SuccessState | FailState;
  // 사실 보통은 Promise<LoginState>임
  function login(id:string, password:string):LoginState {
    return {
      response:{
        body:'logged in!',
      }
    }
  }
  // printLoginState(state)
  // success -> body
  // fail -> 😭 reason
  // return void는 생략 가능하다
  function printLoginState(state:LoginState):void {
    if ('response' in state) {
      console.log(`🥰 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}