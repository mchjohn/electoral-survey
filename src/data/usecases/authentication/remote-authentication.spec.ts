import { faker } from '@faker-js/faker';
import { describe, expect, test } from 'vitest';

import { HttpStatusCode } from '@/data/protocols/http/http-response';
import { HttpPostClientSpy } from '@/data/test/mock-http-client';

import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error';
import { UnexpectedError } from '@/domain/errors/unexpected-error';
import { mockAuthentication } from '@/domain/test/mock-authentication';

import { RemoteAuthentication } from './remote-authentication';

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};

// Design pattern Factory
const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthentication(url, httpPostClientSpy); // System under test: Objeto sendo testado [RemoteAuthentication]

  return { sut, httpPostClientSpy };
};

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);

    await sut.auth(mockAuthentication());

    expect(httpPostClientSpy.url).toBe(url);
  });

  test('Should call HttpPostClient with correct body', async () => {
    const authenticationParams = mockAuthentication();
    const { sut, httpPostClientSpy } = makeSut();

    await sut.auth(authenticationParams);

    expect(httpPostClientSpy.body).toEqual(authenticationParams);
  });

  test('Should throw UnexpectedError if HttpPostClient returns 400', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    };

    const promise = sut.auth(mockAuthentication());

    expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test('Should throw InvalidCredentialsError if HttpPostClient returns 401', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized,
    };

    const promise = sut.auth(mockAuthentication());

    expect(promise).rejects.toThrow(new InvalidCredentialsError());
  });

  test('Should throw NotFoundError if HttpPostClient returns 404', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    };

    const promise = sut.auth(mockAuthentication());

    expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test('Should throw ServerError if HttpPostClient returns 500', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    };

    const promise = sut.auth(mockAuthentication());

    expect(promise).rejects.toThrow(new UnexpectedError());
  });
});
