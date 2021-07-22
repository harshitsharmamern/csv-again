const fs = require('fs')
const express = require('express')
const app = express()
const port = process.env.PORT || 8000
// fs.writeFile('ou.json',"this",(err)=>{})

// require('./db/conn')
app.use('/',require('./controller/route'))
app.set('view engine', 'ejs')
////////////////////////////////////////
// const csvtojson = require('csvtojson')
// const filepath = './upload/file_1626886618369.csv'

// csvtojson()
// .fromFile(filepath)
// .then((json)=>{
    
//     fs.writeFile('out.js',JSON.stringify(json) ,(err)=>{
// if(err) console.log('err');
//     })
// // fs.readFileSync(json,'utf-8', (err)=>{console.log(err);})

// })

///////////////////////////////////////////////////////////////   ///////////////////////////////////////////////////////

// const mongodb = require('mongodb')
// var url = 'mongodb://localhost:27017/csvfileer';

// var dbConn;
// mongodb.MongoClient.connect(url, {
//     useUnifiedTopology: true,
// }).then((client) => {
//     console.log('DB Connected!');
//     dbConn = client.db();
// }).catch(err => {
//     console.log(  'DB Connection Error: ${err.message}');
// });

// const csvtojson = require('csvtojson')

//     let fileName =  'sample.csv';

// var arrayToInsert = [];
// csvtojson().fromFile(fileName).then(source => {
//     // Fetching the all data from each row
//     for (var i = 0; i < source.length; i++) {
//          var oneRow = {
//              firstName: source[i]['Firstname'],
//              lastName: source[i]['Lastname'],
//              city: source[i]['City'],
//              salary: source[i]['Salary']
//          };
//          arrayToInsert.push(oneRow);
//      }
//      //inserting into the table “employees”
//      var collectionName = 'employees';
//      var collection = dbConn.collection(collectionName);
//      collection.insertMany(arrayToInsert, (err, result) => {
//          if (err) console.log(err);
//          if(result){
//              console.log('Import CSV into database successfully' );
//          }
//      });
// });






/////////////////////////////////
app.listen(port,()=>{
    console.log(`${port}`);
})









