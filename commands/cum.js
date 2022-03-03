const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/y6Cttob.gif',
  'https://imgur.com/bKpCbJU.gif',
  'https://imgur.com/rL59okG.gif',
  'https://imgur.com/AXyaavd.gif',
  'https://imgur.com/1FAQjxa.gif',
  'https://imgur.com/AH8a9Cg.gif',
  'https://imgur.com/JP15TVN.gif',
  'https://imgur.com/zqR87DA.gif',
  'https://imgur.com/i9LWcPk.gif',
  'https://imgur.com/skzuwyz.gif',
  'https://imgur.com/ANw7LnB.gif',
  'https://imgur.com/SwcBcBF.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
  const soraya = client.users.cache.get('594251581789044756');
  const embed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle(`${message.author.username}`)
  .setDescription('lembre-se de mencionar um usuário válido para soltar o leite em alguém!')
  .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
  return message.reply(embed)
};
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: "png"});
  const soraya = client.users.cache.get('594251581789044756');
  const embed = new Discord.MessageEmbed()
        .setTitle('Leiteeeee')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de soltar aqueeeele leite da fonte em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL())
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}