const express = require('express');
const bodyParser  = require("body-parser");
const app = express();
const jsonfile = require('jsonfile')

const file = '/tmp/data.json'
const obj = {name: 'JP'}
jsonfile.writeFile(file, obj, function (err) {
    console.error(err)
  })

require('./Routes/userRoutes')(app);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running`);
});
app.use(bodyParser.json());