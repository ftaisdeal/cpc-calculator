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
    
    // Create the module.exports content with compact formatting
    const formattedSources = sourcesArray.map(source => 
      `  [${source.map(item => JSON.stringify(item)).join(', ')}]`
    ).join(',\n');
    
    const content = `module.exports = [\n${formattedSources}\n];`;
    
    // Write to sources.js file
    const sourcesPath = path.join(__dirname, 'sources.js');
    fs.writeFileSync(sourcesPath, content);
    
    // Clear the require cache for sources.js to force reload
    delete require.cache[require.resolve('./sources.js')];
    
    // Redirect back to tracking page with cache-busting parameter to force full reload
    res.redirect(`/tracking?t=${Date.now()}`);
    
  } catch (error) {
    console.error('Error updating sources:', error);
    res.status(500).send('Error updating sources');
  }
};

module.exports = UpdateSources;
