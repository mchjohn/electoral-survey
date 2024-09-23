import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Login } from './login';

describe('Login component', () => {
  test('Should not render error on start app', () => {
    const { getByTestId } = render(<Login />);
    const formContent = getByTestId('form-content');

    expect(formContent.getElementsByTagName('span').length).toBe(0);
  });

  test('Should not render spinner inside the button on start app', () => {
    const { getByTestId } = render(<Login />);
    const formContent = getByTestId('form-button');

    expect(formContent.childElementCount).toBe(0);
  });
});
