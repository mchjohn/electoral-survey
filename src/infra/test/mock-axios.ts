import { faker } from '@faker-js/faker';
import axios from 'axios';
import { Mocked } from 'vitest';

export const mockAxios = (): Mocked<typeof axios> => {
  const mockedAxios = axios as Mocked<typeof axios>;
  mockedAxios.post.mockResolvedValue({
    data: faker.person,
    status: faker.number,
  });

  return mockedAxios;
};
