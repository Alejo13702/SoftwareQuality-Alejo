const express = require('express');

const {db_connection} = require('./database/connection.js');

const app = express();

app.set('port',process.env.PORT || 4000);

app.use(express.json());

app.all('*',function(req,res, next) {
  res.header("Access-Control-Allow-Origin","*"); 
  res.header("Access-Control-Allow-Headers","*");
  res.header("Access-Control-Allow-Methods",'PUT, POST, GET, DELETE, OPTIONS');
  next();
})

app.use('/api/users', requiere('./routes/user'));

try{
  const db_connection = db_connection.authenticate();
  console.log("Connection has been established succesfully :)");
} catch(error){
  console.error("Unable to connect to the database :()");
}

app.listen(app.get('port'),() => {
  console.log('server in port : ', 4000);
})
