const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/FLxByeG.gif',
  'https://imgur.com/VyAd226.png',
  'https://imgur.com/5TQKchr.png',
  'https://imgur.com/s22vDpm.png',
  'https://imgur.com/jCEwAT1.gif',
  'https://imgur.com/zK7jR7b.gif',
  'https://imgur.com/NhQBZ3K.gif',
  'https://imgur.com/aBgC6XA.gif',
  'https://imgur.com/sRlu4K5.gif',
  'https://imgur.com/zn5KNW6.gif',
  'https://imgur.com/wQKF9Ro.gif',
  'https://imgur.com/V7zjnkc.gif',
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
    const soraya = client.users.cache.get('594251581789044756');
    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`${message.author.username}`)
    .setDescription('lembre-se de mencionar um usuário válido para prender um lolicon!')
    .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
    return message.reply(embed)
  };
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: "png"});
  const soraya = client.users.cache.get('594251581789044756');
  const embed = new Discord.MessageEmbed()
        .setTitle('Loli???')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de denunciar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL())
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}