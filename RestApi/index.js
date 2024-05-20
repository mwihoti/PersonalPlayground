// Simple Express.js RESTFUL Api
'use strict';

const 
    port = 8888,
    express = require('express'),
    app = express();

app.get('/hello/:name?', (req, res) => 
    res
    .append('Access-Control-Allow-Origin', '*')
    .json(
        {message: `Hello ${req.params.name || 'World'}!`}
    )
);

// start server
app.listen(port, () =>
    console.log(`Server started on port ${port}`)
  );