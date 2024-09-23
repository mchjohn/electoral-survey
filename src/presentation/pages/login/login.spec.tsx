import { fireEvent, render, RenderResult } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { IValidation } from '@/presentation/protocols/validation';
import { Login } from './login';

class ValidationSpy implements IValidation {
  errorMessage: string;

  input: object;

  validate(input: object): string {
    this.input = input;
    return this.errorMessage;
  }
}

type SutTypes = {
  sut: RenderResult;
  validationSpy: ValidationSpy;
};

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy();

  const sut = render(<Login validation={validationSpy} />);

  return { sut, validationSpy };
};

describe('Login component', () => {
  test('Should not render error on start app', () => {
    const {
      sut: { getByTestId },
    } = makeSut();

    const formContent = getByTestId('form-content');

    expect(formContent.getElementsByTagName('span').length).toBe(0);
  });

  test('Should not render spinner inside the button on start app', () => {
    const {
      sut: { getByTestId },
    } = makeSut();

    const formButton = getByTestId('form-button');

    expect(formButton.childElementCount).toBe(0);
  });

  test('Should start with the button disabled when starting the app', () => {
    const {
      sut: { getByTestId },
    } = makeSut();

    const formButton = getByTestId('form-button') as HTMLButtonElement;

    expect(formButton.disabled).toBe(true);
  });

  test('Should call Validation with correct e-mail', () => {
    const {
      sut: { getByTestId },
      validationSpy,
    } = makeSut();

    const emailInput = getByTestId('email');

    fireEvent.input(emailInput, { target: { value: 'any_email' } });

    expect(validationSpy.input).toEqual({
      email: 'any_email',
    });
  });

  test('Should call Validation with correct password', () => {
    const {
      sut: { getByTestId },
      validationSpy,
    } = makeSut();

    const passwordInput = getByTestId('password');

    fireEvent.input(passwordInput, { target: { value: 'any_password' } });

    expect(validationSpy.input).toEqual({
      password: 'any_password',
    });
  });
});
