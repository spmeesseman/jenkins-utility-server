const path = require("path");
const spawn = require("child_process").spawn;
const process = require("process");
const express = require("express");
// eslint-disable-next-line new-cap
const router = express.Router();


router.post("/openfile", function(req, res, next)
{
    let success = false,
        message = "Success";

    router.logger.log("Open file request received");
    if (req.body.message) {
        router.logger.log("   " + req.body.message);
    }
    
    if (!req.body.token)
    {
        res.status(400);
        message = "Invalid parameter specified";
        router.logger.log("   Invalid parameter specified for 'token'");
    }
    else if (!req.body.path) {
        res.status(400);
        message = "Invalid parameter specified";
        router.logger.log("   Invalid parameter specified for 'path'");
    }
    else if (!process.env.JENKINS_UTILITY_SERVER_TOKEN) {
        res.status(503);
        message = "Authentication failed (unavailable)";
        router.logger.log("   Authentication failed - Token is not set in environment");
    }
    else if (req.body.token !== process.env.JENKINS_UTILITY_SERVER_TOKEN)
    {
        res.status(401);
        message = "Authentication failed";
        router.logger.log("   Authentication failed - Invalid token");
    }
    else
    {
        const proc = spawn("powershell", [ 
            "d:\\code\\nodejs\\node_modules\\@perryjohnson\\app-publisher\\script\\edit-file.ps1",
            "-file", req.body.path, "-editor", "notepad.exe", "-seek", true, "-async", true
        ], 
        {
            cwd: path.dirname(req.body.path),
            detached: true,
            shell: true
        });

        //proc.on('spawn', (err) => {
        //    proc.stdin.write("\x26")
        //    proc.stdin.write("\x03")
        //    proc.stdin.write("^{END}")
        //});

        let pid = proc.pid;

        proc.on("error", (err) => {
            router.logger.error("Failed to open file: " + (err ? err.toString() : "Unknown error"));
        });

        proc.on("exit", (code) => {
            router.logger.error(`Process PID ${pid} exited with code ${code}.`);
            pid = 0;
        });

        proc.unref();

        setTimeout(() => {
            if (pid) {
                proc.kill("SIGHUP");
            }
        }, 300000); // 5 minutes

        success = true;
        router.logger.log(`   PID ${proc.pid}`);
        router.logger.log(`      ${req.body.path})`);
        router.logger.log("   Success");
    }

    res.set("Content-Type", "application/json");
    res.send({
        success: success,
        message: message
    });
});

module.exports = router;
