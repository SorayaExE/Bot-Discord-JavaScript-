const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
   'https://imgur.com/JWDUSDi.gif',
   'https://imgur.com/ZoRqhKn.gif',
   'https://imgur.com/BEjEKO2.gif',
   'https://imgur.com/EW7rjBK.gif',
   'https://imgur.com/wgFqRAT.gif',
   'https://imgur.com/duxWOpj.gif',
   'https://imgur.com/gBCuAAc.gif',
   'https://imgur.com/NOBG5aR.gif',
   'https://imgur.com/3JQbQVD.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
  const soraya = client.users.cache.get('594251581789044756');
  const embed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle(`${message.author.username}`)
  .setDescription('lembre-se de mencionar um usuário válido para dar aquela pimbada monstra em alguém!')
  .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
  return message.reply(embed)
};
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: "png"});
  const soraya = client.users.cache.get('594251581789044756');
  const embed = new Discord.MessageEmbed()
        .setTitle('Eitaaaa')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de dar uma pingolaga em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL())
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}