# CPC Calculator

A Node.js web application for tracking and calculating Cost Per Click (CPC) metrics from various marketing sources, with QR code generation and analytics dashboard capabilities.

## Features

- **Click Tracking**: Track clicks from multiple sources with source parameters
- **Analytics Dashboard**: Protected admin area with Chart.js visualizations
- **QR Code Generation**: Generate QR codes for tracking URLs
- **IP Geolocation**: Track visitor locations using IP addresses
- **Real-time Analytics**: View click statistics over customizable time periods
- **Source Management**: Dynamic configuration of tracking sources

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MySQL with mysql2 driver
- **Authentication**: Basic HTTP Authentication
- **QR Codes**: qrcode library
- **Environment**: dotenv for configuration
- **Development**: nodemon for auto-restart

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd CPC_Calculator
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables by creating a `.env` file:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_database

# Server Configuration
PORT=3000

# Admin Credentials
ADMIN_USER=admin
ADMIN_PASSWORD=password
```

4. Set up the MySQL database and create the required table:
```sql
CREATE TABLE referrers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    source VARCHAR(255),
    referrer TEXT,
    ip_address VARCHAR(45),
    date_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Usage

### Development
```bash
npm run dev
```
or
```bash
nodemon index.js
```

### Production
```bash
npm start
```
or
```bash
node index.js
```

## API Endpoints

### Public Routes
- `GET /` - Home page with click tracking
- `POST /generate` - Generate QR codes for tracking URLs
- `POST /sources` - Update tracking sources (protected)

### Protected Routes (Basic Auth Required)
- `GET /tracking` - Analytics dashboard
- `POST /ip-locations` - IP location lookup

## URL Parameters

Add tracking parameters to any URL:
```
https://yourdomain.com/?src=youtube
https://yourdomain.com/?src=backstage
```

Supported sources (configurable in `tracking/sources.js`):
- `s1` - Source 1
- `s2` - Source 2  
- `s3` - Source 3
- `s4` - Source 4

**Note:** Four sources are included by default, with a default cost value of $100 for each.

## Configuration

Edit `config/config.js` to set the URL of your website and your administrative email address:

```javascript
module.exports = {
  URL: 'https://yourwebsite.com',
  adminEmail: 'youremail@yourwebsite.com'
};
```

### Sources Configuration

You have two options for updating your sources:
- **Manual editing:** Directly edit `tracking/sources.js` to add or modify tracking sources.
- **User interface:** Use the 'Edit Sources' section in the web dashboard to update sources through the UI, which will automatically update `sources.js` for you.

Example manual configuration:
```javascript
module.exports = [
  ["Source Name", "parameter", "#color", "cost"],
  ["YouTube", "yt", "#8a8", "0"],
  // Add more sources...
];
```

### Database Configuration
Configure database connection in `admin/db_config.js` using environment variables.

## File Structure

```
├── index.js                 # Main server file
├── package.json            # Dependencies and scripts
├── admin/
│   └── db_config.js        # Database configuration
├── pages/
│   └── Home.js             # Home page handler
├── public/
│   ├── styles.css          # Stylesheet
│   ├── favicon.png         # Site icon
│   └── OG-default.png      # Open Graph image
└── tracking/
    ├── Tracking.js         # Analytics dashboard
    ├── UpdateSources.js    # Source management
    ├── qr-generator.js     # QR code generation
    ├── ip-locations.js     # Geolocation services
    ├── sources.js          # Source configuration
    └── codes/              # Generated QR codes directory
```

## Analytics Dashboard

Access the analytics dashboard at `/tracking` with admin credentials to view:
- Click statistics over time
- Source-specific performance metrics
- Customizable date ranges
- Interactive charts powered by Chart.js

## QR Code Generation

Generate QR codes for tracking URLs:
1. Use the `/generate` endpoint with form data
2. QR codes are saved in the `tracking/codes/` directory
3. Files are also copied to the user's Desktop

## IP Address Lookup

The default IP address lookup uses the IPinfo service, which has a rate limit of 45 requests per minute. If you expect higher traffic, consider upgrading your IPinfo plan or using a different geolocation provider.

## Security Features

- Basic HTTP authentication for admin routes
- Environment-based configuration
- Request logging for monitoring
- SQL injection protection with parameterized queries

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the [Creative Commons Attribution 4.0 International License (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

## Support

For issues and questions, please [create an issue](link-to-issues) or contact [your-email].
