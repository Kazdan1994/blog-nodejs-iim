const Joi = require('joi');

exports.createAccount = async function (req, res, next) {
    const schema = Joi.object({
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .required(),
        confirmPassword: Joi.ref('password'),
        email: Joi.string()
            .email()
            .required()
    })
        .with('password', 'confirmPassword');

    try {
        await schema.validateAsync(req.body);

        res.redirect('/');
    }
    catch (err) {
        next(err);
    }
}