var express=require('express');

var app=express();
var mysql= require('mysql');

app.get('/',function(req,res){

var con=mysql.createConnection({
host:"localhost",
user:"root",
password:"no1canhearme",
database:"nodedemo"
});




con.connect(function(err){
  if(err)
  {
    console.log("there is something wrong");
    return;
  }
  console.log("connection successful");

  con.query('SELECT * FROM employees',function(err,rows){
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);
});

  con.end(function(err){
    //this ensures that connection terminate
    console.log("connection terminated");
  });









})


res.sendFile( __dirname + '/index.html');

});

var port= Number(process.env.PORT || 8083)
app.listen(port);
