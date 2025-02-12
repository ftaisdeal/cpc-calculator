const Admin = async function (res) {

  const { header } = require('../components');

  const content = `<b>Send Email Update</b>

<form id="emailForm">
    <select name="list">
        <option value="subscribers">subscribers</option>
        <option value="cast">cast</option>
    </select>
    <input type="submit" value="send message" id="sendEmails" style="padding: 4px; border-radius: 6px; background-color: #aba;">
</form>

<p id="status"></p>

<ul id="emailList"></ul>

<script>
document.getElementById('emailForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    try {
        const response = await fetch('email_update', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jsonData)
        });

        const data = await response.json();
        document.getElementById('status').innerText = data.status;

        // Display sent and failed emails
        const emailList = document.getElementById('emailList');
        emailList.innerHTML = "emails sent";

        data.sentEmails.forEach(email => {
            let li = document.createElement('li');
            li.textContent = email;
            emailList.appendChild(li);
        });

        if (data.failedEmails.length > 0) {
            emailList.innerHTML += "<br><b>Failed Emails:</b>";
            data.failedEmails.forEach(email => {
                let li = document.createElement('li');
                li.textContent = email;
                li.style.color = 'red';
                emailList.appendChild(li);
            });
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('status').innerText = "Error starting email process.";
    }
});
</script>`;

  res.send(`${header('Admin')}
${content}
</body>
</html>`);

}

module.exports = Admin;