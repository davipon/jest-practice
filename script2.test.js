/**
 * @jest-environment node
 */
import axios from 'axios';
import { getPeople } from './script2';

it('calls swapi to get people', async () => {
  expect.assertions(2);
  const data = await getPeople(axios);
  expect(data.count).toEqual(82);
  expect(data.results.length).toBeGreaterThan(5);
});
