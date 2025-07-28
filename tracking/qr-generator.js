// Script: create-qrcode.js
// Description: Exports a function that generates a QR code image for a given URL.
// The output file is named "qr" + the value of the "src" param in the URL + ".png" and is saved
// in the "codes" directory and also downloaded to the user's Desktop.

const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');
const os = require('os');

/**
 * Generates a QR code PNG file for the given URL.
 * The file is saved as codes/qr<codeValue>.png where codeValue is the value of the "code" query param,
 * and is also copied to the user's Desktop as qr<codeValue>.png.
 * @param {string} url - The URL to encode in the QR code. Must contain a "src" query parameter.
 * @returns {Promise<{ codesFile: string, desktopFile: string }>} - Resolves to the output filenames on success.
 */
async function generateQrForUrl(url) {
  if (!url) {
    throw new Error('A URL must be provided.');
  }

  // Extract the value of "code" from the URL
  function extractCodeValue(url) {
    try {
      const urlObj = new URL(url);
      return urlObj.searchParams.get('src');
    } catch (e) {
      // Invalid URL
      return null;
    }
  }

  const codeValue = extractCodeValue(url);

  if (!codeValue) {
    throw new Error('The URL must contain a "src" parameter.');
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
  const outputFile = path.join(codesDir, `planeta-${sanitizedCode}.png`);

  // Generate QR code and save as PNG
  await QRCode.toFile(outputFile, url, {
    color: {
      dark: '#000',  // QR code color
      light: '#FFF'  // Background color
    }
  });

  // Also copy the file to the user's Desktop
  const desktopDir = path.join(os.homedir(), 'Desktop');
  const desktopFile = path.join(desktopDir, `planeta-${sanitizedCode}.png`);

  // Copy only if Desktop directory exists
  if (fs.existsSync(desktopDir)) {
    fs.copyFileSync(outputFile, desktopFile);
  } else {
    console.warn('Desktop directory does not exist! QR code not copied to Desktop.');
  }

  return { codesFile: outputFile, desktopFile: fs.existsSync(desktopDir) ? desktopFile : null };
}

/**
 * Express route handler for generating QR codes from form submissions.
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
async function handleQrGeneration(req, res) {
  const codeValue = req.body.code;
  if (!codeValue) {
    return res.status(400).end(); // No content response
  }

  const url = `https://planetatheshow.com?src=${encodeURIComponent(codeValue)}`;
  try {
    const { codesFile, desktopFile } = await generateQrForUrl(url);
    res.status(200).end(); // Just send success status, no content
  } catch (err) {
    console.error('QR Generation Error:', err.message); // Log error server-side
    res.status(500).end(); // Send error status, no content
  }
}

// If run directly from the command line, use the function with process.argv[2]
if (require.main === module) {
  const url = process.argv[2];
  generateQrForUrl(url)
    .then(({ codesFile, desktopFile }) => {
      console.log(`QR code for "${url}" saved as ${codesFile}`);
      if (desktopFile) {
        console.log(`QR code also copied to Desktop: ${desktopFile}`);
      }
    })
    .catch(err => {
      console.error('Error:', err.message);
      process.exit(1);
    });
}

module.exports = { generateQrForUrl, handleQrGeneration };