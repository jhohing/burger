const connection = require("./connection.js");

const orm = {
    selectAll: function() {
    //   var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    //   // SELECT * FROM pets WHERE animal_name = "Rachel"
    //   connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //   });
    },
    insertOne: function() {
    //   var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    //   // SELECT animal_name FROM pets ORDER BY price DESC;
    //   console.log(queryString);
    //   connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //   });
    },
    updateOne: function() {
    //   var queryString =
    //     "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
    //   // SELECT buyer_name, COUNT(buyer_name) AS count FROM buyers LEFT JOIN pets ON pets.buyer_id= buyers.id GROUP BY buyer_name ORDER BY count DESC LIMIT 1"
  
    //   connection.query(
    //     queryString,
    //     [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
    //     function(err, result) {
    //       if (err) throw err;
    //       console.log(result);
    //     }
    //   );
    }
  };
  
  module.exports = orm;