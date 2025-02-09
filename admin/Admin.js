const Admin = async function (res) {

  const { header } = require('../components');

  const content = `<b>Send Email Update</b>
<p>
<form action="email_update" method="POST">
<input type="hidden" name="user" value="admin">
<input type="hidden" name="password" value="email_update_password">
<select name="list">
<option value="cast" selected>cast</option>
<option value="subscribers">subscribers</option>
</select>
<p><input type="submit" value="send message" id="sendEmails" style="padding: 4px; border-radius: 6px; background-color: #aba;"></p>
</form>
</p>

<p id="status"></p>
<ul id="emailList"></ul>

<script>
document.getElementById('sendEmails').addEventListener('click', function() {
    fetch('/email_update')
    .then(response => response.json())
    .then(data => {
        document.getElementById('status').innerText = data.status;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('status').innerText = "Error starting email process.";
    });
});

// Function to fetch sent emails every 5 seconds
function updateEmailList() {
    fetch('/sent-emails')
    .then(response => response.json())
    .then(data => {
        const emailList = document.getElementById('emailList');
        emailList.innerHTML = ""; // Clear previous list
        data.forEach(email => {
            let li = document.createElement('li');
            li.textContent = email;
            emailList.appendChild(li);
        });
    })
    .catch(error => console.error('Error fetching sent emails:', error));
}

// Refresh the email list every 5 seconds
setInterval(updateEmailList, 5000);
</script>`;

  res.send(`${header('Admin')}
${content}
</body>
</html>`);

}

module.exports = Admin;