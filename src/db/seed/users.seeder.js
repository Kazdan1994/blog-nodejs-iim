const { Seeder } = require('mongoose-data-seed');
const User = require('../models/userModel');

const data = [{
  username: 'Arthur',
  email: 'arthur@email.com',
  password: 'password'
}];

class PostsSeeder extends Seeder {

  async shouldRun() {
    return User.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return User.create(data);
  }
}

module.exports = PostsSeeder;
