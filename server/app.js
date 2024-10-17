import express from 'express';
import bodyParser from 'body-parser';

import 'dotenv/config';
import cors from 'cors';
import studentsRoute from './Routes/student.route.js';
import dbconnection from './Database/studentdb.js';
import locationRoute from './Routes/location.route.js';


dbconnection()
  .then((res) => {
    console.log("db connected");
    // console.log(res);
  })
  .catch(err => {
    console.log("error", err);
  });



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/assets',express.static('assets'))

app.use("/students", studentsRoute);
app.use("/location",locationRoute);

app.listen(process.env.PORT, () => {
  console.log("app started");
});

