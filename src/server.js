const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const server = require('http').Server(app);


mongoose.connect('mongodb+srv://alissondev:alissondev@powertesting-pudt7.mongodb.net/HitoAPI?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true 
});


app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
