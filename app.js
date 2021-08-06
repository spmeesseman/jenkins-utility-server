
const process = require("process");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var signale = require("signale");
var figures = require("figures");
var indexRouter = require("./routes/index");
var openFileRouter = require("./routes/openfile");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/", openFileRouter);

function getSigLogger({ stdout, stderr })
{
  return new signale.Signale({
      config: { displayTimestamp: true, underlineMessage: false, displayLabel: false },
      disabled: false,
      interactive: false,
      scope: "jenkins-utility-server",
      stream: stdout,
      types: {
        error: { badge: figures.cross, color: "red", label: "" }, // stream: [stderr]},
        log: { badge: figures.info, color: "magenta", label: "" }, // stream: [stdout]},
        success: { badge: figures.tick, color: "green", label: "" } // stream: [stdout]},
      },
  });
}

const context = { stdout: process.stdout, stderr: process.stderr };
app.logger = getSigLogger(context);

indexRouter.logger = app.logger;
openFileRouter.logger = app.logger;

module.exports = app;
