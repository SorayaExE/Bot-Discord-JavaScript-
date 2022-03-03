


module.exports = async (client, member) =>{
    const Discord = require("discord.js");

	const embed = new Discord.MessageEmbed()
    const soraya = client.users.cache.get('594251581789044756');
    let canal = client.channels.cache.get("711373673310978150");
    const leftEmbed = new Discord.MessageEmbed()
    .setColor('#bf80ff')
    .setTitle('; - ; triste estou')
    .setAuthor(member.user.tag, member.user.avatarURL())
    .setDescription(`${member.user.username} Saiu do servidor ; -;`)
    .setThumbnail(member.user.avatarURL())
    .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());

    canal.send(leftEmbed);
};