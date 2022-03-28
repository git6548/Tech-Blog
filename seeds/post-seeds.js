const { Post } = require('../models');

const postdata = [
  {
    title: 'This is the first post.',
    post_url: 'https://post1.com',
    user_id: 1
  },
  {
    title: 'This is the second post.',
    post_url: 'https://post2.com',
    user_id: 2
  },
  {
    title: 'This is the third post.',
    post_url: 'https://post3.com',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
