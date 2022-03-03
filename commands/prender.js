const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const usuario = message.guild.members.cache.get(message.mentions.users.first().id);
const cargopreso = message.guild.roles.cache.find(role => role.name === '--{🚔}Preso--');
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
  'https://imgur.com/fIRaNWr.png'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
    const soraya = client.users.cache.get('594251581789044756');
    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`${message.author.username}`)
    .setDescription('lembre-se de mencionar um usuário válido para prender alguém!')
    .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
    return message.reply(embed)
  };
/*
message.channel.send(`${message.author.username} **acaba de prender** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: "png"});
  const soraya = client.users.cache.get('594251581789044756');
  const embed = new Discord.MessageEmbed()
        .setTitle('Safrado foi preso')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de prender ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL())
        .setAuthor(message.author.tag, avatar);
        usuario.roles.add(cargopreso);
        await message.channel.send(embed);
}