const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const studentsRoute = require('./routes/students');
const careersRoute = require('./routes/careers');

const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/api/students', studentsRoute);
app.use('/api/careers', careersRoute);

//Connect to mongoDB Atlas
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to mongodb atlas');
  })
  .catch((error) => {
    console.log('Something wrong happened. ', error);
  });

/* mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('Database connected!'))
  .catch((err) => console.log(err));
 */
//Start server
app.listen(PORT, () => {
  console.log('Server started at PORT ', PORT);
});
