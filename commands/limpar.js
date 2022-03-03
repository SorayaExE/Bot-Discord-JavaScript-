const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES")){

      const soraya = client.users.cache.get('594251581789044756');
      const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(`${message.author.username}`)
      .setDescription('Você é fraco, lhe falta permissão de Gerenciar Mensagens para usar esse comando')
      .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
      return message.reply(embed)
  }
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 100){
     const soraya = client.users.cache.get('594251581789044756');
      const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(`${message.author.username}`)
      .setDescription('forneça um número de até 100 mensagens a serem excluídas')
      .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
      return message.reply(embed)
    };
    const fetched = await message.channel.messages.fetch({
      limit: deleteCount + 1
    });
    await message.channel.bulkDelete(fetched);
    const soraya = client.users.cache.get('594251581789044756');
    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`${message.author.username} limpou o chat!`)
    .setDescription(`${args[0]} mensagens limpas nesse chat`)
    .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
    message.channel.send(embed)
      .catch(error =>
        console.log(`Não foi possível deletar mensagens devido a: ${error}`)
      );
    };