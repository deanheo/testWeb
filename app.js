const express = require('express');
const app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server listen ${port}`));
