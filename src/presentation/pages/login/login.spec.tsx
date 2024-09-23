import { render, RenderResult } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Login } from './login';

type SutTypes = {
  sut: RenderResult;
};

const makeSut = (): SutTypes => {
  const sut = render(<Login />);

  return { sut };
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
});
