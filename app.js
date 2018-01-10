const express = require('express')
const app = express();


app.get('/', (req, res) => {
  res.sendfile(__dirname + '/public/index.html');
})

app.listen(3000);
