const Email = (req, res) => {
    const EmailTemplate = require('./EmailTemplate');
    const EmailTemplateCast = require('./EmailTemplateCast');
    const EmailTemplateAudience = require('./EmailTemplateAudience');

    let list = req.query.list;

    if (list === 'cast') {
        ({ subject, text, html } = EmailTemplateCast('First'));
    } else if (list === 'audience') {
        ({ subject, text, html } = EmailTemplateAudience('First'));
    } else {
        ({ subject, text, html } = EmailTemplate('First', 'token'));
    }

    res.send(html);
}

module.exports = Email;