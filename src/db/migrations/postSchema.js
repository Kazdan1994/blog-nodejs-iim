const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater')

mongoose.plugin(slug)

const PostSchema = new mongoose.Schema({
    title: String,
    slug: {
        type: String,
        slug: 'title'
    },
    description: String,
    image: String,
    body: String,
    published: {
        type: Boolean,
        default: true,
    }
})

module.exports = PostSchema;
