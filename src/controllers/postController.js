const Post = require('../db/models/postModel');

exports.index = async function (req, res) {
    const posts = await Post.find();

    res.render('index', {
        title: 'Blog',
        posts,
        user: res.locals.user
    });
}

exports.show = async function (req, res) {
    const post = await Post.findOne({ slug: req.params.post });

    res.render('show', {
        title: post.title,
        post,
        user: res.locals.user
    })
}
