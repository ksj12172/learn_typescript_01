{
  type LoadingState = {
    state:'loading'
  }
  type SuccessState = {
    state:'success',
    response:{
      body:string;
    }
  }
  type FailState = {
    state:'fail',
    reason:string;
  }
  type ResourceLoadState = LoadingState|SuccessState|FailState;
  function printLoginState(state:ResourceLoadState):string {
    switch (state.state){
      case 'loading':
        return '👀 loading...';
      case 'success':
        return `😻 ${state.response.body}`;
      case 'fail':
        return `😱 ${state.reason}`;
      default:
        throw new Error('unknown state: '+state);
    }

  }
}