const Admin = async function (res) {

    const { header } = require('../components');
  
    const content = `<b>Send Email Update</b>
<p>preview <a href="/email_preview" target="__blank">subscriber</a> | <a href="/email_preview?list=cast" target="__blank">cast</a></p>
<form id="emailForm">
    <select name="list">
        <option value="cast">cast</option>
        <option value="subscribers">subscribers</option>
    </select>
    <input type="hidden" name="format" value="json"/>
    <input type="submit" value="send message" id="sendEmails" style="padding: 4px; border-radius: 6px; background-color: #aba;">
    <label>
        <input type="checkbox" id="confirmCheckbox"> confirm
    </label>
</form>
  
<p id="status"></p>
<ol id="emailList"></ol>
  
<script>
document.getElementById('emailForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    const confirmCheckbox = document.getElementById('confirmCheckbox');
    if (!confirmCheckbox.checked) {
        document.getElementById('status').innerText = "Please confirm by checking the checkbox.";
        return;
    }

    const formData = new FormData(this);
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    console.log('Form Data:', jsonData); // Debugging statement

    try {
        const response = await fetch('/email_update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jsonData) // Add the body parameter
        });

        if (!response.ok) {
            throw new Error('Network response not ok');
        }

        const data = await response.json();
        console.log('Response Data:', data); // Debugging statement
        document.getElementById('status').innerText = data.status;

        // Display sent and failed emails
        const emailList = document.getElementById('emailList');
        emailList.innerHTML = "sent emails";

        data.sentEmails.forEach(email => {
            let li = document.createElement('li');
            li.textContent = email;
            emailList.appendChild(li);
        });

        if (data.failedEmails.length > 0) {
            const failedHeader = document.createElement('b');
            failedHeader.innerHTML = "<br>failed emails";
            emailList.appendChild(failedHeader);

            data.failedEmails.forEach(email => {
                let li = document.createElement('li');
                li.textContent = email;
                li.style.color = 'red';
                emailList.appendChild(li);
            });
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('status').innerText = "Error starting email process";
    }
  });
  </script>`;
  
    res.send(`${header('Admin')}
  ${content}
  </body>
  </html>`);
  
  }
  
  module.exports = Admin;