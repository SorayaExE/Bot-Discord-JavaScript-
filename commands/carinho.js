const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
   'https://imgur.com/ToI0IGW.gif',
   'https://imgur.com/4DahWDP.gif',
   'https://imgur.com/CfZRcBU.gif',
   'https://imgur.com/IpyopnN.gif',
   'https://imgur.com/KFDfqQ2.gif',
   'https://imgur.com/kYSDefw.gif',
   'https://imgur.com/sdOLv6C.gif',
   'https://imgur.com/WyzQfJ5.gif',
   'https://imgur.com/cxzX2Kk.gif',
   'https://imgur.com/kE3J3eg.gif',
   'https://imgur.com/mmuvUpu.gif',
   'https://imgur.com/ylN4zvn.gif',
   'https://imgur.com/PevLrH3.gif',
   'https://imgur.com/SkTebWz.gif',
   'https://imgur.com/umQ90Y6.gif',
   'https://imgur.com/O7f8j0u.gif',
   'https://imgur.com/OtslsJU.gif',
   'https://imgur.com/mkjuFYX.gif',
   'https://imgur.com/f5q9xml.gif',
   'https://imgur.com/uI6iKkB.gif',
   'https://imgur.com/aHRDoNN.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
  const soraya = client.users.cache.get('594251581789044756');
  const embed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle(`${message.author.username}`)
  .setDescription('lembre-se de mencionar um usuário válido para fazer carinho em alguém!')
  .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
  return message.reply(embed)
};
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: "png"});
  const soraya = client.users.cache.get('594251581789044756');
  const embed = new Discord.MessageEmbed()
        .setTitle('Carinho *-*')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de fazer um carinho em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL())
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}