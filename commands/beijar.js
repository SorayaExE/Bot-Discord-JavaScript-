const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif',
  'https://imgur.com/HEf8RC5.gif',
  'https://imgur.com/70An1PS.gif',
  'https://imgur.com/IrFO923.gif',
  'https://imgur.com/ECHCRu1.gif',
  'https://imgur.com/PqA9rtK.gif',
  'https://imgur.com/K83nLKK.gif',
  'https://imgur.com/GyZswq5.gif',
  'https://imgur.com/nuQkBph.gif',
  'https://imgur.com/YTnoqWE.gif',
  'https://imgur.com/rgqM4yC.gif',
  'https://imgur.com/zglKSpE.gif',
  'https://imgur.com/Jlbyq6h.gif',
  'https://imgur.com/K6AuF9M.gif',
  'https://imgur.com/bUbVoW4.gif',
  'https://imgur.com/bcBCrRF.gif',
  'https://imgur.com/s0fHxsf.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
  const soraya = client.users.cache.get('594251581789044756');
  const embed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle(`${message.author.username}`)
  .setDescription('lembre-se de mencionar um usuário válido para beijar alguém!')
  .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
  return message.reply(embed)
};
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: "png"});
  const soraya = client.users.cache.get('594251581789044756');
  const embed = new Discord.MessageEmbed()
        .setTitle('Beijo')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de dar aqueeeeele beijão em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL())
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed)
  }
