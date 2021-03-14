import axios from 'axios';

export const getPeople = async (get) => {
  const response = await get('https://swapi.dev/api/people');
  const data = await response.data;
  return {
    count: data.count,
    results: data.results,
  };
};

getPeople(axios);
