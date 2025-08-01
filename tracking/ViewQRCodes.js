const ViewQRCodes = async function (req, res) {
   const config = require('../config/config');
  const fs = require('fs');
  const path = require('path');
  const codesDir = path.join(__dirname, 'codes');
  
  try {
    // Get all PNG files in the codes directory
    const files = fs.readdirSync(codesDir)
      .filter(file => file.endsWith('.png'))
      .sort((a, b) => {
        // Sort by modification time, newest first
        const statsA = fs.statSync(path.join(codesDir, a));
        const statsB = fs.statSync(path.join(codesDir, b));
        return statsB.mtime - statsA.mtime;
      });

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>QR Codes</title>
  <link rel="stylesheet" href="/styles.css">
  <style>
    .qr-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    .qr-item {
      border: 1px solid #ccc;
      padding: 15px;
      text-align: center;
      background-color: #f9f9f9;
    }
    .qr-item img {
      max-width: 200px;
      height: auto;
      border: 1px solid #ddd;
    }
    .qr-filename {
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <span class="title">Planet <span style="color: #88c;">A</span></span>
    <h1>QR Codes</h1>
    <p><a href="/tracking">← Back to CPC Calculator</a></p>
    
    ${files.length === 0 ? '<p>No QR codes found.</p>' : `
    <div class="qr-grid">
      ${files.map(file => `
        <div class="qr-item">
          <img src="/qr-codes/${file}" alt="${file}">
          <div class="qr-filename">${file}</div>
          ${config.URL}?src=${file.split('-')[1]?.split('.')[0] || ''}
        </div>
      `).join('')}
    </div>
    `}
  </div>
</body>
</html>`;

    res.send(html);
  } catch (error) {
    console.error('Error reading QR codes directory:', error);
    res.status(500).send('Error loading QR codes');
  }
};

module.exports = ViewQRCodes;
