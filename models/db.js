var chalk = require('chalk');
var mongoose = require( 'mongoose' );

//var dbURI = 'mongodb://localhost/employee_details';
var dbURI = 'mongodb://kamal:kamal@ds137141.mlab.com:37141/emp-payroll'; 

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log(chalk.green('Mongoose connected to ' + dbURI));
});

mongoose.connection.on('error',function (err) {
  console.log(chalk.red('Mongoose connection error: ' + err));
});

mongoose.connection.on('disconnected', function () {
  console.log(chalk.red('Mongoose disconnected'));
});

var employeeSchema = new mongoose.Schema({
  name: {type: String},
  email: {type: String},
  dob: {type: Date},
  gender:{type:String},
  department:{type:String},
  age:{type:Number}
});

mongoose.model( 'Employee', employeeSchema );


