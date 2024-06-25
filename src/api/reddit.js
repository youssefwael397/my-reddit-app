import axios from 'axios';

const BASE_URL = 'https://www.reddit.com/r/soccer';

export const getPosts = (category, after) => {
  const url = after
    ? `${BASE_URL}/${category}.json?after=${after}`
    : `${BASE_URL}/${category}.json`;
  return axios.get(url);
};
