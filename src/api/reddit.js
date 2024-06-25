import axios from 'axios';

const BASE_URL = 'https://www.reddit.com/r/soccer';

export const getPosts = (category, after) => {
  const url = after
    ? `${BASE_URL}/${category}.json?after=${after}&limit=20`
    : `${BASE_URL}/${category}.json?limit=20`;
  return axios.get(url);
};
