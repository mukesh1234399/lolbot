const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

const m = await message.channel.send("MY PREFIX IS g");
}

let prefix = new  Discord.Message

module.exports.help = {
  name: "prefix"
}