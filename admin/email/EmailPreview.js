const Email = (req, res) => {
    const EmailTemplateSubscribers = require('./EmailTemplateSubscribers');
    const EmailTemplateCast = require('./EmailTemplateCast');
    const EmailTemplateAudience = require('./EmailTemplateAudience');

    let list = req.query.list;

    if (list === 'cast') {
        ({ subject, text, html } = EmailTemplateCast('First'));
    } else if (list === 'audience') {
        ({ subject, text, html } = EmailTemplateAudience('First'));
    } else {
        ({ subject, text, html } = EmailTemplateSubscribers('First', 'token'));
    }

    res.send(html);
}

module.exports = Email;