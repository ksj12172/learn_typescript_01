{
  /**
   * [ 완성 코드 아님, error state 소개하는 코드 ]
   */
  class TimeoutError extends Error {}
  class OfflineError extends Error {}
  type SuccessState = {
    result: 'success'; // discriminated union
  };
  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout'; // string union type
  };
  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    tryConnect(): ResultState {}
  }
  class UserService {
    // composition, dependency injection
    constructor(private client: NetworkClient) {}
    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch {
        // show dialog to user
      }
    }
  }
  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
