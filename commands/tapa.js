const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
   'https://imgur.com/tptTX88.gif',
   'https://imgur.com/eo6xTcI.gif',
   'https://imgur.com/UB1eB1J.gif',
   'https://imgur.com/diCYPGJ.gif',
   'https://imgur.com/TkdzgMa.gif',
   'https://imgur.com/VYVeRF0.gif',
   'https://imgur.com/EmuGy1e.gif',
   'https://imgur.com/2PrNcGz.gif',
   'https://imgur.com/gVtj1w5.gif',
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
  const soraya = client.users.cache.get('594251581789044756');
  const embed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle(`${message.author.username}`)
  .setDescription('lembre-se de mencionar um usuário válido para dar um tapa em alguém!')
  .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
  return message.reply(embed)
};
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: "png"});
  const soraya = client.users.cache.get('594251581789044756');
  const embed = new Discord.MessageEmbed()
        .setTitle('Que ota?')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de dar uma tapa em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL())
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}