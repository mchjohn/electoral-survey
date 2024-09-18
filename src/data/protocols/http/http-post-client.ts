import { HttpResponse } from './http-response';

export type HttpPostParams<T> = {
  url: string;
  body?: T;
};

/**
 * Ao definir como HttpPostClient e não HttpClient
 * fica mais fácil de manipular pois quando esta classe
 * for mocada só precisará ser mocado o método POST.
 * SOLID: ISP - Interface Segregation Principal.
 */
export interface IHttpPostClient<T, R> {
  post(params: HttpPostParams<T>): Promise<HttpResponse<R>>;
}
