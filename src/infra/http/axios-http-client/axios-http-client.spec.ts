import axios from 'axios';
import { describe, expect, Mocked, test, vitest } from 'vitest';

import { faker } from '@faker-js/faker';
import { AxiosHttpClient } from './axios-http-client';

vitest.mock('axios');
const mockedAxios = axios as Mocked<typeof axios>;

const makeSut = (): AxiosHttpClient => new AxiosHttpClient();

describe('AxiosHttpClient', () => {
  test('should call axios with correct URL and verb', async () => {
    const url = faker.internet.url();

    const sut = makeSut();
    await sut.post({ url });

    expect(mockedAxios.post).toHaveBeenCalledWith(url);
  });
});
