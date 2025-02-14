const Email = (req, res) => {
    const EmailTemplate = require('./EmailTemplate');
    const EmailTemplateCast = require('./EmailTemplateCast');

    let list = req.query.list;

    if (list === 'cast') {
        ({ subject, text, html } = EmailTemplateCast('First'));
    } else {
        ({ subject, text, html } = EmailTemplate('First', 'token'));
    }

    res.send(html);
}

module.exports = Email;