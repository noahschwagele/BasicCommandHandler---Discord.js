const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
// const mysql = require("mysql");

const client = new Discord.Client();
const config = require("./config.json");
// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;

//Tournaments
//Channels






//Data Base Connections

// var con = mysql.createConnection({
//   host: "",
//   user: "",
//   password: "",
//   database: "",
// });

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to DataBase");
});




fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Loaded ${commandName}`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./hosting/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./hosting/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Loaded ${commandName}`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./tournaments/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./tournaments/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Loaded ${commandName}`);
    client.commands.set(commandName, props);
  });
});



client.login(config.token);
