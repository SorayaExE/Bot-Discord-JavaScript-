const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES")){

      const soraya = client.users.cache.get('594251581789044756');
      const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(`${message.author.username}`)
      .setDescription('Você é fraco, lhe falta permissão do ademir para usar esse comando')
      .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
      return message.reply(embed)
  }
  const sayMessage = args.join(" ");
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage);
};