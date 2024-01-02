const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

require('./Routes/userRoutes')(app);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running`);
});
