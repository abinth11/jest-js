const axios = require('axios');

async function fetchPosts() {
  try {
    console.log('called')
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch posts');
  }
}

module.exports = fetchPosts;
