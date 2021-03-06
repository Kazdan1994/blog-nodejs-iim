const mongoose = require('mongoose');
const PostSeeder = require('./src/db/seed/posts.seeder');
const UserSeeder = require('./src/db/seed/users.seeder');

const mongoURL = 'mongodb://localhost/blog';

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
const seedersList = {
    UserSeeder,
    PostSeeder,
};
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
const connect = async () =>
  await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
});
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
const dropdb = async () => mongoose.connection.db.dropDatabase();

module.exports = {
    seedersList,
    connect,
    dropdb
}
