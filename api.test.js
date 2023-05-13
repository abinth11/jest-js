const axios = require('axios');
const fetchPosts = require('./api');

jest.mock('axios');

test('Fetching posts from API', async () => {
  const mockedResponse = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' }
  ];
  axios.get.mockResolvedValueOnce({ data: mockedResponse });

  const posts = await fetchPosts();

  expect(posts).toEqual(mockedResponse);
  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');
});

test('Fetching posts from API - Error', async () => {
  axios.get.mockRejectedValueOnce(new Error('API Error'));

  await expect(fetchPosts()).rejects.toThrow('Failed to fetch posts');
  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');

  axios.get.mockClear();
});
