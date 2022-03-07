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
  message.delete().catch(O_o => {});
  const embed = new Discord.MessageEmbed()
  .setColor('#DA70D6')
  .setTitle('Qual lane você joga?')
  .addFields(
    { name: '<:c_top:949346325147815966>Top', value: "\u200B"},
    { name: '<:c_jungle:949346393464635473>Jungle', value: "\u200B"},
    { name: '<:c_mid:949346347549597696>Mid', value: "\u200B"},
    { name: '<:c_adc:949346371280986222>Adc', value: "\u200B"},
    { name: '<:c_sup:949346307905052732>Sup', value: "\u200B"}
  )
  await message.channel.send(embed);

  message.channel.send('@everyone').then(marcados =>
    marcados.delete()
  )


}