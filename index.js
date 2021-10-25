// ------ PACKAGE IMPORTS AND VARS ------ //
const express = require("express")
const app = express()
const monitor = require("express-status-monitor")
const aoi = require('aoi.js')
const db = require('quick.db')

// ------ ROUTES HANDLER ------ //
require("./routes")(app)

// ------ HOME PAGE ------ //
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/home.json')
  db.add("reqs_total", 1)
})

app.get('/*', (req, res) => {
  res.send({ error: "Invalid endpoint" })
})

// -------- CHALK SHIT (by inder xd) ---------- //
const chalk = require("chalk");
const up = chalk.green; // ok working color
const static = chalk.hex("#03fcca");// Staticstics and lines color
const blurplexd = chalk.hex("#7289DA"); // xd blurple color
const on = chalk.yellow; // process turned on color
const nodejsv = process.version; //nodejs version
const djsv = ("v12.5.3") //djs version
const { version: packv } = require('./package.json'); // package.json version for console 

// ------ API CONFIGS AND SHIT ------ //
app.listen(5000, () => {
  console.log(static("--- [ Staticstics ] ---"))
  console.log(on(`  NodeJS: ${nodejsv} \n  DiscordJS: ${djsv}\n  Package.json: ${packv} `))
  console.log(static("------------------------"))
  console.log(blurplexd(" [ Successfully loaded all elements and codes ]"))
  console.log(static("------------------------"))
  console.log(up(" [ gud-api is up! ✅ ]"))
  console.log(static("------------------------"));
  console.log(up(" [ Connected to - https://gud-api.gofaizen.xyz ✅ ]"))
  console.log(static("------------------------"));
  
})

const rateLimiter = require('express-rate-limit')({
  windowMs: 3000,
  // message: 'calm down ffs',
  max: 3,
  headers: true,
  keyGenerator: function(req, /* res*/) {
    const str = (req.headers['x-forwarded-for'] || req.socket.remoteAddress) || req.ip;

    return str;
  }, 
  handler: function(req, res, /*next*/) {
    console.log('RATELIMIT >> ' + req.originalUrl.split('/')[1]);

    res.status(429).json({
      statusCode: 429,
      error: {
        message: 'You are Ratelimited!',
        limitedUntil: req.rateLimit.remaining + ' Remaining Requests after unblock',
        currentReq: req.rateLimit.current + ' Current Requests made'
      },
      dev: {
        stack: '👻',
        time: new Date().toLocaleDateString() + ' | ' + new Date().toLocaleTimeString()
      }
    });
  }
});
app.use(rateLimiter)
app.set('json spaces', 1); // clean look
app.use(monitor()) // logs an stuff
