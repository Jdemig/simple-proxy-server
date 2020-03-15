var proxy = require('express-http-proxy');
var cors = require('cors');
var app = require('express')();
var axios = require('axios');
var fetch = require('node-fetch');

app.use(cors());

app.use('*', (req, res) => {
  fetch('https://www.reddit.com/r/christianmemes.json')
    .then(resp => resp.json())
    .then(resp => {
      res.send(resp);
    })
})

//app.use('*', proxy('http://www.reddit.com'));

app.listen(3000, () => console.log('Listening on port 3000'));

