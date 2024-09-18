import { faker } from '@faker-js/faker';
import axios from 'axios';
import { describe, expect, Mocked, test, vitest } from 'vitest';

import { HttpPostParams } from '@/data/protocols/http';
import { AxiosHttpClient } from './axios-http-client';

vitest.mock('axios');
const mockedAxios = axios as Mocked<typeof axios>;
const mockedAxiosResult = {
  data: faker.person,
  status: faker.number,
};
mockedAxios.post.mockResolvedValue(mockedAxiosResult);

const makeSut = (): AxiosHttpClient => new AxiosHttpClient();

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.person,
});

describe('AxiosHttpClient', () => {
  test('should call axios with correct URL, verb and body', async () => {
    const request = mockPostRequest();

    const sut = makeSut();
    await sut.post(request);

    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });

  test('should return the correct status code and body', async () => {
    const sut = makeSut();
    const httpResponse = await sut.post(mockPostRequest());

    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data,
    });
  });
});
