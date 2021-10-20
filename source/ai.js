const Discord = require("discord.js")
const client = new Discord.Client();
const alexa = require("alexa-bot-api");
var chatbot = new alexa("aw2plm");
const auth = require("./config.json");

client.on("ready", () => {
    // ...
    console.log("[INFO]: Inicializado")
});


client.on("message", async message => {
    
    if(message.author.bot) return;
    let content = message.content;
    chatbot.getReply(content).then(r => message.channel.send(r))
});

client.login(auth.token); // você pode usar o .env/screts