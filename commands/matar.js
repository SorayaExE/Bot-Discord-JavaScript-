const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/6gpoyGa.gif',
  'https://imgur.com/e5kvXGK.gif',
  'https://imgur.com/98kSFGK.gif',
  'https://imgur.com/0J1a3kH.gif',
  'https://imgur.com/zgFjZtI.gif',
  'https://imgur.com/soQFzyX.gif',
  'https://imgur.com/Cbo2Ff7.gif',
  'https://imgur.com/gctPiXH.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
    const soraya = client.users.cache.get('594251581789044756');
    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`${message.author.username}`)
    .setDescription('lembre-se de mencionar um usuário válido para matar alguém!')
    .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
    return message.reply(embed)
  };
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: "png"});
  const soraya = client.users.cache.get('594251581789044756');
  const embed = new Discord.MessageEmbed()
        .setTitle('Ih morreu')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de matar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL())
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}