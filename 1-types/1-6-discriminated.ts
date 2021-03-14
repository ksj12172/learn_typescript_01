{
  /**
   * 차별화할 수 있는 union
   */
  // function: login -> success, fail
  // 공통적인 property를 만들어서 구분하기 쉽게 한다
  type SuccessState = {
    result:'success';
    response: {
      body:string;
    };
  };
  type FailState = {
    result:'fail';
    reason:string;
  }
  type LoginState = SuccessState | FailState;
  // 사실 보통은 Promise<LoginState>임
  function login2(id:string, password:string):LoginState {
    return {
      result:'success',
      response:{
        body:'logged in!',
      }
    }
  }
  // printLoginState(state)
  // success -> body
  // fail -> 😭 reason
  // return void는 생략 가능하다
  function printLoginState2(state:LoginState):void {
    if (state.result === 'success') {
      console.log(`🥰 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}