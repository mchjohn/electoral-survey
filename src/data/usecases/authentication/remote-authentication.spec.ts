import { describe, expect, test } from 'vitest';

import { IHttpPostClient } from '@/data/protocols/https/http-post-client';
import { RemoteAuthentication } from './remote-authentication';

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    class HttpPostClientSpy implements IHttpPostClient {
      url?: string;

      async post(url: string): Promise<void> {
        this.url = url;
        return Promise.resolve();
      }
    }

    const httpPostClientSpy = new HttpPostClientSpy();
    const url = 'any_url';

    const sut = new RemoteAuthentication(url, httpPostClientSpy); // System under test: Objeto sendo testado [RemoteAuthentication]
    await sut.auth();

    expect(httpPostClientSpy.url).toBe(url);
  });
});
