const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Botun olan ${client.user.tag}!Sunucuya giriş yaptı ve artık aktif!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam');
  }
  if (msg.content.toLowerCase() === 'pp') {
    msg.channel.send(msg.author.avatarURL);
  }
  if (msg.content.toLowerCase() === 'muhammed') {
    msg.reply('Muhammed abim kral adamdır kendisi çok insaflı birisidir kesinlikle kimseyi dolandırmaz');
  }

});

client.login('process.env.Bot_Token');
