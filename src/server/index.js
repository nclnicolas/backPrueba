const express = require('express');
const cors = require('cors');
const routes = require('../routes/index');
require('dotenv').config();

const server = express();

/* if(process.env.NODE_ENV === 'development'){
    server.use(cors())
}else {
    server.use(
        cors({
          origin: 'http://localhost:5173/clientes'
        })
      );
} */

server.use(
  cors({
      origin: ['http://localhost:5173']
  })
);
server.use(express.json());
server.use('/', routes);


module.exports = server;
