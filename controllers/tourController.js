// const fs = require('fs');

const Tour = require('../moduls/tourModel');

// exports.checkID = (req, res, next, val) => {
//   // console.log(`toure id: ${val}`);
//   // if (req.params.id * 1 > tours.length)
//   //   return res.status(404).json({
//   //     status: 'fail',
//   //     message: 'invalid ID',
//   //   });
//   next();
// };

// exports.checkBody = (req, res, next) => {
//   // console.log(req.body);
//   if (!req.body.name || !req.body.price)
//     return res.status(400).json({
//       status: 'fail',
//       message: 'data does not complete',
//     });
//   next();
// };

exports.getAllTours = (req, res) => {
  res.status(200).json({
    requested: req.requesTime,
    // status: 'success',
    // result: tours.length,
    // data: {
    //   tours: tours,
    // },
  });
};

exports.getTour = (req, res) => {
  // console.log(req.params);
  // const id = req.params.id * 1;
  // const tour = tours.find((el) => el.id === id);
  // if (!tour)
  //   return res.status(404).json({
  //     status: 'fail',
  //     message: 'invalid ID',
  //   });
  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tours: tour,
  //   },
  // });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: 'updated',
    },
  });
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
  // const newTour = new Tour({});
  // newTour.save();

  // console.log(req.body);
  // const newId = tours[tours.length - 1].id + 1;
  // // eslint-disable-next-line node/no-unsupported-features/es-syntax
  // const newTour = { id: newId, ...req.body };
  // tours.push(newTour);
  // fs.writeFile(
  //   `${__dirname}/dev-data/data/tours-simple.json`,
  //   JSON.stringify(tours),
  //   () => {
  //     res.status(201).json({
  //       status: 'success',
  //       data: {
  //         tour: newTour,
  //       },
  //     });
  //   }
  // );
  // res.send('done');
};

exports.deleteTour = (req, res) => {
  // console.log();
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
