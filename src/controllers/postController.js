const PostService = require('../services/postService');

exports.index = async function (req, res) {
    const posts = await PostService.find();

    res.render('index', {
        title: 'Blog',
        posts,
        user: res.locals.user
    });
}

exports.show = async function (req, res) {
    const post = await PostService.findOne(req.params.post);

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
    const post = await PostService.findOne(req.params.post)

    res.render('edit', {
        title: 'Editer un article',
        post,
    })
}

exports.create = async function (req, res) {
    await PostService.create(req.body);

    res.redirect('/');
}

exports.update = async function (req, res) {
    await PostService.updateOne(req.params.post, req.body);

    res.redirect('/');
}

exports.delete = async function (req, res) {
    await PostService.deleteOne(req.params.post);

    res.redirect('/');
}
