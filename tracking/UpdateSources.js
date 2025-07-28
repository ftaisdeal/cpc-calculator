const UpdateSources = async function (req, res) {
  const fs = require('fs');
  const path = require('path');
  
  try {
    // Get the data from the form
    const data = req.body.data;
    
    if (!data) {
      return res.status(400).send('No data provided');
    }
    
    // Convert the data object to the sources array format
    const sourcesArray = Object.values(data);
    
    // Create the module.exports content
    const content = `module.exports = ${JSON.stringify(sourcesArray, null, 2)};`;
    
    // Write to sources.js file
    const sourcesPath = path.join(__dirname, 'sources.js');
    fs.writeFileSync(sourcesPath, content);
    
    // Redirect back to tracking page
    res.redirect('/tracking');
    
  } catch (error) {
    console.error('Error updating sources:', error);
    res.status(500).send('Error updating sources');
  }
};

module.exports = UpdateSources;
