const Post = require('../db/models/postModel');

exports.index = async function (req, res) {
    const posts = await Post
        .find()
        .sort({
            updatedAt: -1,
            createdAt: -1,
        });

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

exports.new = async function (req, res) {
    res.render('new', {
        title: 'Ecrire un article'
    })
}

exports.edit = async function (req, res) {
    const post = await Post.findOne({ slug: req.params.post })

    res.render('edit', {
        title: 'Editer un article',
        post,
    })
}

exports.create = async function (req, res) {
    await Post.create(req.body);

    res.redirect('/');
}

exports.update = async function (req, res) {
    await Post.updateOne({ slug: req.params.post }, req.body);

    res.redirect('/');
}

exports.delete = async function (req, res) {
    await Post.deleteOne({ slug: req.params.post });

    res.redirect('/');
}
