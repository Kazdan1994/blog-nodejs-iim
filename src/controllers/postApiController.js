const PostService = require('../services/postService');

exports.index = async function (req, res) {
    const posts = await PostService.find();

    res.send({ posts })
}

exports.show = async function (req, res) {
    const post = await PostService.findOne(req.params.post);

    res.send({ post })
}