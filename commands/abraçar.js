const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
   'https://imgur.com/keHKTW8.gif',
   'https://imgur.com/aCr16It.gif',
   'https://imgur.com/FlbvaD1.gif',
   'https://imgur.com/BELaHna.gif',
   'https://imgur.com/2uPyGbN.gif',
   'https://imgur.com/oOm6z62.gif',
   'https://imgur.com/8U2jCru.gif',
   'https://imgur.com/CtBY3iu.gif',
   'https://imgur.com/s8Rd4ka.gif',
   'https://imgur.com/vXb14D5.gif',
   'https://imgur.com/nMiozQo.gif',
   'https://imgur.com/EdIUYoa.gif',
   'https://imgur.com/upZAnO5.gif',
   'https://imgur.com/sXtlBnz.gif',
   'https://imgur.com/fuBPyT1.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
  const soraya = client.users.cache.get('594251581789044756');
  const embed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle(`${message.author.username}`)
  .setDescription('lembre-se de mencionar um usuário válido para abraçar alguém!')
  .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
  return message.reply(embed)
};
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: "png"});
  const soraya = client.users.cache.get('594251581789044756');
  const embed = new Discord.MessageEmbed()
        .setTitle('Abraço *-*')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de dar um abraço em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL())
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}