// import our dependencies...
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import { getSecret } from './secrets'


// create instances
const app = express();
const router  = express.Router();

//set port to either a predetermined port number or 3001
const API_PORT = process.env.API_PORT || 3001;
// configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// db config -- set your URI from mLab in secrets.js
mongoose.connect(getSecret('dbUri'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// set the route path & initialize the API
router.get('/', (req, res) => {
  res.json({ message: 'Use your platform! '});
});

// use router configuration when we call /api
app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));