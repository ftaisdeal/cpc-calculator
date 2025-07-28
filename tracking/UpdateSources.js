const UpdateSources = async function (req, res) {
  
  const fs = require('fs').promises;
  const path = require('path');
  
  try {
    // Extract POST data from the request body
    const postData = req.body;
    
    console.log('Received POST data:', postData);
    
    // Check if data exists in the expected format
    if (postData.data) {      
      // Process the data array
      // postData.data should be in format: data[0][0], data[0][1], data[0][2], data[1][0], etc.
      const sourcesArray = [];
      
      // Convert the flat object structure back to nested arrays
      Object.keys(postData.data).forEach(outerKey => {
        const outerIndex = parseInt(outerKey);
        if (!sourcesArray[outerIndex]) {
          sourcesArray[outerIndex] = [];
        }
        
        Object.keys(postData.data[outerKey]).forEach(innerKey => {
          const innerIndex = parseInt(innerKey);
          sourcesArray[outerIndex][innerIndex] = postData.data[outerKey][innerKey];
        });
      });
      
      // Format the array as a JavaScript module export
      const formattedArray = sourcesArray.map(subArray => 
        `    [${subArray.map(val => `'${val}'`).join(', ')}]`
      ).join(',\n');
      
      const fileContent = `module.exports = [\n${formattedArray}\n  ];`;
      
      // Write to sources.js file
      const sourcesFilePath = path.join(__dirname, 'sources.js');
      await fs.writeFile(sourcesFilePath, fileContent, 'utf8');
      
      // Clear the require cache so the updated sources.js will be reloaded
      delete require.cache[require.resolve('./sources.js')];
      res.redirect('/tracking');
      
    } else {
      res.status(400).send('No data received');
    }
    
  } catch (error) {
    console.error('Error updating sources:', error);
  }
  
};

module.exports = UpdateSources;
