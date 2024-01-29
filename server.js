require('json-bigint-patch');
const express = require("express");
const http = require("http");
const cors = require("cors");
require("dotenv").config();

const { env } = process;

let server = express();

server.use(express.json(), cors());

server.use('/note', require('./source/note/router/note.router'));

server = http.createServer(server)

server.listen(env.PORT, () => {
    console.log(`\t>>> Server listening on port ${env.PORT}`);
});