const express = require('express');
const app = express();
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

//1 MIDDLWARE
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
  console.log('hello from the middleware');
  next();
});
app.use((req, res, next) => {
  req.requesTime = new Date().toISOString();
  // console.log('hello from the middleware');
  next();
});
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello', app: 'natoours' });
});

//2 Route handler

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);
// app.post('/api/v1/tours', createTour);

//3. Route
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// app.post('/', (req, res) => {
//   res.send('has been post');
// });

// 4. Start server
module.exports = app;
