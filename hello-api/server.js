const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Welcome to the API. Use the endpoint /api/hello?visitor_name=YourName to get a personalized greeting.');
});

app.get('/api/hello', async (req, res) => {
    const userName = req.query.visitor_name  || 'Guest';

    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    const location = 'Kenya';

    const temp = 12;

    res.json ({
        client_ip: clientIp,
        location: location,
        greeting: `Hello, ${userName}, the temperature is ${temp}`
    })
})

app.listen(port, () => {
    console.log(`Server is runing on ${port}`)
})