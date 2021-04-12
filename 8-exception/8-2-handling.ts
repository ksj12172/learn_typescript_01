{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new Error('no network!');
    }
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
