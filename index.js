const information = require('./information');
const cowsay = require("cowsay");


let thingToSay = "Salut je suis "+information.info.name+" du campus de "+information.info.campus

console.log(cowsay.say({
    text : thingToSay,
    e : "><",
    T : "U "
}));

