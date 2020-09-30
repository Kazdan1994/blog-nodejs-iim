const { Seeder } = require('mongoose-data-seed');
const faker = require('faker');
const slug = require('slug');
const Post = require('../models/postModel');

const data = [];
let title;

for (let i = 0; i < 10; i++) {
  title = faker.lorem.words(3)

  data.push({
    title,
    slug: slug(title),
    description: faker.lorem.sentence(),
    image: faker.image.imageUrl(),
    body: faker.lorem.paragraphs(10, "\n")
  })
}

class PostsSeeder extends Seeder {

  async shouldRun() {
    return Post.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return Post.create(data);
  }
}

module.exports = PostsSeeder;
