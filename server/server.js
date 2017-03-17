/*
This Logic Layer could be better implemented using
* Using Serverless (www.serverless.com) on OpenWhisk
* Confluent/Kafka REST API
* Hyperledger Fabric REST API
* There are good Node.js clients for each.
*/

var express = require('express')
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser')

require('shelljs/global');

// Sync call to exec()
var version = exec('node --version', {silent:true}).output;

/*
Usage:
./NetworkLauncher.sh [opt] [value]
-d: ledger database type, default=goleveldb
-f: profile string, default=testOrg
-h: hash type, default=SHA2
-k: number of kafka, default=solo
-n: number of channels, default=1
-o: number of orderers, default=1
-p: number of peers per organization, default=1
-r: number of organizations, default=1
-s: security type, default=256
-t: ledger orderer service type [solo|kafka], default=solo
-c: crypto directory, default=$GOPATH/src/github.com/hyperledger/fabric/common/tools/cryptogen
-w: host ip 1, default=0.0.0.0
-F: local MSP base directory, default=$GOPATH/src/github.com/hyperledger/fabric/common/tools/cryptogen/crypto-config
-G: src MSP base directory, default=/opt/hyperledger/fabric/msp/crypto-config
*/

let cmdMap = {
  'd': 'ledgerType',
  'f': 'profileString',
  'h': 'hashType',
  'k': 'numberOfKafka',
  'n': 'numberOfChannels',
  'o': 'numberOfOrderers',
  'p': 'numberOfPeersPerOrganization',
  'r': 'numberOfOrganizations',
  's': 'securityType',
  't': 'ordererType',
  'c': 'cryptoDirectory',
  'w': 'hostIp',
  'F': 'localMSP',
  'G': 'srcMSP'
};

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function (req, res, next) {
  var params = req.body;
  var cmd = './NetworkLauncher.sh ';
  Object.keys(cmdMap).forEach(function(key) {
      if (params[cmdMap[key]]) {
        cmd += '-' + key + ' ' + params[cmdMap[key]] + ' ';
      }
  });

  console.log('Executing:')
  console.log(cmd);

  // Async call to exec()
  exec(cmd, function(status, output) {
    res.json({output: output, status: status})
  });
})

app.listen(4300, function () {
  console.log('API listening on port 4300.')
})
