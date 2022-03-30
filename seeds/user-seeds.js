const sequelize = require('../config/connection');
const  { User, Post }   = require('../models');

const userdata = [
  {
    username: 'firstuser',
    email: 'firstuser@gmail.com',
    password: 'firstpassword'
  },
  {
    username: 'seconduser',
    email: 'seconduser@gmail.com',
    password: 'secondpassword'
  },
  {
    username: 'thirduser',
    email: 'thirduser@gmail.com',
    password: 'thirdpassword'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
