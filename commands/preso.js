const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES")){

    const soraya = client.users.cache.get('594251581789044756');
    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`${message.author.username}`)
    .setDescription('Você é fraco, lhe falta permissão do ademir para usar esse comando')
    .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
    return message.reply(embed)
}


var list = [
   'https://imgur.com/G8r3Jw8.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
  const soraya = client.users.cache.get('594251581789044756');
  const embed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle(`${message.author.username}`)
  .setDescription('lembre-se de mencionar um usuário válido para tacar na prisão!')
  .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
  return message.reply(embed)
};
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: "png"});
  const soraya = client.users.cache.get('594251581789044756');
  message.delete().catch(O_o => {});
  const embed = new Discord.MessageEmbed()
        .setTitle('Prisão')
        .setColor('#000000')
        .setDescription(`O infrator ${user} foi tacado na cadeia por ${message.author}`)
        .setImage(rand)
        .setTimestamp()
        .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL())
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}