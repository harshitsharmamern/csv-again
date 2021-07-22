const express = require('express')

const route = express.Router()
const multer = require("multer");
const path = require('path')
const model = require('../db/model')

const csvFilter = (req, file, cb) => {
  if (file.mimetype.includes("csv")) {
    cb(null, true);
  } else {
    cb("Please upload only csv file.", false);
  }
};

var storage = multer.diskStorage({
  destination: "./upload"
  ,
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
  },
});

var uploadFile = multer({ storage: storage, fileFilter: csvFilter });
////////////////////////////////////////////////////////////////////////////////////////////////////////////
const csvtojson = require('csvtojson')
const mongodb = require('mongodb')
const fs = require('fs')
route.post('/', uploadFile.single('file'), (req, res) => {

  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload a CSV file!");
    }

    let csvData = [];
    // let filepath = 'file_1626948343342.csv'
    let filepath =   "csv again/upload/" + file.fieldname + '_' + Date.now() + path.extname(file.originalname);

console.log(filepath);
//////////////////////////////////////aajhbajhgagc
    //  let fileName =  'sample.csv';

//  var arrayToInsert = [];
//  csvtojson().fromFile(filepath).then(source => {  for (var i = 0; i < source.length; i++) {
//             var oneRow = {
//               Serial: source[i]['Serial'],
//               Company: source[i]['Company'],
//               Employee: source[i]['Employee'],
//               Description: source[i]['Description'],
//                 Leave: source[i]['Leave']

//             };
//             arrayToInsert.push(oneRow);
//         }} )
// ////////////////////////////////akjuiuaiugiauv

    fs.createReadStream(filepath)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
                           throw error.message;
                         })
       .on("data", (row) => {

                           csvData.push(row);
                         })
                         .on("end", () => {
                           /////////////////////////////////////////////////////////////
                           var url = 'mongodb://localhost:27017/csvfileer';
                           
                           var dbConn;
                           mongodb.MongoClient.connect(url, {
                               useUnifiedTopology: true,
                           }).then((client) => {
                               console.log('DB Connected!');
                               dbConn = client.db();
                           }).catch(err => {
                               console.log(  'DB Connection Error: ${err.message}');
                           });




                           var collectionName = 'employees';
                        var collection = dbConn.collection(collectionName);
                        collection.insertMany(csvData, (err, result) => {
                            if (err) console.log(err);
                            if(result){
                                console.log('Import CSV into database successfully' );
                            }
                        });
///////////////////////////////////////////////////////////////////
  
           })
          .catch((error) => {
            res.status(500).send({
              message: "Fail to import data into database!",
              error: error.message,
            });
          }) }
      
           catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
})



//////////////////////////////////////////////////
route.get('/', (req, res) => {

  res.render('sinin')
})

///////////////////////////////////////////////
// const csvtojson = require('csvtojson')
// const fs = require('fs')

// route.post('/', uploadFile.single('file'), (req, res) => {

// for(var i=0; i<1; i++){
//   const  filenam = "./upload/req.file.filename"

// }

// console.log(filenam);
// const filepath = './upload/file_1626886618369.csv'

// csvtojson()
//   .fromFile(filename)
//   .then((json) => {

//     fs.writeFile('out.js', JSON.stringify(json), (err) => {
//       if (err) console.log('err');
//     })

//   })


// const data = new model({
//  name : "harshit", 
//  class : "4"

// })
// data.save()


// })






module.exports = route