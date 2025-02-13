const Email = (res) => {
    const EmailTemplate = require('./EmailTemplate');
    const preview = EmailTemplate('First', 'token');
    res.send(`${preview}`);
}

module.exports = Email;