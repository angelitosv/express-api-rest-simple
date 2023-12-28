const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const routerAPI = require('./routes');

app.use(cors());
app.use(express.json());

let logFile = fs.createWriteStream(path.join(__dirname, 'access.log'), {
	flags: 'a',
});
app.use(morgan('combined', { stream: logFile }));

app.get('/', (req, res) => {
	res.send('Backend');
});

routerAPI(app);

app.listen(PORT, () => {
	console.log(`Server Listenning on http://localhost:${PORT}`);
});
