var express = require('express');
var router = express.Router();
var pg = require('pg');
var config = {
  database: 'phi',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};
var pool = new pg.Pool(config);


// add owner first and last name to database
router.post('/registration', function(req, res){
  var newOwner = req.body;
  console.log('registration url working', newOwner);
  pool.connect(function(errorConnectingToDatabase, client, done){
    if(errorConnectingToDatabase) {
      console.log('Error connecting to database: ', errorConnectingToDatabase);
      res.sendStatus(500);
    } else {
      client.query('INSERT INTO owners (first_name, last_name) VALUES ($1, $2);',
      [newOwner.firstName, newOwner.lastName],
      function(errorMakingQuery, result){
        done();
        if(errorMakingQuery) {
          console.log('Error adding new owner to database: ', errorMakingQuery);
          res.sendStatus(500);
        } else {
          res.send(200);
        }  // NOTE: FOR: else
      });  // NOTE: FOR: client.query + function.error
    }  // NOTE: FOR: else
  });  // NOTE: FOR: pool.connect
});  // NOTE: FOR: router.post

//PHIL SECTION




// add pet to table in database
router.post('/addPet', function(req, res){
  var addPet = req.body
  console.log('add Pet working: ', addPet);
  pool.connect(function(errorConnectingToDatabase, client, done){
    if(errorConnectingToDatabase) {
      console.log('Error connecting to database: ', errorConnectingToDatabase);
      res.sendStatus(500);
    } else {
      client.query('INSERT INTO pets (name, color, breed) VALUES ($1, $2, $3);', // match table columns
      [addPet.petName, addPet.petColor, addPet.petBreed], // match variable created for ajax-post-data
      function(errorMakingQuery, result)
      // client.query('INSERT INTO pets (name, color, breed) VALUES ($1, $2, $3);', // match table columns
      // [addPet.petNameInput, addPet.petColorInput, addPet.petBreedInput], // match ajax data
      // function(errorMakingQuery, result)
      {
        done();
        if(errorMakingQuery) {
          console.log('Error making the database query: ', errorMakingQuery);
          res.sendStatus(500);
        } else {
          res.send(result.rows);
        }  // NOTE: FOR: else
      });  // NOTE: FOR: client.query + function.error
    }  // NOTE: FOR: else
  });  // NOTE: FOR: pool.connect
});  // NOTE: FOR: router.post


//END PHIL SECTION

//KRIS SECTION
// // update pet in pets table in database
// router.put('/updatePet', function(req, res){
//   pool.connect(function(errorConnectingToDatabase, client, done){
//     if(errorConnectingToDatabase) {
//       console.log('Error connecting to database: ', errorConnectingToDatabase);
//       res.sendStatus(500);
//     } else {
//       client.query('SELECT * FROM "books";', function(errorMakingQuery, result){
//         done();
//         if(errorMakingQuery) {
//           console.log('Error making the database query: ', errorMakingQuery);
//           res.sendStatus(500);
//         } else {
//           res.send(result.rows);
//         }
//       });
//     }
//   });
// });
//
// // delete pet from pets table in database
// router.delete('/deletePet', function(req, res){
//   pool.connect(function(errorConnectingToDatabase, client, done){
//     if(errorConnectingToDatabase) {
//       console.log('Error connecting to database: ', errorConnectingToDatabase);
//       res.sendStatus(500);
//     } else {
//       client.query('SELECT * FROM "books";', function(errorMakingQuery, result){
//         done();
//         if(errorMakingQuery) {
//           console.log('Error making the database query: ', errorMakingQuery);
//           res.sendStatus(500);
//         } else {
//           res.send(result.rows);
//         }
//       });
//     }
//   });
// });

//END KRIS SECTION

// TOM SECTION


// END TOM SECTION

//SAM SECTION

//END SAM SECTIOn
// //sends current date to database when pet is checked in
// router.post('/checkIn', function(req, res){
//   pool.connect(function(errorConnectingToDatabase, client, done){
//     if(errorConnectingToDatabase) {
//       console.log('Error connecting to database: ', errorConnectingToDatabase);
//       res.sendStatus(500);
//     } else {
//       client.query('SELECT * FROM "books";', function(errorMakingQuery, result){
//         done();
//         if(errorMakingQuery) {
//           console.log('Error making the database query: ', errorMakingQuery);
//           res.sendStatus(500);
//         } else {
//           res.send(result.rows);
//         }
//       });
//     }
//   });
// });
//
// //sends current date to database when pet is checked out
// router.post('/checkOut', function(req, res){
//   pool.connect(function(errorConnectingToDatabase, client, done){
//     if(errorConnectingToDatabase) {
//       console.log('Error connecting to database: ', errorConnectingToDatabase);
//       res.sendStatus(500);
//     } else {
//       client.query('SELECT * FROM "books";', function(errorMakingQuery, result){
//         done();
//         if(errorMakingQuery) {
//           console.log('Error making the database query: ', errorMakingQuery);
//           res.sendStatus(500);
//         } else {
//           res.send(result.rows);
//         }
//       });
//     }
//   });
// });

module.exports = router;
