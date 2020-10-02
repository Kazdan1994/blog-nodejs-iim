const PostService = require('../services/postService');

exports.index = async function (req, res) {
    const posts = await PostService.find();

    res.send({ posts })
}

exports.show = async function (req, res) {
    const post = await PostService.findOne(req.params.post);

    res.send({ post })
}

exports.create = async function (req, res) {
    const post = await PostService.create(req.body);

    res.send({ post });
}

exports.update = async function (req, res) {
    const post = await PostService.updateOne(req.params.post, req.body);

    res.send({ post });
}

exports.delete = async function (req, res) {
    await PostService.deleteOne(req.params.post);

    res.send({
        message: 'Post supprimé.'
    });
}