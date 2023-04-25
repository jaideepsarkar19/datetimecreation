import express from "express";
import fs from 'fs'

const app = express()
const dateObject = new Date();
const date = (`0 ${dateObject.getDate()}`).slice(-2);
const month = (`0 ${dateObject.getMonth() + 1}`).slice(-2);
 const year = dateObject.getFullYear();
 // current hours
const hours = dateObject.getHours();
// current minutes
const minutes = dateObject.getMinutes();
// current seconds
const seconds = dateObject.getSeconds();
 const text=`${year}-${month}-${date} ${hours}:${minutes}:${seconds}`

// const dir= './Nodetask/';
//Q1) Write API endpoint which will create a text file in a particular folder.
app.get('/', function (req, res) {
//  res.send(   fs.writeFile(`./${text}.txt`, text, (err)=> {console.log( `Completed file${text}`)}))
    res.send(fs.writeFile(`./text/${date}-${month}-${year}-${hours}hours.txt`,text,(err)=>
    {
        console.log(`completed date-time-creation file-${text} `)
    }))
  })
  app.listen(5000) 

// Q2) Write API endpoint to retrive all the text files in that particular folder.

  // app.get('/read', function (req, res) {
  //   res.send(fs.readdir(dir, (err, files) => {
  //     files.forEach(file => {
  //         console.log(file);
  //     });
  // }))
  // })




