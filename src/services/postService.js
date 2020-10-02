const Post = require('../db/models/postModel');

exports.find = async function () {
    return Post
        .find()
        .sort({
            updatedAt: -1,
            createdAt: -1,
        });
}

exports.findOne = async function (slug) {
    return Post
        .findOne({ slug });
}

exports.create = async function (body) {
    return Post
        .create(body);
}

exports.updateOne = async function (slug, body) {
    return Post.findOneAndUpdate({ slug }, body, { new: true });
}

exports.deleteOne = async function (slug) {
    return Post.deleteOne({ slug });
}
