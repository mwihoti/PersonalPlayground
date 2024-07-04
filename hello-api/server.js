const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome. We are using endpoint /api/hello?visitor_name=YourName to get a personalized greeting.');
});

app.get('/api/hello', async (req, res) => {
    const userName = req.query.visitor_name || 'Guest';

    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    const locationResponse = await axios.get(`https://ipapi.co/${clientIp}/json/`);
    const locationData = locationResponse.data;
    const location = locationData.city || locationData.country_name || 'Unknown Location';

    console.log(`Location Data: ${JSON.stringify(locationData)}`);
    const weatherResponse = await fetch(`http://api.weatherapi.com/v1/current.json?key=ee8ad2cfff40408aaed130943240407&q=${location}`);
    if (!weatherResponse.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const weatherData = await weatherResponse.json();
    const temp = weatherData.current.temp_c;

    res.json({
        client_ip: clientIp,
        location: location,
        greeting: `Hello, ${userName}!, the temperature is ${temp} degrees Celsius in ${location}`
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
