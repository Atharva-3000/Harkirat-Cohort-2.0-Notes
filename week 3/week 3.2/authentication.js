const express = require('express');
const port = 3000;
const app = express();
app.use(express.json());

// HASHING
// Why hash password before storing?
// is one directional


// ENCRYPTION
// needs password to decrypt.


// JWT
// it only works for json input, similar to encryption and hashing but for json and not strings.
// creates a token at the end(a long string)
// JWT.encode, anyone can decode, but only one can verify with the password.
// JWT.verify, using password
// like digital signature
// localStorage.read*"token";


// LOCAL STORAGE
// used to store auth tokens, accessible to everyone, storage of browser remains, even after restarting

app.listen(port);