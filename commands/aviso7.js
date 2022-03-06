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
  .setColor('#FFE4E1')
  .setAuthor(`${desocupado.username}`, desocupado.avatarURL())
  .setDescription('Obrigado por se registrar:sparkling_heart: agora vc realmente é um desocupado<a:oveia:715776701677961297>')
  await message.channel.send(embed);

  message.channel.send('@everyone').then(marcados =>
    marcados.delete()
  )


}