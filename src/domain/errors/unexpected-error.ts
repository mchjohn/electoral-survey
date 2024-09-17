export class UnexpectedError extends Error {
  constructor() {
    super('Sua solicitação expirou, tente novamente');
    this.name = 'UnexpectedError';
  }
}
