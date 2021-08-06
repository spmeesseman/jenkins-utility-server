const process = require("process");
const express = require("express");
// eslint-disable-next-line new-cap
const router = express.Router();

router.post("/", function(req, res, next) 
{
    let success = false,
        message = "Success";

    router.logger.log("Root request received");

    if (!req.body.token)
    {
        res.status(400);
        message = "Invalid parameter specified";
        router.logger.log("   Invalid parameter specified for 'token'");
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
        success = true;
        if (req.body.message) {
            router.logger.log("   " + req.body.message);
        }
    }

    res.set("Content-Type", "application/json");
    res.send({
        success: success,
        message: message
    });
});

module.exports = router;
