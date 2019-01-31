/*
 * @Date: 31st Jan 2018
 * @Author: Ameya S. Daddikar
 * 
 * @Description: A common configurations file to setup launch modes, keys, secrets, etc.
 * 
 */

// Dependencies
const fs = require('fs');
const path = require('path');

// Container
let config = {};

config.debug = {
  httpPort: 5000,
  httpsPort: 5001
}

config.staging = {
  httpPort: 5000,
  httpsPort: 5001
}

let currConfig = config[process.env.NODE_ENV];

//Default config: debug
if (typeof(currConfig) == 'undefined')
  currConfig = config.debug;

// Setting HTTPS certificates
try{
  currConfig.httpsOptions = {
    key  : fs.readFileSync(path.join(__dirname, './key.pem'), {encoding:'utf-8', flag:'r'}),
    cert : fs.readFileSync(path.join(__dirname, './cert.pem'), {encoding:'utf-8', flag:'r'})
  }
} catch(err){
  console.log('Unable to set HTTPS certificates. HTTPS service will not be initialized.');
  currConfig.httpsOptions = false;
}

module.exports = currConfig;