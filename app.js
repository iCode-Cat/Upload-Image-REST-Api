const express = require('express');
const ejs = require('ejs');
const cors = require('cors');
const app = express();
const upload = require('./router/upload');

// Settings

const PORT = process.env.PORT || 5000;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(cors());

// Routess
app.use('/image/upload', upload);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
