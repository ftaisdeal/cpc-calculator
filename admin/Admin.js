const Admin = async function (res) {

  const { header } = require('../components');

  const content = `<h1>Email Sending Control</h1>
<button id="sendEmails">Start Sending Emails</button>
<p id="status"></p>
<script>
    document.getElementById('sendEmails').addEventListener('click', function() {
        fetch('/start-email-processing')
        .then(response => response.json())
        .then(data => {
            document.getElementById('status').innerText = data.status;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('status').innerText = "Error starting email process.";
        });
    });
</script>`;

  res.send(`${header('Admin')}
${content}
</body>
</html>`);

}

module.exports = Admin;