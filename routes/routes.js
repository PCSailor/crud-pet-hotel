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
        }
      });
    }
  });
});

// // add pet to table in database
// router.post('/addPet', function(req, res){
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
// //




//Kris's section starts here//
router.put('/updatePet/:id', function(req, res){
  var petID = req.params.id;
  var petObject = req.body;
  console.log('id of pet to update: ', petID);
  pool.connect(function(errorConnectingToDatabase, client, done){
    if(errorConnectingToDatabase) {
      console.log('Error connecting to database: ', errorConnectingToDatabase);
      res.sendStatus(500);
    } else {
      client.query('UPDATE pets SET name=$1, breed=$2, color=$3 WHERE id=$4;',
      [petObject.petName, petObject.breed, petObject.color, bookId],
      function(errorMakingQuery, result){
        done();
        if(errorMakingQuery) {
          console.log('Error making the database query: ', errorMakingQuery);
          res.sendStatus(500);
        } else {
          res.sendStatus(202);
        }
      });
    }
  });
}); // closing put request

// Kris's section ends here //
module.exports = router;
