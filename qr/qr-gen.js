// Script: qr-gen.js
// Description: Generates a QR code image for a given URL.
// Usage: node qr-gen.js "https://example.com?code=abc123"

// Required modules
const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// Get the URL from command line arguments
const url = process.argv[2];

if (!url) {
  console.error('Usage: node code-gen.js "<URL>"');
  process.exit(1);
}

// Extract the value of "code" from the URL
function extractCodeValue(url) {
  try {
    const urlObj = new URL(url);
    return urlObj.searchParams.get('code');
  } catch (e) {
    // Invalid URL
    return null;
  }
}

const codeValue = extractCodeValue(url);

if (!codeValue) {
  console.error('The URL must contain a "code" parameter.');
  process.exit(1);
}

// Sanitize code value for filename
function sanitizeForFilename(input) {
  return input.replace(/[^a-zA-Z0-9]/g, '_');
}

const sanitizedCode = sanitizeForFilename(codeValue);

// Ensure the 'codes' directory exists
const codesDir = path.join(__dirname, 'codes');
if (!fs.existsSync(codesDir)) {
  fs.mkdirSync(codesDir);
}

// Output file name in codes directory
const outputFile = path.join(codesDir, `qr-${sanitizedCode}.png`);

// Generate QR code and save as PNG
QRCode.toFile(outputFile, url, {
  color: {
    dark: '#000',  // QR code color
    light: '#FFF'  // Background color
  }
}, function (err) {
  if (err) {
    console.error('Error generating QR code:', err);
    process.exit(1);
  }
  console.log(`QR code for "${url}" saved as ${outputFile}`);
});