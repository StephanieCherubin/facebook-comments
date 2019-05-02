// import our dependencies...
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

// create instances
const app = express();
const router  = express.Router();

//set port to either a predetermined port number or 3001
const API_PORT = process.env.API_PORT || 3001;
// configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// set the route path & initialize the API
router.get('/', (req, res) => {
  res.json({ message: 'Use your platform! '});
});

// use router configuration when we call /api
app.use('/api', router);