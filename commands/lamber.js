const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/aIhpT5K.gif',
  'https://imgur.com/mA4tQtR.gif',
  'https://imgur.com/chAUACa.gif',
  'https://imgur.com/j54SSBJ.gif',
  'https://imgur.com/DZxu9Bd.gif',
  'https://imgur.com/eDdarn9.gif',
  'https://imgur.com/XBYFilY.gif',
  'https://imgur.com/MN6FNyk.gif',
  'https://imgur.com/wIuNMBw.gif',
  'https://imgur.com/E28vKpB.gif',
  'https://imgur.com/gk3afZo.gif',
  'https://imgur.com/udrVfm9.gif',
  'https://imgur.com/HbECGOz.gif',
  'https://imgur.com/qi8TYvI.gif',
  'https://imgur.com/zOaQdBD.gif',
  'https://imgur.com/iojun5T.gif',
  'https://imgur.com/QsWP7aZ.gif',
  'https://imgur.com/n8SSxXp.gif',
  'https://imgur.com/eMbQy97.gif',
  'https://imgur.com/SmvWUYI.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
  const soraya = client.users.cache.get('594251581789044756');
  const embed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle(`${message.author.username}`)
  .setDescription('lembre-se de mencionar um usuário válido para lamber alguém!')
  .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
  return message.reply(embed)
};
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: "png"});
  const soraya = client.users.cache.get('594251581789044756');
  const embed = new Discord.MessageEmbed()
        .setTitle('Lambidão')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de dar um lambidão em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL())
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}