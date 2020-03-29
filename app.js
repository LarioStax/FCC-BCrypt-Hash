'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();

fccTesting(app); //For FCC testing purposes

const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';
const bcrypt = require("bcrypt");

let hash;

//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
	if (err) {
		console.log(err);
	} else {
		hash = hash;
		console.log("Hash 1:");
		console.log(hash);
		bcrypt.compare(myPlaintextPassword, hash, function (err, res) {
			if (err) {
				console.log(err);
			} else {
				console.log("Res 1:");
				console.log(res);
			}
		});
	}
});



bcrypt.hash('passw0rd!', 13, (err, hash) => {
	console.log("Hash 2:");
  console.log(hash);
  //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
  bcrypt.compare('passw0rd!', hash, (err, res) => {
    console.log("Res 2:");
    console.log(res); //true
  });
});
//END_ASYNC

//START_SYNC



//END_SYNC


app.listen(process.env.PORT || 3000, () => {});
