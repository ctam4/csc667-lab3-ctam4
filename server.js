const express = require('express'); // package.json
const myHandlerFunction = require('./moduleDemo.js'); // local
const app = express();
const port = process.env.PORT_NUMBER || 3000;

app.get('/abc', myHandlerFunction);
app.use(express.static('./public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
