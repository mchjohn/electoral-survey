import { describe, expect, test } from 'vitest';

import { HttpPostClientSpy } from '@/data/test/mock-http-client';
import { RemoteAuthentication } from './remote-authentication';

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const httpPostClientSpy = new HttpPostClientSpy();
    const url = 'any_url';

    const sut = new RemoteAuthentication(url, httpPostClientSpy); // System under test: Objeto sendo testado [RemoteAuthentication]
    await sut.auth();

    expect(httpPostClientSpy.url).toBe(url);
  });
});
