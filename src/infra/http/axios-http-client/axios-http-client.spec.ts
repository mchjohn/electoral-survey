import { faker } from '@faker-js/faker';
import axios from 'axios';
import { describe, expect, Mocked, test, vitest } from 'vitest';

import { HttpPostParams } from '@/data/protocols/http';
import { AxiosHttpClient } from './axios-http-client';

vitest.mock('axios');
const mockedAxios = axios as Mocked<typeof axios>;

const makeSut = (): AxiosHttpClient => new AxiosHttpClient();

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.person,
});

describe('AxiosHttpClient', () => {
  test('should call axios with correct URL and verb', async () => {
    const request = mockPostRequest();

    const sut = makeSut();
    await sut.post(request);

    expect(mockedAxios.post).toHaveBeenCalledWith(request.url);
  });
});
