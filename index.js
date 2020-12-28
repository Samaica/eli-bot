// require the discord.js module
const Discord = require('discord.js');

const { prefix, token } = require('./config.json');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});



client.on('message', message => { 
    if (message.author.id === "USER DISCORD ID HERE") {
        const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'DISCORD EMOTE HERE');
    message.react(reactionEmoji);
    }
    
  
    /*if (message.content.startsWith(`${prefix}`)) {
        message.react('😄');
    }*/

	if (message.content.startsWith(`${prefix} u a bch`)) {
        message.channel.send('I know.');
    } 
    
    else if (message.content.startsWith(`${prefix} u still a bch`)) {
        message.channel.send('Necking brb.');
    }

});

// login to Discord with your app's token
client.login(token);

