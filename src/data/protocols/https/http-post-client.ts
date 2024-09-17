/**
 * Ao definir como HttpPostClient e não HttpClient
 * fica mais fácil de manipular pois quando esta classe
 * for mocada só precisará ser mocado o método POST.
 * SOLID: ISP - Interface Segregation Principal.
 */
export interface IHttpPostClient {
  post(url: string): Promise<void>;
}
