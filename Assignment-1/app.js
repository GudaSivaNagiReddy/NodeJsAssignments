const http = require("http");
const requestHandler = require("./ro");

const server = http.createServer(requestHandler);
server.listen(3007);