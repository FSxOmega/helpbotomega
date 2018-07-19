const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '..help') {
    	message.reply('Bot Creator:Windows97
      Bot Co-Creator:FSxOmega
      OmegaBots Creator:FSxOmega');
  	}
});

client.login(process.env.BOT_TOKEN);
