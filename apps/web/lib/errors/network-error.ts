export class NetworkError extends Error {
  constructor(message: string = "A network error occurred.") {
    super(message);
    this.name = "NetworkError";
  }
}
