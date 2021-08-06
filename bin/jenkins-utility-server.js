#!/usr/bin/env node

const process = require("process");
const app = require("../app");
const http = require("http");
const gradient = require("gradient-string");
const chalk = require("chalk");

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) 
{
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Get port from environment and store in Express.
 */

 var port = normalizePort(process.env.PORT || "4322");
 app.set("port", port);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) 
{
    if (error.syscall !== "listen") {
        throw error;
    }

    var bind = typeof port === "string" ?
        "Pipe " + port :
        "Port " + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            throw new Error(bind + " requires elevated privileges");
        case "EADDRINUSE":
            throw new Error(bind + " is already in use");
        default:
            throw error;
    }
}

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() 
{
    const addr = server.address(),
          bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    //console.log('Listening on ' + bind);
    app.logger.log(chalk.bold(gradient("cyan", "pink").multiline("Listening on " + bind, { interpolation: "hsv" })));
}
 
 /**
  * Listen on provided port, on all network interfaces.
  */
 
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
