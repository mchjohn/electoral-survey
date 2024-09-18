import axios from 'axios';
import { describe, expect, Mocked, test, vitest } from 'vitest';

import { mockAxios } from '@/infra/test';

import { mockPostRequest } from '@/data/test';

import { AxiosHttpClient } from './axios-http-client';

vitest.mock('axios');

type SutTypes = {
  sut: AxiosHttpClient;
  mockedAxios: Mocked<typeof axios>;
};

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient();
  const mockedAxios = mockAxios();

  return {
    sut,
    mockedAxios,
  };
};

describe('AxiosHttpClient', () => {
  test('should call axios with correct URL, verb and body', async () => {
    const request = mockPostRequest();

    const { sut, mockedAxios } = makeSut();
    await sut.post(request);

    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });

  test('should return the correct status code and body', () => {
    const { sut, mockedAxios } = makeSut();
    const promise = sut.post(mockPostRequest());

    expect(promise).toEqual(mockedAxios.post.mock.results[0].value);
  });
});
