import { HttpResponse } from './http-response';

export type HttpPostParams = {
  url: string;
  body: object;
};

/**
 * Ao definir como HttpPostClient e não HttpClient
 * fica mais fácil de manipular pois quando esta classe
 * for mocada só precisará ser mocado o método POST.
 * SOLID: ISP - Interface Segregation Principal.
 */
export interface IHttpPostClient {
  post(params: HttpPostParams): Promise<HttpResponse>;
}
