const ipLocations = async (req, res) => {
  try {
    const mysql = require('mysql2/promise');
    const db_config = require('../admin/db_config');
    const getLocationInfo = require('./geo-location');
    
    const pool = mysql.createPool(db_config);
    
    // Get unique IP addresses from the database for the specified source and time period
    const source = req.body.source;
    const days = parseInt(req.body.days, 10) || 30;
    const [rows] = await pool.query(`
      SELECT DISTINCT ip_address, COUNT(*) as hits
      FROM referrers 
      WHERE source = ? AND date_time >= NOW() - INTERVAL ? DAY
      GROUP BY ip_address 
      ORDER BY hits DESC
    `, [source, days]);
    
    const locationData = [];
    
    // Process each IP address
    for (const row of rows) {
      try {
        const [city, region, country, coordinates] = await getLocationInfo(row.ip_address);
        locationData.push({
          ip: row.ip_address,
          hits: row.hits,
          city: city || 'Unknown',
          region: region || 'Unknown',
          country: country || 'Unknown',
          coordinates: coordinates || 'Unknown'
        });
      } catch (error) {
        console.error(`Error getting location for IP ${row.ip_address}:`, error);
        locationData.push({
          ip: row.ip_address,
          hits: row.hits,
          city: 'Error',
          region: 'Error',
          country: 'Error',
          coordinates: 'Error'
        });
      }
    }
    
    // Add cache-busting headers to ensure fresh data
    res.set({
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Surrogate-Control': 'no-store'
    });
    
    res.json(locationData);
  } catch (error) {
    console.error('Error in IP location lookup:', error);
    res.status(500).json({ error: 'Failed to lookup IP locations' });
  }
};

module.exports = ipLocations;
