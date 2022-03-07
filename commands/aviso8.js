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
  let avatar = message.author.displayAvatarURL({format: "png"});
  const soraya = client.users.cache.get('594251581789044756');
  const desocupado = client.users.cache.get('948819280932261918');
  message.delete().catch(O_o => {});
  const embed = new Discord.MessageEmbed()
  .setColor('#4B0082')
  .setTitle('<a:M_nintendo:949182151612588092> Bem vindo a área gamer! <a:M_nintendo:949182151612588092>')
  .setDescription('Selecione os jogos que você joga para receber os respectivos cargos e liberar mais chats e calls!')
  .setAuthor(`${desocupado.username}`, desocupado.avatarURL())
  .addFields(
    { name: '', value: "\u200B"},
    { name: '', value: "\u200B"},
    { name: '', value: "\u200B"},
    { name: '', value: "\u200B"},
    { name: '', value: "\u200B"}
  )
  await message.channel.send(embed);

  message.channel.send('@everyone').then(marcados =>
    marcados.delete()
  )


}